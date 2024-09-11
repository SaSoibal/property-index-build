import React, {useContext, useEffect, useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Form, Input, Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import GalleryItem from "../AboutUsComponents/galleryItem";
import CVUploadModal from "./CVUploadModal";
import CVDetailsModal from "./CVDetailsModal";


function WhyJoinUs(props) {
    const {language} = useContext(LanguageContext);
    const jobs = props.pageData;
    const loading = props.loading;

    console.log('item', jobs);

    // Modal
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpenDetails, setModalIsOpenDetails] = useState(false);
    const [jobDetails, setJobDetails] = useState(null);

    const openModal = (job) => {
        setModalIsOpen(true);
        setJobDetails(job);
        // console.log(job,'job');
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const openModalDetails = (job) => {
        setModalIsOpenDetails(true);
        setJobDetails(job);
    };
    const closeModalDetails = () => {
        setModalIsOpenDetails(false);
    };

    const handleCVSubmit = (files) => {
        // Handle file submission logic here (e.g., send to server)
        console.log('Submitted files:', files);
    };

    return (
        <>
            <div className='our-opening gray'>
                <Container>
                    <Row>
                        <Col sm={12} lg={16}>
                            {loading ?
                                <><Skeleton /></> :
                                <div className="row g-0 py-3">
                                    <h1>
                                        {t('our-openings')}
                                    </h1>
                                    {jobs.map(item => (

                                        <div className={"our-opening-item"}>
                                            <div className={"col-md-7 item-details"}>
                                                <div className={"our-opening-title"}>
                                                    {language == "en" ? item?.title_en : item?.title_bn}
                                                </div>
                                                <div className={"our-opening-deadline"}>
                                                    {item?.deadline.split(' ')[0]}
                                                </div>
                                            </div>
                                            <div className={"col-md-4 text-center py-1"} style={{padding: "1% 0px;"}}>
                                                <div className={"col-md-6 our-opening-apply"}>
                                                    <button onClick={() => openModal(item)}>{t('apply')}</button>
                                                    <CVUploadModal
                                                        details={jobDetails}
                                                        isOpen={modalIsOpen}
                                                        onClose={closeModal}
                                                        onSubmit={handleCVSubmit}
                                                    />
                                                </div>
                                                <div className={"col-md-6 our-opening-details"}>
                                                    <button onClick={() => openModalDetails(item)}>{t('details')}</button>
                                                    <CVDetailsModal
                                                        details={jobDetails}
                                                        isOpen={modalIsOpenDetails}
                                                        onClose={closeModalDetails}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default WhyJoinUs
