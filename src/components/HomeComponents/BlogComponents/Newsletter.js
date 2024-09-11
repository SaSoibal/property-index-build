import React from 'react'
import {Form, Input} from "antd";
import {t} from "i18next";
function Newsletter() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='newslatter__area'>
            <h3> {t('Newsletter')} </h3>
            <p>{t('Newsletter_subtitle')}</p>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: t('User_name') + t('is_required') }]}
                >
                    <Input placeholder={t('User_name')} />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: t('Email_address') + t('is_required') }]}
                >
                    <Input placeholder={t('Email_address')}/>
                </Form.Item>
                <button className='button__call_ w-100'> {t('Submit')} </button>
            </Form>
        </div>
    )
}

export default Newsletter
