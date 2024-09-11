import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "antd";
import icon6 from "../../asstes/images/icon6.svg";
import icon5 from "../../asstes/images/icon5.svg";
import icon4 from "../../asstes/images/icon4.svg";
import { RxArrowTopRight } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { t } from "i18next";
function HowRealtor() {
    const navigate = useNavigate();
    const clickUrl = (purpose) => {
        navigate('/property/for-' + (purpose == 1 ? 'sale' : 'rent') + '?purpose=' + purpose + '&status=0&location=&type=0&beds=&baths=&areamin=&areamax=&minprice=&maxprice=&city=');
    };

    return (
        <div className='how-realtor'>
            <Container>
                <div className='title_area' style={{ textAlign: "center" }}>
                    <h3>{t('see-how-realtor-can-help')}</h3>
                    <p className='title__p'> There is no greater benchmark for success than customer satisfaction.<br></br> Over the years, we’ve built a culture of service.   </p>
                </div>
                <Row>
                    <Col sm={11} lg={4}>
                        <Card className="how-realtor-card">
                            <img src={icon6} className="how-realtor-img" />
                            <h2 className="how-realtor-title">Buy Property</h2>
                            <p className='text-justify'> Buying is made easy with us. Get the best value for your home with our expert real estate services.</p>
                            <Link to={'new-projects'}>
                                <button style={{ 'cursor': 'pointer' }} className='how-realtor-btn'> Find Projects <RxArrowTopRight /></button>
                            </Link>
                        </Card>
                    </Col>
                    <Col sm={11} lg={4}>
                        <Card className="how-realtor-card hover">
                            <img src={icon4} className="how-realtor-img" />
                            <h2 className="how-realtor-title">Sell a property</h2>
                            <p> Our experienced agents will guide you through the process of finding and purchasing the perfect property for you.</p>
                            <button style={{ 'cursor': 'pointer' }} onClick={() => clickUrl(1)} className='how-realtor-btn'> Find Sell property <RxArrowTopRight /></button>
                        </Card>
                    </Col>
                    <Col sm={11} lg={4}>
                        <Card className="how-realtor-card">
                            <img src={icon5} className="how-realtor-img" />
                            <h2 className="how-realtor-title">Rent a property</h2>
                            <p> Our extensive listings and knowledgeable agents will help you find a comfortable and affordable place to call home.</p>
                            <button style={{ 'cursor': 'pointer' }} onClick={() => clickUrl(2)} className='how-realtor-btn'> Find Rent property <RxArrowTopRight /></button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default HowRealtor
