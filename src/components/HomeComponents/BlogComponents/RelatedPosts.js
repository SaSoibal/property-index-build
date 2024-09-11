import React, { useState, useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import moment from 'moment';
import {Link, useParams} from 'react-router-dom';
import LanguageContext from "../../../context/LanguageProvider";
import ReactOwlCarousel from "react-owl-carousel";
import {ENVIRONMENT} from "../../../config/environment/environment";
import {Skeleton} from "antd";
import {useDispatch} from "react-redux";
import {blogDetailsGetAction} from "../../../pages/DefaultPages/redux/blog-details/blogDetails.actions";
import {t} from "i18next";
function RelatedPosts(props) {
    const [data, setData] = useState([])
    const { language } = useContext(LanguageContext);
    useEffect(()=> {
        setData(props.rlatedPost)
    }, [props.rlatedPost])
    const dispatch = useDispatch();
    const { slug } = useParams();
    let count = 0;
    useEffect(() => {
        if(count == 0)
        {
            dispatch(blogDetailsGetAction(slug));
            count = count + 1;
        }
    }, [count,language]);

    const options = {
        navText: ["Prev", "Next"],
        responsive: {
            0: {
                items: 2,
            },
            450: {
                items: 2,
            },
            600: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 4,
            },
            1280: {
                items: 4,
            },
            1366: {
                items: 4,
            },
        }
    };

    return (
        <div className='blog_details_relates_post'>
            <Container>
                <div className='' style={{ textAlign: "center" }}>
                    <h3> {t('Related_Posts')} </h3>
                    <p className='title__p'> There is no greater benchmark for success than customer satisfaction.<br></br> Over the years, we’ve built a culture of service.   </p>
                </div>
                {data.length > 0 ? <>
                    <ReactOwlCarousel loop
                        margin={10}
                        nav={true}
                        dots={true}
                        autoplay={false}
                        autoplayTimeout={4000}
                        className="how_it_work_items owl-carousel"
                        {...options}>
                        {data.map((item, i) =>
                                <div key={i} className='item'>
                                    <div className="acr-featured-listing">
                                        <div className="featured-listing-thumb">
                                            <Link to={`/blog-details/${item.slug}`}>
                                                <img className='img-fit img_height' src={ENVIRONMENT.FILE_URL + item.image}
                                                     alt="listing"/>
                                            </Link>
                                        </div>
                                        <div className='box__item_contn'>
                                            <Link to={`/blog-details/${item.slug}`}>
                                                <h3> {language === "en" ? <>{item.title_en.substring(0, 30)}
                                                    </> : <>{item.title_bn.substring(0, 30)}</>}
                                                </h3>
                                            </Link>
                                            {/*<p> {language == 'bn'?(item.category?.title_bn):(item.category?.title_en)}</p>*/}
                                            {language === "en" ? <>
                                                <div className='editor__html'
                                                     dangerouslySetInnerHTML={{__html: item.description_en.substring(0, 60)}}></div>
                                            </> : <>
                                                <div className='editor__html'
                                                     dangerouslySetInnerHTML={{__html: item.description_bn.substring(0, 60)}}></div>
                                            </>}
                                            <span
                                                className="date left"> {moment(item?.created_at).format("MMM Do YY")}</span>
                                            <span className="time right">8 minutes</span>
                                        </div>
                                    </div>
                                </div>
                        )}
                    </ReactOwlCarousel>
                </> : <> <Skeleton /> </>}

            </Container>
        </div>
    )
}

export default RelatedPosts
