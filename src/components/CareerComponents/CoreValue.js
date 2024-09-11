import React, {useContext, useEffect} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Form, Input, Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import TextArea from "antd/es/input/TextArea";
import CoreValuesImg from "../../asstes/images/hiring_process.png";

function CoreValue(props) {
    const {language} = useContext(LanguageContext);
    const pageData = props.pageData;
    const loading = props.loading;

    const truncateText = (text, limit) => {
        if (!text) return null;
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };


    return (
        <div className='white'>
            <Container>
                <Row>
                    <Col sm={12} lg={16}>
                        {/*{loading ?*/}
                        {/*    <><Skeleton /></> :*/}
                            <div className="row g-0">
                                <div className={"col-md-7"}>
                                    <h2 className={"core-value-title mb-3"}>
                                        {t('our-core-values')}
                                    </h2>
                                    <div className={"core-value-text"}>
                                        {language === "en" ? <>
                                            <div className='editor__html'
                                                 dangerouslySetInnerHTML={{__html: truncateText(pageData?.core_value_en, 1000)}}></div>
                                        </> : <>
                                            <div className='editor__html'
                                                 dangerouslySetInnerHTML={{__html: truncateText(pageData?.core_value_bn, 1000)}}></div>
                                        </>}
                                    </div>
                                </div>
                                <div className={"col-md-5 core-value-img"}>
                                    <img className='header_banner' src={ENVIRONMENT.FILE_URL + pageData?.core_value_image} alt="" />
                                </div>
                            </div>
                        {/*}*/}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CoreValue
