import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RiFacebookFill, RiYoutubeFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import Logo from "../../../asstes/images/logo2.png"
function DefaultFooterComponent() {

    return (
        <div className='defaultFooterComponent_area'>
            <div className='footer__btm_area'>
                <Container>
                    <Row>
                        <Col sm={6} lg={6}>
                            <img className='footer__logo' src={Logo} alt="" />
                        </Col>

                        <div className='footer_contant_area'>
                            <Row>
                                <Col sm={6} lg={3}>
                                    <div className='footer_contant_box'>
                                        <h3 className='footer-title'> OFFICE ADDRESS </h3>
                                        <p className="text-white text-justified">Rupayon Shopping Square,
                                            Plot-2, Block-G, (beside. Bashundhara Headquarter-1), level 7, Dhaka, Bangladesh </p>
                                    </div>
                                    <div className='footer_contant_box'>
                                        <h3 className='footer-title'> Contact Us </h3>
                                        <div className="text-white" style={{ display: 'flex', justifyContent: 'start', textAlign: 'left' }}>
                                            <a style={{ width: '85px' }} href='tel:01321216163'>01321216163</a>, <a style={{ width: '85px' }} href='tel:01619913922'> 01619913922</a>
                                        </div>
                                    </div>
                                    <div className='footer_contant_box'>
                                        <h3 className='footer-title mb-3' > Follow us</h3>
                                        <RiFacebookFill className='icon__footer facebook-icon' style={{ marginLeft: '0px' }} />
                                        <RiYoutubeFill className='icon__footer youtube-icon' />
                                        <RiTwitterFill className='icon__footer twitter-icon' />
                                        <RiInstagramLine className='icon__footer instagram-icon' />
                                    </div>
                                </Col>
                                <Col sm={6} lg={3}>
                                    <div className='footer_contant_box'>
                                        <h3 className='footer-title'> QUICK LINKS </h3>
                                        <Link to="add-property"> Add Property </Link>
                                        <Link to="/blog"> Blog </Link>
                                        <Link to="/area-guides"> Guides </Link>
                                        {/* <Link to="/new-projects"> New Projects </Link> */}
                                        <Link to="/interior"> Services </Link>
                                    </div>
                                </Col>
                                <Col sm={6} lg={3}>
                                    <div className='footer_contant_box'>
                                        <h3 className='footer-title'> POPULAR LINKS </h3>
                                        <Link to="/new-projects">New Projects </Link>
                                        <Link to="/property/for-sale?purpose=1&status=0&location=&type=0&beds=&baths=&areamin=&areamax=&minprice=&maxprice=&city=&tags=">Sell a property </Link>
                                        <Link to="/property/for-rent?purpose=2&status=0&location=&type=0&beds=&baths=&areamin=&areamax=&minprice=&maxprice=&city=&tags="> Rent a property</Link>
                                        <Link to="/loan-calculator"> Loan Calculator </Link>
                                        {/* <Link to="/real-estate-solutions"> Buy and Sale Guide </Link> */}
                                    </div>
                                </Col>
                                <Col sm={6} lg={3}>
                                    <div className='footer_contant_box'>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.600525319447!2d90.42394658308528!3d23.825700637162406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c647b763c915%3A0x21d7dbcd42c27567!2z4Kaw4KeC4Kaq4Ka-4Kef4KaoIOCmtuCmquCmv-CmgiDgprjgp43gppXgp5_gpr7gprA!5e0!3m2!1sen!2sbd!4v1681584052892!5m2!1sen!2sbd"
                                            width="100%" height="200" allowFullScreen="" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </Col>
                                <Col sm={12} lg={12}>
                                    <p className='footer__btm'> © Copyright 2022 - Property Index </p>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default DefaultFooterComponent
