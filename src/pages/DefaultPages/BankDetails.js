import React, { useState, useContext, useEffect } from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import BannerImg from "../../asstes/images/details01.jpg"
import { Container, Row, Col } from 'react-bootstrap'
import { Form, Input, } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { t } from "i18next";
import { ENVIRONMENT } from "../../config/environment/environment";
import LanguageContext from "../../context/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { loanBankGetAction } from "./redux/loan-banks/loanBanks.actions";
import { Skeleton } from "antd";
import { ApplyLoanModal } from '../../components/modals/ApplyLoanModal';
function BankDetails() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const [loanBankData, setLoanBankData] = useState(null);
    const { language } = useContext(LanguageContext);
    const { id } = useParams();
    const loanBank = useSelector(
        (state) => state.loanBankState
    );
    const bankData = loanBank?.loanBankData?.list?.find(item => item.id == id);
    useEffect(() => {
        if (!bankData) {
            setTimeout(() => {
                dispatch(loanBankGetAction());
            }, 500)
        }
    }, [id, language, loanBank]);

    useEffect(() => {
        setLoanBankData(bankData);
    }, [bankData])

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
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
                        <h2>{language == 'en' ? loanBankData?.title_en : loanBankData?.title_bn} </h2>
                        <button onClick={showModal} className='home_lone__banner_text__btn'> {t('apply_for_loan')} </button>
                    </div>
                </div>
                <Container>
                    <ApplyLoanModal open={isModalVisible} onOk={handleOk} onCancel={handleCancel} onFinish={onFinish} />

                    <div style={{ paddingTop: '80px' }} dangerouslySetInnerHTML={{ __html: language == 'en' ? loanBankData?.description_en : loanBankData?.description_bn }}>
                    </div>
                </Container>

            </DefaultLayout>
        </div>
    )
}

export default BankDetails