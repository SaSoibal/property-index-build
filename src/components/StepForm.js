// src/StepForm.js
import React, {useState} from 'react';
import {Steps, Button, message, Form, Input, Radio} from 'antd';
import {token} from "../Helper/apiToken";
import AxiosWithOutAuthPostInstance from "../config/api/withoutauthpost.axios";

const {Step} = Steps;

const StepForm = ({handleOk}) => {
    const [current, setCurrent] = useState(0);
    const [formData, setFormData] = useState({});
    const [form] = Form.useForm();
    const [load, setLoading] = useState(false);

    const steps = [
        {
            title: 'Personal Info',
            content: (
                <>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{required: true, message: 'Please input your name!'}]}
                        labelCol={{span: 24}}
                        wrapperCol={{span: 24}}
                    >
                        <Input placeholder="Name" style={{width: '100%'}}/>
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[{required: true, message: 'Please input your phone number!'}]}
                        labelCol={{span: 24}}
                        wrapperCol={{span: 24}}
                    >
                        <Input placeholder="Phone" style={{width: '100%'}}/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {required: true, message: 'Please input your email!'},
                            {type: 'email', message: 'Please enter a valid email!'}
                        ]}
                        labelCol={{span: 24}}
                        wrapperCol={{span: 24}}
                    >
                        <Input placeholder="Email" style={{width: '100%'}}/>
                    </Form.Item>
                </>
            ),
        },
        {
            title: 'Property Info',
            content: (
                <>
                    <Form.Item
                        name="purpose"
                        label="Purpose"
                        rules={[{required: true, message: 'Please select the purpose!'}]}
                        labelCol={{span: 24}}
                        wrapperCol={{span: 24}}
                    >
                        <Radio.Group style={{width: '100%', textAlign: "left"}}>
                            <Radio value="sell">Sell</Radio>
                            <Radio value="rent">Rent</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="propertyType"
                        label="Property Type"
                        rules={[{required: true, message: 'Please select the property type!'}]}
                        labelCol={{span: 24}}
                        wrapperCol={{span: 24}}
                    >
                        <Radio.Group style={{width: '100%', textAlign: "left"}}>
                            <Radio value="residential">Residential</Radio>
                            <Radio value="commercial">Commercial</Radio>
                            <Radio value="land">Land</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="city"
                        label="City"
                        rules={[{required: true, message: 'Please input the city!'}]}
                        labelCol={{span: 24}}
                        wrapperCol={{span: 24}}
                    >
                        <Input placeholder="City" style={{width: '100%'}}/>
                    </Form.Item>
                    <Form.Item
                        name="propertyLocation"
                        label="Property Location"
                        rules={[{required: true, message: 'Please input the property location!'}]}
                        labelCol={{span: 24}}
                        wrapperCol={{span: 24}}
                    >
                        <Input placeholder="Property Location" style={{width: '100%'}}/>
                    </Form.Item>
                </>
            ),
        },
    ];

    const next = () => {
        form.validateFields()
            .then((values) => {
                setFormData({...formData, ...values});
                setCurrent(current + 1);
                form.resetFields();
            })
            .catch((errorInfo) => {
                console.log('Validate Failed:', errorInfo);
            });
    };

    const prev = () => {
        setCurrent(current - 1);
        form.setFieldsValue(formData); // Populate previous data when going back
    };

    const handleFinish = (values) => {
        const finalData = {...formData, ...values};
        // console.log('Received values:', finalData);

        const data = {
            api_key: token,
            // property_id:props?.id,
            name: finalData.name,
            email: finalData.email,
            phone: finalData.phone,
            purpose: finalData.purpose,
            propertyType: finalData.propertyType,
            city: finalData.city,
            propertyLocation: finalData.propertyLocation
        };

        // console.log('data:', data);

        AxiosWithOutAuthPostInstance.post("web-to-add-property", data).toPromise().then(res => {
            message.success(res?.data?.message);
            setLoading(false);
            form.resetFields();//SAS
            handleOk(); // Close the modal
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <Steps current={current}>
                {steps.map((item, index) => (
                    <Step key={index} title={item.title}/>
                ))}
            </Steps>
            <Form form={form} onFinish={handleFinish}>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button className="button__call_" type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current > 0 && (
                        <Button className="button__call_back" style={{margin: '0 8px'}} onClick={() => prev()}>
                            Back
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button className="button__call_back" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default StepForm;
