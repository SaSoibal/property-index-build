import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import { ENVIRONMENT } from "../../config/environment/environment";
import { t } from "i18next";
import LanguageContext from "../../context/LanguageProvider";
function DataSection(props) {
    const { language } = useContext(LanguageContext);
    const pageData = props.pageData;
    const loading = props.loading;

    const truncateText = (text, limit) => {
        if (!text) return null;
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };

    return (

        <div className='data-about_full_area'>
            <Container>
                <Row>
                    <Col sm={12} lg={16}>
                        {loading ?
                            <><Skeleton /></> :
                            <>
                                <div className="row g-0" style={{ margin: "50px 0" }}>
                                    <div className="col-6 col-sm-3" style={{ textAlign: "center", padding: "10px" }}>
                                        <h1 className="data-about-section-count">
                                            {language == "en" ? pageData?.data1_en : pageData?.data1_en}
                                        </h1>
                                        <h1 className="data-about-section-title">
                                            {language == "en" ? pageData?.data_title1_en : pageData?.data_title1_en}
                                        </h1>
                                    </div>
                                    <div className="col-6 col-sm-3" style={{ textAlign: "center", padding: "10px" }}>
                                        <h1 className="data-about-section-count">
                                            {language == "en" ? pageData?.data2_en : pageData?.data2_en}
                                        </h1>
                                        <h1 className="data-about-section-title">
                                            {language == "en" ? pageData?.data_title2_en : pageData?.data_title2_en}
                                        </h1>
                                    </div>
                                    <div className="col-6 col-sm-3" style={{ textAlign: "center", padding: "10px" }}>
                                        <h1 className="data-about-section-count">
                                            {language == "en" ? pageData?.data3_en : pageData?.data3_en}
                                        </h1>
                                        <h1 className="data-about-section-title">
                                            {language == "en" ? pageData?.data_title3_en : pageData?.data_title3_en}
                                        </h1>
                                    </div>
                                    <div className="col-6 col-sm-3" style={{ textAlign: "center", padding: "10px" }}>
                                        <h1 className="data-about-section-count">
                                            {language == "en" ? pageData?.data4_en : pageData?.data4_en}
                                        </h1>
                                        <h1 className="data-about-section-title">
                                            {language == "en" ? pageData?.data_title4_en : pageData?.data_title4_en}
                                        </h1>
                                    </div>
                                </div>
                            </>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DataSection
