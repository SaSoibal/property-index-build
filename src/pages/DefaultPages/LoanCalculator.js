import React, { useContext, useEffect, useState } from 'react'
import { Select, Form, Input, Slider, Skeleton, Button, InputNumber } from 'antd';
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import BannerImg from "../../asstes/images/details01.jpg"
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import LanguageContext from "../../context/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { t } from "i18next";
import { loneInstructionAction } from "./redux/lone-instruction/loneInstruction.actions";

function LoanCalculator() {
    const dispatch = useDispatch();
    const { language } = useContext(LanguageContext);
    const { Option } = Select;
    const [form] = Form.useForm();
    const [Propertyprice, setPropertyprice] = useState([]);
    const [LoanPeriodId, setLoanPeriodId] = useState([]);
    const [interrest, setInterrest] = useState(5);
    const [monthlyPayment, setmonthlyPayment] = useState([]);
    const [propertyDownPayment, setPropertyDownPayment] = useState(t('down-payment'));
    const [downPaymntDesibel, setDownPaymntDesibel] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState(false);

    const onFinish = (values) => {
        const formValues = { ...values, 'interestRate': interrest };
        lonCalculationFun(formValues);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const properTypriceFun = (e) => {
        if (e.target.value.length > 3) {
            setPropertyprice(e.target.value)
            setDownPaymntDesibel("true")
        } else {
            setDownPaymntDesibel("false")
        }
    }
    const downPaymentFun = (e) => {
        setPropertyDownPayment(e.target.value)
    }
    const loanperiodonChangFun = (e) => {
        setLoanPeriodId(e)
    }
    const lonCalculationFun = (values) => {
        /*------------- loan calculator start -------------*/
        const amountToBorrow = Number(values?.propertyprice) - Number(values?.propertyDownPayment);
        const monthlyInterestRate = values?.interestRate / (12 * 100);
        const totalNoOfInstallments = (values?.loanperiod * 12);
        const monthlyEMI = ((amountToBorrow * monthlyInterestRate) * Math.pow((1 + monthlyInterestRate), totalNoOfInstallments)) / (Math.pow((1 + monthlyInterestRate), totalNoOfInstallments) - 1);
        const totalRepaidAmount = monthlyEMI * totalNoOfInstallments;
        /*------------- loan calculator end -------------*/
        setmonthlyPayment(monthlyEMI);
        setPaymentDetails(true);
    }
    const larngSliderFun = (e) => {
        setInterrest(e)
    }

    let count = 0;
    useEffect(() => {
        if (count == 0) {
            setTimeout(() => {
                dispatch(loneInstructionAction());
                count = count + 1;
            }, 500)
        }
    }, [count, language]);

    const loneInstruction = useSelector(
        (state) => state.loneInstructionState
    );

    const instruction = loneInstruction?.loneInstructionData?.list
    const loading = loneInstruction?.loading

    console.log(loading, "monthlyPayment monthlyPayment")
    console.log(monthlyPayment, "monthlyPayment monthlyPayment")
    return (
        <div>
            <DefaultLayout>
                <div className='blog_deatils_area'>
                    <img src={BannerImg} alt="" />
                    <h3> {t('loan-calculator')} </h3>
                </div>
                <Container>
                    <div className='discover_search discover_search_rent bg-light-gold'>
                        <Form
                            name="basic"
                            layout="vertical"
                            form={form}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Row>
                                <Col sm={3} lg={3}>
                                    <Form.Item
                                        label={t('property-price')}
                                        name="propertyprice"
                                        rules={[{ required: true, message: t('property-price') + t('is_required') }]}
                                        onChange={properTypriceFun}
                                        class={'border-radius-5'}
                                    >
                                        <Input type={'number'} maxLength={'11'} />
                                    </Form.Item>
                                </Col>
                                <Col sm={3} lg={2}>
                                    <Form.Item
                                        label={t('period')}
                                        name="loanperiod"
                                        rules={[{ required: true, message: t('period') + t('is_required') }]}
                                    >
                                        <Select onChange={loanperiodonChangFun} allowClear style={{ width: "100%" }}>
                                            <Option value="5">5 {t('years')}</Option>
                                            <Option value="6">6 {t('years')}</Option>
                                            <Option value="7">7 {t('years')}</Option>
                                            <Option value="8">8 {t('years')}</Option>
                                            <Option value="9">9 {t('years')}</Option>
                                            <Option value="10">10 {t('years')}</Option>
                                            <Option value="11">11 {t('years')}</Option>
                                            <Option value="12">12 {t('years')}</Option>
                                            <Option value="13">13 {t('years')}</Option>
                                            <Option value="14">14 {t('years')}</Option>
                                            <Option value="15">15 {t('years')}</Option>
                                            <Option value="16">16 {t('years')}</Option>
                                            <Option value="17">17 {t('years')}</Option>
                                            <Option value="18">18 {t('years')}</Option>
                                            <Option value="19">19 {t('years')}</Option>
                                            <Option value="20">20 {t('years')}</Option>
                                            <Option value="21">21 {t('years')}</Option>
                                            <Option value="22">22 {t('years')}</Option>
                                            <Option value="23">23 {t('years')}</Option>
                                            <Option value="24">24 {t('years')}</Option>
                                            <Option value="25">25 {t('years')}</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col sm={3} lg={3} >
                                    <Form.Item
                                        label={t('down-payment')}
                                        name="propertyDownPayment"
                                        rules={[{ required: true, message: t('down-payment') + t('is_required') }]}
                                        onChange={downPaymentFun}
                                        class={'border-radius-5'}
                                    >
                                        <Input type={'number'} maxLength={'11'} />
                                    </Form.Item>
                                </Col>
                                <Col sm={3} lg={2}>
                                    <Form.Item
                                        label={t('interest-rate')}
                                        name="interestRate"
                                    >
                                        <Slider className="slider-style" step={0.1} onChange={larngSliderFun} value={typeof interrest === 'number' ? interrest : 0} defaultValue={interrest} />
                                        <InputNumber type='number' min={1}
                                            max={100} className="slider-style-count" onChange={larngSliderFun} value={interrest} /><strong>%</strong>
                                    </Form.Item>
                                </Col>
                                <Col sm={3} lg={2}>
                                    <button className='calculat__btn' type="primary"> {t('calculate')} </button>
                                </Col>
                            </Row>
                        </Form>


                    </div>
                    {paymentDetails ?
                        <div className='lone_details_area'>
                            <Col sm={12} lg={12} className="calculate-details">
                                <Row>
                                    <Col sm={12} lg={12}>
                                        <div className='title_area'>
                                            <p> {t('Property')} </p>
                                            <h3> {t('payment-details')} </h3>
                                        </div>
                                    </Col>
                                    <Col sm={7} lg={7}>
                                        <div className='payment_details_area_left'>
                                            <table className="table table-sm mb-0 bg-white lone-table-st" >
                                                <tbody>
                                                    <tr>
                                                        <td> {t('property-price')}:</td>
                                                        <td>{t('BDT')}  <strong>{new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(Propertyprice)} </strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t('down-payment')}:</td>
                                                        <td>{t('BDT')}  <strong>{new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(propertyDownPayment)} </strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t('lone-amount')}:</td>
                                                        <td>{t('BDT')}  <strong>{new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(Propertyprice - propertyDownPayment)}</strong> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t('period')}:</td>
                                                        <td> <strong>{new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(LoanPeriodId)} </strong>{t('years')} </td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t('interest-rate')}:</td>
                                                        <td><strong>{new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(interrest)} %</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t('monthly-payment')}:</td>
                                                        <td>{t('BDT')}  <strong>{new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(Math.ceil(monthlyPayment))}</strong> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t('payment-breakdown')}:</td>
                                                        <td>
                                                            <div className="graphs">
                                                                <div id="interest_bar" className="bar-graph" style={{ width: "64%" }}>{new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(64)} %</div>
                                                                <div id="principle_bar" className="bar-graph-one" style={{ width: "36%" }}>{new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(36)} %</div>
                                                                <div className="pri-int d-flex justify-content-between" style={{ width: "36%" }}>
                                                                    <span className="int-left">{t('interest')}</span>&nbsp;&nbsp;
                                                                    <span className="pri-right">{t('principle')}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                    <Col sm={5} lg={5}>
                                        <div className='payment_details_area_left '>
                                            <div className='monthley__installment_loan mb-4'>
                                                <h3> {t('monthly-installment')} </h3>
                                                <h5> {t('BDT')} <span> {new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(Math.ceil(monthlyPayment))}</span> </h5>
                                                {/* <p> {t('BDT')} <span>{new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format((monthlyPayment / 100000).toFixed(2))} {t('lac')} {t('approx')} </span> </p> */}
                                            </div>
                                            <div className='monthley__installment_loan'>
                                                <h3> {t('lone-amount')} </h3>
                                                <h5> {t('BDT')} <span> {new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(Math.ceil(Propertyprice - propertyDownPayment))} </span> </h5>
                                                {/* <p> {t('BDT')} <span>{new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(((Propertyprice - propertyDownPayment) / Math.pow(100, 1 * 3).toFixed(2)) / 10)}  {t('crore')} {t('approx')} </span> </p> */}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                        : null}

                    <div className='home_loan_in_bangladesh'>
                        <Row>
                            <Col sm={12} lg={12} className='p-3'>
                                <div className='title_area'>
                                    <p> {t('Property')} </p>
                                    <h3> {t('applying-for-home-loan')} </h3>
                                </div>
                            </Col>
                            <Col sm={12} lg={12}>
                                <div className='title_area____contn'>
                                    {loading ? <><Skeleton /></> : <>
                                        {language === "en" ? <> <div className='editor__html' dangerouslySetInnerHTML={{ __html: instruction?.description_en }} ></div> </> : <> <div className='editor__html' dangerouslySetInnerHTML={{ __html: instruction?.description_bn }}></div> </>}
                                    </>}
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </DefaultLayout>
        </div>
    )
}

export default LoanCalculator
