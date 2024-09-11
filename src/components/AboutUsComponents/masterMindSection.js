import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import MasterMindImage from "../../asstes/images/mastermind.png";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
function MasterMindSection(props) {
    const {language} = useContext(LanguageContext);
    const pageData = props.pageData;
    const loading = props.loading;

    const truncateText = (text, limit) => {
        if (!text) return null;
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };

    return (

        <div className='mastermind-about_full_area'>
            <Container>
                <Row>
                    <Col sm={12} lg={16}>
                        {loading ?
                            <><Skeleton /></> :
                            <>
                                <div className="row g-0">
                                    <h3 className="mastermind-about-section-title text-center">
                                        {t('our-mastermind')}
                                    </h3>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="property-photo" style={{textAlign:"center"}}>
                                            <img src={ ENVIRONMENT.FILE_URL + pageData?.master_mind_image } style={{ height:"300px", width:"300px" }} alt="properties" className="img-fite" />
                                            <div style={{margin:"0 10px", textDecoration:"underline", fontWeight:"bold"}}>
                                                <h3>
                                                    {language == "en" ? pageData?.master_mind_name_en : pageData?.master_mind_name_bn}
                                                </h3>
                                            </div>
                                            <div style={{margin:"0 10px"}}>
                                                <h3>
                                                    {language == "en" ? pageData?.master_mind_designation_en : pageData?.master_mind_designation_bn}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-6">
                                        <div className="mission-section-text">
                                            {loading ? <><Skeleton/></> : <>
                                                {language === "en" ? <>
                                                    <div className='editor__html'
                                                         dangerouslySetInnerHTML={{__html: truncateText(pageData?.master_mind_text_en, 1000)}}></div>
                                                </> : <>
                                                    <div className='editor__html'
                                                         dangerouslySetInnerHTML={{__html: truncateText(pageData?.master_mind_text_bn, 1000)}}></div>
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

export default MasterMindSection
