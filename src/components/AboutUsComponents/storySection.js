import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import moment from "moment/moment";
import {t} from "i18next";
import StoryImage from "../../asstes/images/02.png";
import LanguageContext from "../../context/LanguageProvider";

function StorySection(props) {
    const {language} = useContext(LanguageContext);
    const pageData = props.pageData;
    const loading = props.loading;

    const truncateText = (text, limit) => {
        if (!text) return null;
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };

    return (

        <div className='about_full_area'>
            <Container>
                <Row>
                    <Col sm={12} lg={16}>
                        {loading ?
                            <><Skeleton/></> :
                            <>
                                <div className="row g-0">
                                    <div className="col-lg-7 col-md-6">
                                        <h3 className="about-section-title">
                                            {t('our_story')}
                                        </h3>
                                        <div className="story-section-text">
                                            {loading ? <><Skeleton/></> : <>
                                                {language === "en" ? <>
                                                    <div className='editor__html'
                                                         dangerouslySetInnerHTML={{__html: truncateText(pageData?.our_story_en, 1000)}}></div>
                                                </> : <>
                                                    <div className='editor__html'
                                                         dangerouslySetInnerHTML={{__html: truncateText(pageData?.our_story_bn, 1000)}}></div>
                                                </>}
                                            </>}
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6" style={{paddingLeft: "10px"}}>
                                        <div className="property-photo" style={{textAlign: "center"}}>
                                            <Link to={`blog-details/$`} className="property-img">
                                                <img src={ENVIRONMENT.FILE_URL + pageData?.our_story_image}
                                                     alt="properties" className="img-fite"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StorySection
