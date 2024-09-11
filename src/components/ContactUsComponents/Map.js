import React, {useContext, useEffect, useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Form, Input, message, Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import TextArea from "antd/es/input/TextArea";
import {token} from "../../Helper/apiToken";
import AxiosWithOutAuthPostInstance from "../../config/api/withoutauthpost.axios";

function Map(props) {
    const {language} = useContext(LanguageContext);
    const pageData = props.pageData;
    const loading = props.loading;

    console.log('pageData', pageData);

    const [form] = Form.useForm();
    const [load, setLoading] = useState(false);
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    // const onFinish = (values) => {
    //     console.log('Success:', values);
    // };


    const onFinish = async (values) => {
        console.log('Success:', values);
        setLoading(true)
        const formData = {
            api_key:token,
            property_id:props?.id,
            name:values.name,
            email:values.email,
            phone:values.phone,
            message:values.message
        };
        AxiosWithOutAuthPostInstance.post("web-to-contact-submit", formData).toPromise().then(res => {
            message.success(res?.data?.message);
            setLoading(false);
            form.resetFields();
        })
            .catch(function (error) {
                console.log(error);
            });
    };


    const truncateText = (text, limit) => {
        if (!text) return null;
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };


    return (
        <>
            <div className="">
                <div className="row">
                    <div className="col-lg-16 col-md-12">
                        <h3 style={{padding: "20px 0px", textAlign: "center"}}>
                            {t('we-are-here')}
                        </h3>
                        <div className="col-lg-16 col-sm-12 d-flex">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.600525319447!2d90.42394658308528!3d23.825700637162406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c647b763c915%3A0x21d7dbcd42c27567!2z4Kaw4KeC4Kaq4Ka-4Kef4KaoIOCmtuCmquCmv-CmgiDgprjgp43gppXgp5_gpr7gprA!5e0!3m2!1sen!2sbd!4v1681584052892!5m2!1sen!2sbd"
                                width="100%" height="500" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div style={{background:"#D9D9D9"}} className="pt-4">
                    <div className="container" style={{background:"#FFFFFF"}}>
                        <div className="row">
                            <div className="col-lg-16 col-md-12">
                                <div className="col-lg-16 col-sm-12 d-flex">
                                    <div className={"col-md-6 py-4"}>
                                        <h2>
                                            {t('contact-info')}
                                        </h2>
                                        <p className={"pt-4"}>
                                            {t('office-address')}<br/>
                                            {loading ? <><Skeleton/></> : <>
                                                {language === "en" ? <>
                                                    <div className='editor__html'
                                                         dangerouslySetInnerHTML={{__html: truncateText(pageData?.address_en, 1000)}}></div>
                                                </> : <>
                                                    <div className='editor__html'
                                                         dangerouslySetInnerHTML={{__html: truncateText(pageData?.address_bn, 1000)}}></div>
                                                </>}
                                            </>}
                                        </p>

                                    </div>
                                    <div className={"col-md-6 py-4"}>
                                        <h2>
                                            {t('get-in-touch')}
                                        </h2>
                                        <p className={"pt-4"}>
                                            <Form
                                                name="basic"
                                                initialValues={{ remember: true }}
                                                onFinish={onFinish}
                                                onFinishFailed={onFinishFailed}
                                                autoComplete="off"
                                            >
                                                <Form.Item
                                                    name="name"
                                                    rules={[{ required: true, message: t('User_name') + t('is_required') }]}
                                                >
                                                    <Input placeholder={t('User_name')} />
                                                </Form.Item>
                                                <Form.Item
                                                    name="phone"
                                                    rules={[{ required: true, message: t('mobile') + t('is_required') }]}
                                                >
                                                    <Input maxLength="11" placeholder={t('mobile')}/>
                                                </Form.Item>
                                                <Form.Item
                                                    name="email"
                                                    rules={[{ required: true, type: 'email', message: t('Email_address') + t('is_required') }]}
                                                >
                                                    <Input placeholder={t('Email_address')}/>
                                                </Form.Item>
                                                <Form.Item
                                                    name="message"
                                                    rules={[{ required: true, message: t('Message') + t('is_required') }]}
                                                >
                                                    <TextArea size={8} placeholder={t('message')}></TextArea>
                                                </Form.Item>
                                                <button className='button__call_ w-25 '> {t('Submit')} </button>
                                            </Form>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Map
