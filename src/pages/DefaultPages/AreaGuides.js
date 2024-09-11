import React, {useContext, useEffect} from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import BannerImg from "../../asstes/images/details01.jpg"
import {Input, Skeleton, Pagination} from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {areaGuideGetAction} from "./redux/area-guide/areaGuide.actions";
import LanguageContext from "../../context/LanguageProvider";
import {ENVIRONMENT} from "../../config/environment/environment";
import {t} from "i18next";
function AreaGuides() {
    const dispatch = useDispatch();
    const { language } = useContext(LanguageContext);
    let count = 0;
    const areaGuideData = useSelector(
        (state) => state.areaGuide
    );
    const area_guide_data = areaGuideData.areaGuideData?.data?.area_list;
    const loadings = areaGuideData.loading;
    console.log(area_guide_data,'areaGuideData');
    useEffect(() => {
        if(count == 0)
        {
            dispatch(areaGuideGetAction());
            count = count + 1;
        }
    }, [count]);
    return (
        <div>
            <DefaultLayout>
                <div className='blog_deatils_area'>
                    <img src={BannerImg} alt="" />
                    <h3> {t('Discover_Bangladesh')} </h3>
                </div>
                <Container>
                    <div className='discover_search'>
                        <Row>
                            <Col sm={10} lg={10} className='mb-2'>
                                <Input placeholder={t('Location')} />
                            </Col>
                            <Col sm={2} lg={2}>
                                <button className='discover_search_btn'> {t('Search')} </button>
                            </Col>
                        </Row>
                    </div>
                    <div className='discover_pages_contant'>
                        <div className="row">
                            {loadings ?
                                <><Skeleton /></> :
                                <>
                                {area_guide_data?.map((item, i) =>
                                   <div className="col-sm-4 col-lg-4 popular-places">
                                       <Link to={`/area-guides-details/${item.slug}`}>
                                           <div className="popular-places-inner">
                                               <div className="popular-places-overflow">
                                                   <div className="popular-places-photo">
                                                       <img className="img-fluid w-100" src={ENVIRONMENT.FILE_URL + item?.thumbnail} alt={language == "en" ? item?.title_en : item?.title_bn} />
                                                   </div>
                                                   <div className="info">
                                                       <h3>
                                                           <Link to={`/area-guides-details/${item.slug}`}> {language == "en" ? item?.title_en : item?.title_bn} </Link>
                                                       </h3>
                                                   </div>
                                                   {/*<div className="new">New</div>*/}
                                               </div>
                                           </div>
                                       </Link>
                                   </div>
                                )}
                            </>}
                        </div>
                    </div>
                </Container>
            </DefaultLayout>
        </div>
    )
}

export default AreaGuides
