import React, { useState } from 'react';
import { Modal, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import AxiosWithOutAuthPostInstance from "../../config/api/withoutauthpost.axios";
import {token} from "../../Helper/apiToken";

const CVUploadModal = ({ details, isOpen, onClose, onSubmit }) => {
    const [fileList, setFileList] = useState([]);

    const handleFileChange = ({ file, fileList }) => {
        setFileList([...fileList]);
    };


    const handleUpload = async () => {
        // Handle file upload logic here
        if (fileList.length > 0) {
            const file = fileList[0].originFileObj;
            try {

                if (fileList.length === 0) {
                    message.error('Please select a file to upload');
                    return;
                }


                const file = fileList[0].originFileObj;
                // Convert file to Base64
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = async () => {
                    const base64Data = reader.result; // Remove base64 prefix
                    const formData = {
                        api_key:token,
                        job_id:details?.id ?? '',
                        file:base64Data,
                    };
                    const response = AxiosWithOutAuthPostInstance.post("upload-cv", formData).toPromise().then(res => {
                        message.success(res?.data?.message);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                };

            } catch (error) {
                console.error('Error uploading file:', error);
                message.error('Error uploading file');
            }
        } else {
            message.error('Please select a file to upload');
        }
        // SAS
        onClose(); // Close modal after submission
    };

    const modalProps = {
        visible: isOpen,
        title: 'Drop Your CV',
        onCancel: onClose,
        footer: [
            <Button key="back" onClick={onClose}>
                Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleUpload}>
                Submit
            </Button>,
        ],
    };

    return (
        <Modal {...modalProps}>
            <div className="text-center">
                <Upload
                    fileList={fileList}
                    onChange={handleFileChange}
                    beforeUpload={() => false} // Disable automatic upload
                    accept=".pdf,.doc,.docx" // Accept PDF and Word documents
                >
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
            </div>
        </Modal>
    );
};

export default CVUploadModal;
