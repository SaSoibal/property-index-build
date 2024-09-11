import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import ReactFlagsSelect from "react-flags-select";
import { RiFolderSettingsLine, RiHeartFill, RiStarLine, RiUserShared2Line, RiBarChartHorizontalLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Drawer } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// Select Language
import { withTranslation } from 'react-i18next';
import LanguageSelect from "../../../LanguageSelect";
import Logo from "../../../asstes/images/logo2.png"
function DefaultHeaderComponents() {
  const [select, setSelect] = useState("BD");
  const onSelect = (code) => setSelect(code);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

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
          <Link to="/real-estate-solutions"> Buy/Sell Guide  </Link>
      </Menu.Item>
      <Menu.Item> <Link to="/loan-calculator"> Loan Calculator  </Link> </Menu.Item>
    </Menu>
  )
  // Services
  const services = (
    <Menu>
      <Menu.Item>
        {/* <Link to="/"> Home Loan  </Link> */}
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
              <ReactFlagsSelect
                selected={select}
                onSelect={onSelect}
                countries={["BD",]}
              />
              <div className='languageSelect_Area'>
                <LanguageSelect />
              </div>
              <div className='header_to_setting header_to_setting_txt '>
                <RiFolderSettingsLine />
                Site settings
              </div>
            </Col>
            <Col sm={6} lg={6}>
              <div className='header_tot_r'>
                <div className='header_to_setting header_to_setting_txt '>
                  <RiHeartFill />
                  Favourite properties
                </div>
                <div className='header_to_setting header_to_setting_txt rnone'>
                  <RiStarLine />
                  Saved searches
                </div>
                <div className='header_to_setting header_to_setting_txt '>
                  <RiUserShared2Line />
                  Log in
                </div>
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
              </div>
            </Col>
            <Col sm={9} lg={9}>
              <RiBarChartHorizontalLine onClick={showDrawer} className='rasponsive_menu' />
              <div className='menu_area'>
                <Dropdown overlay={buy}>
                  <Link className="ant-dropdown-link" to="/" onClick={e => e.preventDefault()}>
                    Buy <DownOutlined />
                  </Link>
                </Dropdown>
                <Dropdown overlay={rent}>
                  <Link className="ant-dropdown-link" to="/" onClick={e => e.preventDefault()}>
                  Rent <DownOutlined />
                  </Link>
                </Dropdown>
                <Link to="/add-property"> Add Property </Link>
                <Link to="/blog"> Blog </Link>
                <Dropdown overlay={guides}>
                  <Link className="ant-dropdown-link" to="/" onClick={e => e.preventDefault()}>
                    Guides <DownOutlined />
                  </Link>
                </Dropdown>
                <Link to="/new-projects"> New Projects </Link>
                <Dropdown overlay={services}>
                  <Link className="ant-dropdown-link" to="/" onClick={e => e.preventDefault()}>
                    <span className="menu__offer"> new </span>
                    Services <DownOutlined />
                  </Link>
                </Dropdown>
                
                <Link to="/"> <span className="menu__offer"> new </span> Trends </Link>
              </div>
            </Col>
          </Row>
          <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={visible}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Container>
      </div>
    </div>
  )
}

export default withTranslation()(DefaultHeaderComponents)
