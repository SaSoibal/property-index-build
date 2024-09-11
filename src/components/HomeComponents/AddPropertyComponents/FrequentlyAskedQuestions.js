import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Collapse, Skeleton } from 'antd';
import FaqMan from "../../../asstes/images/faq-men.png"
import LanguageContext from "../../../context/LanguageProvider";
import { t } from "i18next";
function FrequentlyAskedQuestions(faqs) {
    const { Panel } = Collapse;
    const { language } = useContext(LanguageContext);
    return (
        <div className='how_it_work_area one-faq-area'>
            <Container>
                <div className='faq_full_area'>
                    <Row>

                        <Col sm={6} lg={6}>
                            <div className='title_area'>
                                {/* <p> {t("Property")}  </p> */}
                                <h3> {t("FAQ")} </h3>
                            </div>
                            <div className='client_video'>
                                {faqs.loading ? <><Skeleton /></> : <>
                                    <Collapse defaultActiveKey={['0']} accordion>
                                        {faqs.faq?.map((item, i) =>
                                            <Panel header={language == 'bn' ? item.title_bn : item.title_en} key={i}>
                                                <p>{language == 'bn' ? item.description_bn : item.description_en}</p>
                                            </Panel>
                                        )}
                                    </Collapse>
                                </>}
                            </div>
                        </Col>

                        <div className="faq-img">
                            <img src={FaqMan} alt="FAQ" />
                        </div>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default FrequentlyAskedQuestions
