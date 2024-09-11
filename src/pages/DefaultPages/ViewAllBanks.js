import React, { useState, useContext, useEffect } from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import BannerImg from "../../asstes/images/details01.jpg"
import { Container, Row, Col } from 'react-bootstrap'
import { Form, Input, } from 'antd';
import { Link } from 'react-router-dom';
import { t } from "i18next";
import { ENVIRONMENT } from "../../config/environment/environment";
import LanguageContext from "../../context/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { loanBankGetAction } from "./redux/loan-banks/loanBanks.actions";
import { Skeleton } from "antd";
function ViewAllBanks() {

    const { language } = useContext(LanguageContext);
    let count = 0;
    const dispatch = useDispatch();
    useEffect(() => {
        if (count == 0) {
            setTimeout(() => {
                dispatch(loanBankGetAction());
                count = count + 1;
            }, 500)
        }
    }, [count, language]);

    const loanBank = useSelector(
        (state) => state.loanBankState
    );
    const loading = loanBank?.loading;
    const loanBankData = loanBank?.loanBankData?.list;

    const [form] = Form.useForm();
    form.setFieldsValue({
        priceone: "35000",
        pricetwo: "5000",
        // delivery_charge: viewdeliverycharge,
    });

    return (
        <div>
            <DefaultLayout>
                <div className='blog_deatils_area'>
                    <img src={BannerImg} alt="" />
                    <h3> {t('bank_list')} </h3>
                </div>
                <Container>
                    {/* <div className='discover_search'>
                        <Form
                            name="Apply For Loan"
                            layout="vertical"
                            className='apply_for_loan_model'
                            form={form}
                            initialValues={{
                                remember: true,
                            }}
                            autoComplete="off"
                        >
                            <Row>
                                <Col sm={6} lg={6}>
                                    <Form.Item
                                        label="I’d like to borrow (BTD) "
                                        name="priceone"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col sm={6} lg={6}>
                                    <Form.Item
                                        label="Monthly income (BTD)  "
                                        name="pricetwo"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div> */}

                    <div className='bank__box__area'>
                        {loading ? <Skeleton /> :
                            <>
                                <Row>
                                    {
                                        loanBankData?.map((item, index) => (
                                            <Col sm={6} lg={4} key={index}>
                                                <div className='bank__box__area_cont'>
                                                    <img src={ENVIRONMENT.FILE_URL + item.thumbnail} alt={language == 'en' ? item.title_en : item.title_bn} />
                                                    <div className='bank__box__area_text'>
                                                        <Link to={`/loan-banks/${item.id}`}> {language == 'en' ? item.title_en : item.title_bn} </Link>
                                                        <p> <b> {t('max_loan_amount')}  </b> <span> {t('upto_bdt')} {language == 'en' ? item.max_loan_en : item.max_loan_bn} </span> </p>
                                                        <p> <b> {t('interest_rate')} </b>  <span> {language == 'en' ? item.interest_rate_en : item.interest_rate_bn}</span> </p>
                                                        <p> <b> {t('tenure')} </b>  <span> {t('upto')} {language == 'en' ? item.tenure_en : item.tenure_bn} </span> </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                    {
                                        loanBankData?.length == 0 && <h3 className='text-center'>No Data Found</h3>
                                    }
                                </Row>
                            </>
                        }

                    </div>
                </Container>

            </DefaultLayout>
        </div>
    )
}

export default ViewAllBanks