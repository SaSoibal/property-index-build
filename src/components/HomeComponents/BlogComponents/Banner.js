
import React, { useContext, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from "react-player";
import { RiVideoFill } from "react-icons/ri";
import { Modal } from 'antd';
import { Carousel } from 'antd';
import LanguageContext from "../../../context/LanguageProvider";
import { Link } from "react-router-dom";
import { ENVIRONMENT } from "../../../config/environment/environment";
function Banner(sliders) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { language } = useContext(LanguageContext);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className='a_b_full_area'>

            {sliders.loading ? <>
                <div className='banner__area_Add'>
                    <Container>
                        <Row>
                            <Col sm={6} lg={6}>
                                <div className='banner__area_Add_cntn'>
                                    <h1 className="color-white">Search and Find Your <br></br>
                                        <span className="primary-color">Luxury</span> Apartments</h1>
                                    <p> Avoids pleasure itself, because it is pleasure, but because those who do
                                        not know how to pursue pleasure rationally. </p>

                                    <button className='banner__area_Add_cntn_btn'> Get Started </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </> : <>
                <Carousel autoplay>
                    {sliders.slider?.map((item, i) =>
                        <div className='banner__area_Add'>
                            <Container>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <div className='banner__area_Add_cntn'>
                                            <h1 className="color-white">{language == 'bn' ? item.title_bn : item.title_en}</h1>
                                            <p> {language == 'bn' ? item.description_bn : item.description_en}</p>

                                            <Link to={item.button_url} className='banner__area_Add_cntn_btn'> Get Started </Link>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                        <div className='banner__area_Add_cntn banner-top-space'>
                                            <img src={ENVIRONMENT.FILE_URL + item.image} alt={language == 'bn' ? item.title_bn : item.title_en} />
                                            <RiVideoFill onClick={showModal} className='banner__area_Add_cntn_vdeo_icon' />
                                        </div>
                                        <Modal open={isModalVisible} className="model__footer_close" onCancel={handleCancel}>
                                            <ReactPlayer
                                                width="100%"
                                                height="360px"
                                                controls={true}
                                                url={item.video_url}
                                                config={{ file: { attributes: { controlsList: "nodownload" } } }}
                                            />
                                        </Modal>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )}
                </Carousel>
            </>}
        </div>
    )
}

export default Banner
