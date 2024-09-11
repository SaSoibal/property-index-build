
import React, {useContext } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {Skeleton} from 'antd';
import moment from 'moment';
import { RiFacebookFill, RiYoutubeFill, RiTwitterFill, RiInstagramFill, RiLinkedinFill, RiAlbumLine } from "react-icons/ri";
import LanguageContext from "../../../context/LanguageProvider";
import {ENVIRONMENT} from "../../../config/environment/environment";
import {t} from "i18next";
import Newsletter from "./Newsletter";

function BlogContant(props) {
    const { language } = useContext(LanguageContext);
    const blogs = props.blog;
    const archives = props.archives;
    const loadings = props.loading;

    return (
        <div className='a_blog_full_area'>
            <Container>
                <Row>
                    <Col sm={6} lg={8}>
                        {loadings ?
                            <><Skeleton /></> :
                            <>
                            {blogs?.map((item, i) =>
                                <div key={i} className="property-box-2">
                                    <div className="row g-0">
                                        <div className="col-lg-5 col-md-5">
                                            <div className="property-photo">
                                                <Link to={`blog-details/${item.slug}`} className="property-img">
                                                    <img src={ENVIRONMENT.FILE_URL + item.image} alt="properties" className="img-fite" />
                                                    <div className="listing-badges">
                                                        <span className="featured">Featured</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7">
                                            <div className="detail">
                                                <div className="hdg">
                                                    <h3 className="title">
                                                        <Link to={`/blog-details/${item.slug}`} > {language == "en" ? item?.title_en : item?.title_bn}</Link>
                                                    </h3>
                                                    <h5 className="location">
                                                        <Link to={`/blog-details/${item.slug}`}>
                                                            {moment(item?.created_at).format("MMM Do YY")}
                                                        </Link>
                                                    </h5>
                                                </div>
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <p>  {language === "en" ? <> <div className='editor__html' dangerouslySetInnerHTML={{ __html: item?.description_en.substring(0, 100) }} /> </> : <> <div className='editor__html' dangerouslySetInnerHTML={{ __html: item?.description_bn.substring(0, 100) }} /> </>} </p>
                                                    </li>
                                                </ul>
                                                <div className="footer">
                                                        Reading Time: 4 minutes
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>}
                    </Col>
                    <Col sm={6} lg={4}>
                        <Newsletter/>
                        <div className='blog__social__icon'>
                            <RiFacebookFill className='b_s_icon fb' />
                            <RiYoutubeFill className='b_s_icon yt' />
                            <RiTwitterFill className='b_s_icon tw' />
                            <RiInstagramFill className='b_s_icon in' />
                            <RiLinkedinFill className='b_s_icon ln' />
                        </div>
                        <div className='archiver__link'>
                            <div className='block_archives'>
                                <h3> {t('Archives')} </h3>
                            </div>
                            {loadings ?
                                <><Skeleton /></> :
                                <>
                                {archives?.map((archive, j) =>
                                   <Link to="/" key={j}> <RiAlbumLine /> {archive.year} ({archive.count}) </Link>
                                )}
                            </>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BlogContant
