import React, {useContext, useEffect} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Form, Input, Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import TextArea from "antd/es/input/TextArea";
import ApplyImg from "../../asstes/images/apply.png";
import AssessmentImg from "../../asstes/images/AssessmentImg.png";
import InterviewImg from "../../asstes/images/Interview.png";
import OnBoardImg from "../../asstes/images/OnBoard.png";

function HiringProcess(props) {
    const {language} = useContext(LanguageContext);
    const item = props.item;
    const loading = props.loading;

    console.log('item', item);

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='white'>
            <Container>
                <Row>
                    <Col sm={12} lg={16}>
                        <div className="row g-0">
                            <h1 className={"hiring-process-title"}>
                                {t('hiring-process')}
                            </h1>
                            <div className={"col-md-3 hiring-process-item"}>
                                {/*<img className='header_banner' src={ENVIRONMENT.FILE_URL + aboutUsStateData?.aboutUsData?.data?.aboutPage?.page_banner_image} alt="" />*/}
                                <div className={"hiring-process-img"}>
                                    <img src={ApplyImg} alt="" />
                                </div>
                                <h3>
                                    {t('apply')}
                                </h3>
                            </div>
                            <div className={"col-md-3 hiring-process-item"}>
                                {/*<img className='header_banner' src={ENVIRONMENT.FILE_URL + aboutUsStateData?.aboutUsData?.data?.aboutPage?.page_banner_image} alt="" />*/}
                                <div className={"hiring-process-img"}>
                                    <img src={AssessmentImg} alt="" />
                                </div>
                                <h3>
                                    {t('assessment')}
                                </h3>
                            </div>
                            <div className={"col-md-3 hiring-process-item"}>
                                {/*<img className='header_banner' src={ENVIRONMENT.FILE_URL + aboutUsStateData?.aboutUsData?.data?.aboutPage?.page_banner_image} alt="" />*/}
                                <div className={"hiring-process-img"}>
                                    <img src={InterviewImg} alt="" />
                                </div>
                                <h3>
                                    {t('interview')}
                                </h3>
                            </div>
                            <div className={"col-md-3 hiring-process-item"}>
                                {/*<img className='header_banner' src={ENVIRONMENT.FILE_URL + aboutUsStateData?.aboutUsData?.data?.aboutPage?.page_banner_image} alt="" />*/}
                                <div className={"hiring-process-img"}>
                                    <img src={OnBoardImg} alt="" />
                                </div>
                                <h3>
                                    {t('on-board')}
                                </h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default HiringProcess
