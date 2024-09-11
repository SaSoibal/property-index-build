
import { Modal, Form, Input, message } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import { token } from '../../Helper/apiToken';
import AxiosWithOutAuthPostInstance from "../../config/api/withoutauthpost.axios";
import { useState } from 'react';

export const ApplyLoanModal = ({ onOk, open, onCancel, onFinish }) => {

    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();
    const handleFinish = (values) => {
        setLoading(true);
        const formData = {
            api_key: token,
            ...values
        };
        AxiosWithOutAuthPostInstance.post("web-loan-apply", formData).toPromise().then(res => {
            setLoading(false);
            message.success(res?.data?.message);
            if (res?.data?.code == 200) {
                form.resetFields();
                onFinish();
            }
        })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    }

    return (
        <Modal title="Apply For Loan" className='apply_for_loan_model_area' open={open} onOk={() => onOk()} onCancel={() => onCancel()}>
            <Form
                name="Apply For Loan"
                layout="vertical"
                form={form}
                className='apply_for_loan_model'
                initialValues={{ remember: false }}
                onFinish={handleFinish}
                autoComplete="off"
            >
                <Row>
                    <Col sm={12} lg={6}>
                        <Form.Item
                            label="Name"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={12} lg={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={12} lg={12}>
                        <Form.Item
                            label="Property ID"
                            name="property_id"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your property ID!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={12} lg={12}>
                        <button disabled={loading} type='submit' className='submit__btn_area'>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}