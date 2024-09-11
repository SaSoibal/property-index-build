import React, { useContext, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from "react-player";
import { RiVideoFill } from "react-icons/ri";
import { Modal } from 'antd';
import { Carousel } from 'antd';
import LanguageContext from "../../../context/LanguageProvider";
import { Link } from "react-router-dom";
import { ENVIRONMENT } from "../../../config/environment/environment";
import StepForm from "../../StepForm";

function Banner(sliders) {
    const slideItems = sliders.slider?.filter(item => item.banner_type == 1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { language } = useContext(LanguageContext);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
        <div className='a_b_full_area'>
            {slideItems ? <>
                {/*SAS*/}
                {/*<Carousel autoplay>*/}
                <Carousel autoplay>
                    {slideItems?.filter(sitem => sitem?.banner_type == 1)?.map((item, i) =>
                        <div className='banner__area_Add' key={i}>
                            <Container>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <div className='banner__area_Add_cntn'>
                                            <h1 className="color-white">{language == 'bn' ? item.title_bn : item.title_en}</h1>
                                            <p> {language == 'bn' ? item.description_bn : item.description_en}</p>
                                            <button type='button' onClick={showModal} to={item.button_url} className='banner__area_Add_cntn_btn'> Get Started </button>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                        <div className='banner__area_Add_cntn' style={{ background: ENVIRONMENT.FILE_URL + item.image }}>
                                            {item?.video_url &&
                                                <ReactPlayer
                                                    width="100%"
                                                    height="360px"
                                                    controls={true}
                                                    url={item.video_url}
                                                    config={{ file: { attributes: { controlsList: "nodownload" } } }}
                                                />
                                            }
                                            {!item?.video_url &&
                                                <img src={ENVIRONMENT.FILE_URL + item.image} alt={language == 'bn' ? item.title_bn : item.title_en} />
                                            }
                                            {/* <RiVideoFill className='banner__area_Add_cntn_vdeo_icon' /> */}
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )}
                </Carousel>
            </> : <>
                <div className='banner__area_Add'>
                    <Container>
                        {/* <Row>
                            <Col sm={6} lg={6}>
                                <div className='banner__area_Add_cntn'>
                                    <h1 className="color-white">Search and Find Your <br></br>
                                        <span className="primary-color">Luxury</span> Apartments</h1>
                                    <p> Avoids pleasure itself, because it is pleasure, but because those who do
                                        not know how to pursue pleasure rationally. </p>

                                    <button className='banner__area_Add_cntn_btn'> Get Started </button>
                                </div>
                            </Col>
                            <Col sm={6} lg={6}>
                                <div className='banner__area_Add_cntn'>
                                    <ReactPlayer
                                        width="100%"
                                        height="100%"
                                        controls={true}
                                        url=''
                                        config={{ file: { attributes: { controlsList: "nodownload" } } }}
                                    />
                                    <RiVideoFill onClick={showModal} className='banner__area_Add_cntn_vdeo_icon' />
                                </div>
                            </Col>
                        </Row> */}
                    </Container>
                </div>
            </>}

            <Modal open={isModalVisible} className="model__footer_close m3" onCancel={handleCancel}>
                <div className="popup-content">
                    <h2>Submit Request</h2>
                    <p>Please provide all the necessary information below for a more efficient and effective service.</p>
                    <StepForm handleOk={handleOk} />
                </div>
            </Modal>
        </div>

    )
}

export default Banner
