import React, {useContext, useEffect, useState} from 'react';
import { Modal, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import AxiosWithOutAuthPostInstance from "../../config/api/withoutauthpost.axios";
import {token} from "../../Helper/apiToken";
import LanguageContext from "../../context/LanguageProvider";
import {format} from "date-fns";

const CVUploadModal = ({ details, isOpen, onClose, onSubmit }) => {
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        if (details) {
            console.log('Received data:', details); // Do something with the data
        }
    }, [details]);

    const modalProps = {
        width: 'auto',
        visible: isOpen,
        title: 'Details of CV',
        onCancel: onClose,
        footer: [
            <Button key="back" onClick={onClose}>
                Close
            </Button>
        ],
    };
    const truncateText = (text, limit) => {
        if (!text) return null;
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };

    return (
        <Modal {...modalProps}>
            <div className="text-center">
                <h1>
                    {language == "en" ? details?.title_en : details?.title_bn}
                </h1>
                <div>
                    {language == "en" ? details?.category_en : details?.category_bn}
                </div>
                <span>
                    Deadline: {details?.deadline.split(' ')[0]}
                </span>
                <div className="border-top mt-2 pt-2">
                    <span style={{textAlign: "justify", width: "100%"}}>

                            {language === "en" ? <>
                                <div className='editor__html'
                                     dangerouslySetInnerHTML={{__html: truncateText(details?.description_en, 500)}}></div>
                            </> : <>
                                <div className='editor__html'
                                     dangerouslySetInnerHTML={{__html: truncateText(details?.description_en, 500)}}></div>
                            </>}
                    </span>
                </div>
            </div>
        </Modal>
    );
};

export default CVUploadModal;
