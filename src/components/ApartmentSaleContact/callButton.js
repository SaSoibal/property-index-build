import React, { useState } from 'react';
import { RiPhoneFill } from "react-icons/ri";
import { Button, Modal, Spin } from "antd";
import { Link } from "react-router-dom";
function CallButton(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => { setIsModalVisible(true) };
    const handleOk = () => { setIsModalVisible(false) };
    const handleCancel = () => { setIsModalVisible(false) };
    return (
        <>
            <button onClick={showModal} className='btn btn-sm m-1 text-dark' style={{ backgroundColor: '#ffcb05' }}> <RiPhoneFill /> Call </button>
            <Modal width={350} footer={null} className='contact_n_model' title="Contact Us" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className='contact_number__model'>
                    <h3> <Link to={'tel:+8801619913922'}><RiPhoneFill /> +8801619913922 </Link>  </h3>
                    <h3> <Link to={'tel:+8801321216163'}><RiPhoneFill /> +8801321216163 </Link>  </h3>
                    <p> Please quote property reference </p>
                    <p> <b> Property - ID {props?.property_id}</b> </p>
                    <p>when calling us. </p>
                </div>
            </Modal>
        </>
    );
}

export default CallButton;
