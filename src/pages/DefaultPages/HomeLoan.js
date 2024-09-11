
import React, { useState, useContext, useEffect } from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import BannerImg from "../../asstes/images/hlonBg1.png"
import { Container, Row, Col } from 'react-bootstrap';
import Calculator from "../../components/HomeComponents/LoanCalculation/Calculator.js"
import { Form, Input, message, Modal } from "antd";
import { Link } from 'react-router-dom'
import { t } from "i18next";
import { ENVIRONMENT } from "../../config/environment/environment";
import LanguageContext from "../../context/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { loanBenefitGetAction } from "./redux/loan-benefits/loanBenefits.actions.js";
import { Skeleton } from "antd";
import { ApplyLoanModal } from '../../components/modals/ApplyLoanModal.jsx';

function HomeLoan() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const showModal = () => {
        setIsModalVisible(true);
    };

    const { language } = useContext(LanguageContext);
    let count = 0;
    const dispatch = useDispatch();
    useEffect(() => {
        if (count == 0) {
            setTimeout(() => {
                dispatch(loanBenefitGetAction());
                count = count + 1;
            }, 500)
        }
    }, [count, language]);

    const loanBenefit = useSelector(
        (state) => state.loanBenefitState
    );
    const loading = loanBenefit?.loading;
    const loanBenefitData = loanBenefit?.loanBenefitData?.list;

    const handleOk = () => {
        setIsModalVisible(false);
        console.log(form, 'form data');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = () => {
        setIsModalVisible(false);
    }

    return (
        <div>
            <DefaultLayout>
                <div className='blog_deatils_area'>
                    <img src={BannerImg} alt="" />
                    <div className='home_lone__banner_text'>
                        <h2>{t('home_loan')} </h2>
                        <p>
                            {t('find_the_best_way_to_finance_your_dream_home')}
                        </p>
                        <button onClick={showModal} className='home_lone__banner_text__btn'> {t('apply_for_loan')} </button>
                        <Link to="/view-all-banks">
                            <button className='home_lone__banner_text__btn'> {t('view_all_banks')} </button>
                        </Link>
                    </div>
                </div>

                <ApplyLoanModal open={isModalVisible} onOk={handleOk} onCancel={handleCancel} onFinish={onFinish} />

                <div className='section_area_home_lon'>
                    <Container>
                        <Row>
                            <Col sm={12} lg={12}>
                                <h3> {t('how_home_loans_benefit_you')}? </h3>
                            </Col>
                            {
                                loading ? <Skeleton /> : <>
                                    {
                                        loanBenefitData?.map(item => (
                                            <Col sm={3} lg={3} key={item?.id}>
                                                <div className='home_box'>
                                                    <img src={ENVIRONMENT.FILE_URL + item.thumbnail} alt={language == 'en' ? item.title_en : item.title_bn} />
                                                    <h3> {language == 'en' ? item.title_en : item.title_bn} </h3>
                                                    <p> {language == 'en' ? item.subtitle_en : item.subtitle_bn} </p>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                </>
                            }

                        </Row>
                    </Container>
                </div>
                <div className='section_area_home_loan'>
                    <Container>
                        <Row>
                            <Col sm={12} lg={12}>
                                <h3> {t('home_loan_calculator')} </h3>
                            </Col>
                            <Col sm={12} lg={12}>
                                <div className='home_box'>
                                    <Calculator />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </DefaultLayout>
        </div>
    )
}

export default HomeLoan
