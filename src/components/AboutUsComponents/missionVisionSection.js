import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import MissionVisionImage from "../../asstes/images/03.png";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
function MissionVisionSection(props) {
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
                            <><Skeleton /></> :
                            <>
                                <div className="row g-0">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="property-photo">
                                            <Link to={`blog-details/$`} className="property-img">
                                                <img src={ENVIRONMENT.FILE_URL + pageData?.mission_vision_image} alt="properties" className="img-fite" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-6">
                                        <h3 className="about-section-title">
                                            {t('mission_vision')}
                                        </h3>
                                        <div className="mission-section-text">
                                            {loading ? <><Skeleton/></> : <>
                                                {language === "en" ? <>
                                                    <div className='editor__html'
                                                         dangerouslySetInnerHTML={{__html: truncateText(pageData?.mission_vision_en, 1000)}}></div>
                                                </> : <>
                                                    <div className='editor__html'
                                                         dangerouslySetInnerHTML={{__html: truncateText(pageData?.mission_vision_bn, 1000)}}></div>
                                                </>}
                                            </>}
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

export default MissionVisionSection
