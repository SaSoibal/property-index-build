import React, {useContext, useEffect, useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Form, Input, Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import TextArea from "antd/es/input/TextArea";
import BannerImg from "../../asstes/images/Group.png";
import CVUploadModal from "./CVUploadModal";

function Banner(props) {
    const {language} = useContext(LanguageContext);
    const pageData = props.pageData;
    const loading = props.loading;

    const truncateText = (text, limit) => {
        if (!text) return null;
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };

    console.log('item', props);


    // Modal
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleCVSubmit = (files) => {
        // Handle file submission logic here (e.g., send to server)
        console.log('Submitted files:', files);
    };

    return (
        <>
            <div className='full_area career-banner gray'>
                <Container>
                    <Row>
                        <Col sm={12} lg={16}>
                            <div className="row g-0 py-3">
                                <div className={"col-md-7 col align-self-start"} style={{padding:"2% 0px"}}>
                                    <div className="col align-self-start career-banner-title">
                                        {t('we-have-an-option-for-you')}
                                    </div>
                                    <div className={"row my-4"}>
                                        {language === "en" ? <>
                                            <div className='editor__html'
                                                 dangerouslySetInnerHTML={{__html: truncateText(pageData?.banner_en, 1000)}}></div>
                                        </> : <>
                                            <div className='editor__html'
                                                 dangerouslySetInnerHTML={{__html: truncateText(pageData?.banner_bn, 1000)}}></div>
                                        </>}
                                    </div>

                                    <div className="col-md-4 text-left ">

                                        <button className="career-banner-button" onClick={openModal}>{t('drop-your-cv')}</button>
                                        <CVUploadModal
                                            isOpen={modalIsOpen}
                                            onClose={closeModal}
                                            onSubmit={handleCVSubmit}
                                        />
                                    </div>
                                </div>
                                <div className={"col-md-5 career-banner-img"}>
                                    <img className='header_banner_img' src={ENVIRONMENT.FILE_URL + pageData?.banner_image} alt="" />
                                </div>
                                {/*<div className={"col-md-6"}>*/}
                                {/*    <span>*/}
                                {/*        We have an option for you*/}
                                {/*    </span>*/}
                                {/*</div>*/}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Banner
