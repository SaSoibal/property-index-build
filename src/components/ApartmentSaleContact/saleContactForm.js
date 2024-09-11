import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Modal, Spin } from "antd";
import { Link } from "react-router-dom";
import { token } from '../../Helper/apiToken';
import { RiMailLine } from "react-icons/ri";
import AxiosWithOutAuthPostInstance from "../../config/api/withoutauthpost.axios";

function SaleContactForm(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [form] = Form.useForm();
    const { TextArea } = Input;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [callNumber, setCallNumber] = useState('');
    const [load, setLoading] = useState(false);
    const [isModalVisibleEmail, setIsModalVisibleEmail] = useState(false);
    const showModalEmail = () => { setIsModalVisibleEmail(true) };
    const handleOkEmail = () => { setIsModalVisibleEmail(false) };
    const handleCancelEmail = () => { setIsModalVisibleEmail(false) };
    function showCallNumber(number) {
        setCallNumber(number)
    }
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
        },
    };
    const onFinish = async (values) => {
        setLoading(true)
        const formData = {
            api_key: token,
            property_id: props?.id,
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message
        };
        AxiosWithOutAuthPostInstance.post("web-to-sent-message", formData).toPromise().then(res => {
            message.success(res?.data?.message);
            setLoading(false);
            form.resetFields();
            setIsModalVisibleEmail(false)
        })
            .catch(function (error) {
                console.log(error);
            });
    };
    const defaultText = 'I would like to inquire about your property, Index ID -' + props?.property_id + '. Please contact me at your earliest convenience.';
    useEffect(() => {
        form.setFieldsValue({
            message: defaultText,
        });
    }, [props?.property_id, isModalVisibleEmail]);
    return (
        <>
            <button onClick={showModalEmail} className='btn btn-sm m-1 text-dark' style={{ backgroundColor: '#ffcb05' }}> <RiMailLine /> Contact For Property </button>
            <Modal footer={null} className='contact_n_model' title="Contact Agent" open={isModalVisibleEmail} onOk={handleOkEmail} onCancel={handleCancelEmail}>
                <div className='contact_number__model'>
                    <Form
                        name="basic"
                        layout="vertical"
                        form={form}
                        onFinish={onFinish}
                        initialValues={{
                            remember: true,
                        }}
                        validateMessages={validateMessages}
                        autoComplete="off"
                    >
                        <div className='b__a_from_list'>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className='b__a_from_list'>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, type: 'email' }]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className='b__a_from_list'>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[{ required: true }]}
                            >
                                <Input maxLength="11" />
                            </Form.Item>
                        </div>
                        <div className='b__a_from_list mb-3'>
                            <Form.Item
                                label="Message"
                                name="message"
                                rules={[{ required: true, message: 'Message is required!' }]}
                            >
                                <TextArea rows={3} showCount maxLength={500} />
                            </Form.Item>

                        </div>
                        <div className='button__call_' onClick={() => showCallNumber("+8801619913922")}>
                            {callNumber ?
                                <Link to={'tel:' + callNumber}>{callNumber}</Link>
                                : 'Call Now'}
                        </div>
                        <Button className='button__call_' htmlType="submit" style={{ float: "right" }}>
                            {load ? <><Spin size="small" />&nbsp;&nbsp;</> : ''}  Send Message
                        </Button>
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default SaleContactForm;
