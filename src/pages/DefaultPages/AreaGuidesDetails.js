import React, {useContext, useEffect} from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import BannerImg from "../../asstes/images/details01.jpg"
import { Container, Row, Col } from 'react-bootstrap';
import {Skeleton, Tabs} from 'antd';
import LanguageContext from "../../context/LanguageProvider";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {areaGuideDetailsAction} from "./redux/area-guide-details/areaGuideDetails.actions";
import {ENVIRONMENT} from "../../config/environment/environment";

const { TabPane } = Tabs;
function AreaGuidesDetails() {
    const { language } = useContext(LanguageContext);
    const { slug } = useParams();
    let count = 0;
    const areaGuideDetailsState = useSelector(
        (state) => state.areaGuideDetails
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if(count == 0)
        {
            dispatch(areaGuideDetailsAction(slug));
            count = count + 1;
        }
    }, [count, slug]);
    const loadings = areaGuideDetailsState.loading;
    const area_options = areaGuideDetailsState?.areaGuideDetailsData?.data?.details;
    return (
        <div>
            <DefaultLayout>
                <div className='blog_deatils_area'>
                    <img src={BannerImg} alt="" />
                    <h3> {language=='bn'?area_options?.title_bn:area_options?.title_en} </h3>
                </div>
                <Container>
                    <div className='discover_pages_contant'>
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <img className="img-fluid w-100 mb-4" src={ENVIRONMENT.FILE_URL + area_options?.banner} alt="properties" />
                                <div className='catagory_details_area'>
                                    <Tabs defaultActiveKey="1">
                                        {loadings ?
                                            <><Skeleton /></> :
                                            <>
                                                {area_options?.area_options?.map((item, i) =>
                                                    <TabPane tab={language=='bn'?item.title_bn:item.title_en} key={i}>
                                                        <Row>
                                                            <Col sm={12} lg={12}>
                                                                <div className='blog__contn__box'>
                                                                    <h3 className="sidebar-title">{language=='bn'?item.title_bn:item.title_en}</h3>
                                                                    <div className="s-border"></div>
                                                                    <div className="m-border"></div>

                                                                    <p className='padding__bottom30'>{language === "en" ? <> <div className='editor__html' dangerouslySetInnerHTML={{ __html: item?.area_details?.description_en }} /> </> : <> <div className='editor__html' dangerouslySetInnerHTML={{ __html: item?.area_details?.description_bn }} /> </>}  </p>
                                                                    <img src={ENVIRONMENT.FILE_URL +item?.area_details?.image} alt="" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                )}

                                            </>}

                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </DefaultLayout>
        </div>
    )
}

export default AreaGuidesDetails
