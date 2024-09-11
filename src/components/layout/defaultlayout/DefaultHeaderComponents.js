import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { RiBarChartHorizontalLine, RiRefund2Fill, RiRobotFill, RiSettings5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Drawer, Modal, Select, Button, Spin, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// Select Language
import { withTranslation } from 'react-i18next';
import LanguageSelect from "../../../LanguageSelect";
import Logo from "../../../asstes/images/logo2.png"
import { ptypeCstatusAction } from "../../../pages/DefaultPages/redux/ptype-cstatus/ptypeCstatus.actions";
function DefaultHeaderComponents() {
    const selectedCurrency = localStorage.getItem("currency") || "BDT";
    const selectedUnit = localStorage.getItem("unit") || "sqft";
    const [visible, setVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currency, setIsCurrency] = useState(selectedCurrency);
    const [unit, setIsUnit] = useState(selectedUnit);
    const { SubMenu } = Menu;

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    // siteSettings
    const showModal = (type) => {
        setIsModalOpen(type);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const changeCurrency = (e) => {
        setIsCurrency(e);
    };
    const saveCurrency = () => {
        localStorage.setItem("currency", currency);
        setIsModalOpen(false);
        message.success('Currency ' + currency + ' Selected Successfully');
    };
    const changeUnit = (e) => {
        setIsUnit(e);
    };
    const saveUnit = () => {
        localStorage.setItem("unit", unit);
        setIsModalOpen(false);
        message.success('Area Unit ' + unit + ' Selected Successfully');
    };
    const siteSettings = (
        <>
            <Menu>
                <Menu.Item key={1} onClick={() => showModal("currency")} className="site-setting-option"><RiRefund2Fill />Change Currency</Menu.Item>
                <Menu.Item key={2} onClick={() => showModal("unit")} className="site-setting-option"><RiRobotFill />Change Area Unit</Menu.Item>
            </Menu>
            {isModalOpen === "currency" ? <>
                <Modal title="Change Currency" footer={null} width={350} open={isModalOpen} onCancel={handleCancel}>
                    <Select
                        defaultValue="Select Currency"
                        className="w-100 mb-3"
                        value={currency}
                        onChange={changeCurrency}
                        options={[
                            { value: 'AED', label: 'United Arab Emirates (AED)' },
                            { value: 'BDT', label: 'Bangladesh (BDT)' },
                            { value: 'XPF', label: 'New Caledonia (XPF)' },
                            { value: 'ANG', label: 'Netherlands Antilles (ANG)' },
                            { value: 'EUR', label: 'European Union (EUR)' },
                            { value: 'NPR', label: 'Nepal (NPR)' },
                            { value: 'USD', label: 'United States of America (USD)' },
                        ]}
                    />
                    <Button className='button__call_' onClick={handleCancel} style={{ float: "left" }}>
                        Cancel
                    </Button>
                    <Button className='button__call_' onClick={saveCurrency} style={{ float: "right" }}>
                        Save
                    </Button>
                </Modal>
            </> : null}
            {isModalOpen === "unit" ? <>
                <Modal title="Change Area Unit" footer={null} width={350} open={isModalOpen} onCancel={handleCancel}>
                    <Select
                        defaultValue="Select Area Unit"
                        className="w-100 mb-3"
                        value={unit}
                        onChange={changeUnit}
                        options={[
                            { value: 'sqft', label: 'Square Feet' },
                            { value: 'Sq. Yd.', label: 'Square Yards' },
                            { value: 'Sq. M.', label: 'Square Meters' },
                            { value: 'Katha', label: 'Katha' },
                        ]}
                    />
                    <Button className='button__call_' onClick={handleCancel} style={{ float: "left" }}>
                        Cancel
                    </Button>
                    <Button className='button__call_' onClick={saveUnit} style={{ float: "right" }}>
                        Save
                    </Button>
                </Modal>
            </> : null}
        </>
    );
    // Buy
    const buy = (
        <Menu>
            <Menu.Item> Bangladesh </Menu.Item>
            <Menu.Item> <Link to="/apartments-for-sale"> Apartments for Sale  </Link> </Menu.Item>
            <Menu.Item> <Link to="/apartments-for-sale"> Buildings for Sale </Link> </Menu.Item>
            <Menu.Item> <Link to="/apartments-for-sale"> Duplex for Sale  </Link> </Menu.Item>
            <Menu.Item> <Link to="/apartments-for-sale"> All Residential Properties  </Link> </Menu.Item>
            <Menu.Item> <Link to="/apartments-for-sale"> All Commercial Properties  </Link> </Menu.Item>
        </Menu>
    )
    // Rent
    const rent = (
        <Menu>
            <Menu.Item> Bangladesh </Menu.Item>
            <Menu.Item> <Link to="/apartments-for-sale"> Apartments for Rent  </Link> </Menu.Item>
            <Menu.Item> <Link to="/apartments-for-sale"> Buildings for Rent </Link> </Menu.Item>
            <Menu.Item> <Link to="/apartments-for-sale"> Duplex for Rent  </Link> </Menu.Item>
            <Menu.Item> <Link to="/apartments-for-sale"> All Residential Properties  </Link> </Menu.Item>
            <Menu.Item> <Link to="/apartments-for-sale"> All Commercial Properties  </Link> </Menu.Item>
        </Menu>
    )
    // Guides
    const guides = (
        <Menu>
            <Menu.Item>
                <Link to="/area-guides"> Area Guides  </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/real-estate-solutions"> Buy/Sell Guide </Link>

            </Menu.Item>
            <Menu.Item> <Link to="/loan-calculator"> Loan Calculator </Link> </Menu.Item>
        </Menu>
    )
    // Services
    const services = (
        <Menu>
            <Menu.Item>
                <Link to="/home-loan"> Home Loan  </Link>
            </Menu.Item>
            <Menu.Item> <Link to="/interior"> Interior </Link></Menu.Item>
        </Menu>
    )


    return (
        <div>
            <div className='header_top_area'>
                <Container>
                    <Row>
                        <Col sm={6} lg={6}>
                            <div className='languageSelect_Area'>
                                <LanguageSelect />
                            </div>
                            <div className='header_to_setting header_to_setting_txt '>
                                <Dropdown overlay={siteSettings}>
                                    <Link className="ant-dropdown-link" to="/" onClick={e => e.preventDefault()}>
                                        <RiSettings5Fill />
                                        Site Settings
                                    </Link>
                                </Dropdown>
                            </div>
                        </Col>
                        <Col sm={6} lg={6}>
                            <div className='header_tot_r'>
                                {/*<div className='header_to_setting header_to_setting_txt '>*/}
                                {/*  <RiHeartFill />*/}
                                {/*  Favourite properties*/}
                                {/*</div>*/}
                                {/*<div className='header_to_setting header_to_setting_txt rnone'>*/}
                                {/*  <RiStarLine />*/}
                                {/*  Saved searches*/}
                                {/*</div>*/}
                                {/*<div className='header_to_setting header_to_setting_txt '>*/}
                                {/*  <RiUserShared2Line />*/}
                                {/*  Log in*/}
                                {/*</div>*/}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='header_logo_menu_area'>
                <Container>
                    <Row>
                        <Col sm={3} lg={3}>
                            <div className='logo_area'>
                                <Link to="/"> <img src={Logo} alt="logo" /> </Link>
                                <RiBarChartHorizontalLine onClick={showDrawer} className='rasponsive_menu' />
                            </div>
                        </Col>
                        <Col sm={9} lg={9}>
                            <div className='menu_area'>
                                <Link to="/"> Home </Link>
                                <Link to="/add-property"> Add Property </Link>
                                <Link to="/privacy-policy"> Privacy Policy </Link>
                                <Link to="/about-us"> About us </Link>
                                <Link to="/career"> Career </Link>
                                <Link to="/contact-us"> Contact us </Link>
                                <Link to="/blog"> Blog </Link>
                                <Dropdown overlay={guides}>
                                    <Link className="ant-dropdown-link" to="/" onClick={e => e.preventDefault()}>
                                        Guides <DownOutlined />
                                    </Link>
                                </Dropdown>
                                <Link to="/new-projects"> New Projects </Link>
                                <Dropdown overlay={services}>
                                    <Link className="ant-dropdown-link" to="/" onClick={e => e.preventDefault()}>
                                        {/* <span className="menu__offer"> new </span> */}
                                        Services <DownOutlined />
                                    </Link>
                                </Dropdown>

                                {/*<Link to="/"> <span className="menu__offer"> new </span> Trends </Link>*/}
                            </div>
                        </Col>
                    </Row>
                    <Drawer title="&nbsp;" placement="right" width="auto" onClose={onClose} visible={visible}>
                        <div className='d-flex flex-column'>
                            <Link className='mb-2' to="/"> Home </Link>
                            <Link className='mb-2' to="/add-property"> Add Property </Link>
                            <Link to="/privacy-policy"> Privacy Policy </Link>
                            <Link className='mb-2' to="/about-us"> About us </Link>
                            <Link className='mb-2' to="/career"> Career </Link>
                            <Link className='mb-2' to="/contact-us"> Contact us </Link>
                            <Link className='mb-2' to="/blog"> Blog </Link>
                            <Dropdown className='mb-2' overlay={guides}>
                                <Link className="ant-dropdown-link" to="/" onClick={e => e.preventDefault()}>
                                    Guides <DownOutlined />
                                </Link>
                            </Dropdown>
                            <Link className='mb-2' to="/new-projects"> New Projects </Link>
                            <Dropdown overlay={services}>
                                <Link className="ant-dropdown-link" to="/" onClick={e => e.preventDefault()}>
                                    {/* <span className="menu__offer"> new </span> */}
                                    Services <DownOutlined />
                                </Link>
                            </Dropdown>
                        </div>
                    </Drawer>
                </Container>
            </div>
        </div>
    )
}

export default withTranslation()(DefaultHeaderComponents)
