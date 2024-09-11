import React, {useContext, useEffect} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Form, Input, Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import TextArea from "antd/es/input/TextArea";

function WhyJoinUs(props) {
    const {language} = useContext(LanguageContext);
    const item = props.item;
    const loading = props.loading;

    console.log('item', item);

    return (
        <div className='full_area brown my-4'>
            <Container>
                <Row>
                    <Col sm={12} lg={16}>
                        <div className="row g-0 why-join">
                            <div className={"col-lg-3 why-join-title"}>
                                {t('why-join-us')}
                            </div>
                            <div className={"col-lg-9 why-join-item"}>
                                <ul className={"why-join-ul"}>
                                    <li>
                                        {t('competitive-salary')}
                                    </li>
                                    <li>
                                        {t('corporate-work-environment')}
                                    </li>
                                    <li>
                                        {t('work-life-balance')}
                                    </li>
                                    <li>
                                        {t('employee-benefits')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyJoinUs
