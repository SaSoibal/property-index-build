import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import { t } from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import GalleryItem from "./galleryItem";

function GallerySection(props) {
    const { language } = useContext(LanguageContext);
    const pageData = props.pageData;
    const gallery = props.gallery;
    const loading = props.loading;

    console.log(gallery,'gallery')

    return (
        <div className='gallery-about_full_area'>
            <Container>
                <Row>
                    <Col sm={12} lg={16}>
                        {loading ?
                            <><Skeleton /></> :
                            <>
                                <div className="row g-0">
                                    <h3 className="gallery-about-section-title text-center">
                                        {language == "en" ? pageData?.gallery_title_en : pageData?.gallery_title_bn}
                                    </h3>
                                    {gallery.map(item => (
                                        item.album.length > 0 && (
                                            <GalleryItem item={item}></GalleryItem>
                                        )
                                    ))}

                                </div>
                            </>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GallerySection
