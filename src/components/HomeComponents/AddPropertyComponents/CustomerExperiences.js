import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactPlayer from "react-player";
import {Skeleton} from "antd";
import {t} from "i18next";
function CustomerExperiences(customer_exp) {
    return (
        <div className='how_it_work_area'>
            <Container>
                <div className='title_area' style={{ textAlign: "center" }}>
                    <h3> {t("Customer_Experiences")}</h3>
                    <p className='title__p'> There is no greater benchmark for success than customer satisfaction.<br></br> Over the years, we’ve built a culture of service.   </p>
                </div>

                <div className='video_full_area'>
                    <Row>
                        {customer_exp.loading? <><Skeleton /></> : <>
                            {customer_exp.customer_exp?.map((item, i) =>
                                <Col sm={6} lg={4} key={i}>
                                    <div className='client_video'>
                                        <ReactPlayer
                                            loading="lazy"
                                            width="100%"
                                            height="100%"
                                            controls={true}
                                            url={item.video_url}
                                            config={{ file: { attributes: { controlsList: "nodownload" } } }}
                                        />
                                    </div>
                                </Col>
                           )}
                        </>}

                    </Row>
                </div>

            </Container>
        </div>
    )
}

export default CustomerExperiences
