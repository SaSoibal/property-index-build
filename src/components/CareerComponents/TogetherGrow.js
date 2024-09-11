import React, {useContext, useEffect} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Form, Input, Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import TextArea from "antd/es/input/TextArea";

function TogetherGrow(props) {
    const {language} = useContext(LanguageContext);
    const item = props.item;
    const loading = props.loading;

    console.log('item', item);

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className='white together-grow-container'>
                <Container>
                    <Row>
                        <Col sm={12} lg={16}>
                            {loading ?
                                <><Skeleton /></> :
                                <div className="row col-md-8 together-grow g-0 ">
                                    <div className={"d-flex"}>
                                        <div className={"col-md-7"}>
                                            <h1 className={"mb-1"}>
                                                {t('together-we-can-grow')}
                                            </h1>
                                            <div>
                                                {t('to-join-with-us-send-your-cv')}
                                            </div>
                                        </div>
                                        <div className={"col-md-5 career-email fw-bold"}>
                                            career@propertyindex.com
                                        </div>
                                    </div>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default TogetherGrow
