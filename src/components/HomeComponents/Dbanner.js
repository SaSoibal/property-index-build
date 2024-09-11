import React, { useEffect, useState, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Radio, Input, Popover, Button, Space, Checkbox } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { locationAction } from "../../pages/DefaultPages/redux/location/location.actions";
import { useDispatch, useSelector } from "react-redux";
import LanguageContext from "../../context/LanguageProvider";
import { addPropertyGetAction } from "../../pages/DefaultPages/redux/add-property/addProperty.actions";
import DynamicBackground from '../DynamicBackground';

function Dbanner(props) {
    const ptype = props?.ptype;
    const cstatus = props?.cstatus;
    const navigate = useNavigate();
    const [purpose, setPurpose] = useState('1');
    const [conststatus, setConststatus] = useState('0');
    const [location, setLocation] = useState('');
    const [productType, setProductType] = useState('0');
    const [beds, setBed] = useState([]);
    const [bath, setBath] = useState([]);
    const [maxsqft, setMaxArea] = useState('');
    const [minsqft, setMinArea] = useState('');
    const [minprice, setMinPrice] = useState('');
    const [maxprice, setMaxPrice] = useState('');

    const [open, setOpen] = useState(false);
    const [openType, setOpenType] = useState(false);
    const [openBedsBath, setOpenBedsBath] = useState(false);
    const [openArea, setOpenArea] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);
    const [areaMessage, setAreaMessage] = useState('');
    const [priceMessage, setPriceMessage] = useState('');
    const { language } = useContext(LanguageContext);
    const addProperty = useSelector(
        (state) => state.addPropertyState
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if (!addProperty?.addPropertyData?.data?.slider) {
            dispatch(addPropertyGetAction());
        }
    }, [language]);

    // parpose input start
    const handlePurposeChange = (newOpen) => {
        setOpen(newOpen);
    };
    const handlePurpose = (e) => {
        setPurpose(e.target.value)
    }
    const handleConststatus = (e) => {
        setConststatus(e.target.value)
    }
    const purposeHide = () => {
        setOpen(false);
        setPurpose('0');
        setConststatus('0');
    };
    const purposeDone = () => {
        setOpen(false);
    };

    const cstatuslist = cstatus?.map((status, i) =>
        <Radio key={i} value={status?.id}>
            {status?.construction_status}
        </Radio>
    );
    const purposeContent = (
        <div>
            <div className="banner_top_redio" style={{ width: "290px" }}>
                <p>Purpose</p>
                <Radio.Group value={purpose} onChange={handlePurpose} className="mb-2">
                    {/* <Radio value="0">All</Radio> */}
                    <Radio value="1">Sale</Radio>
                    <Radio value="2">Rent</Radio>
                </Radio.Group>
                {purpose == 1 ? <>
                    <p>Completion Status</p>
                    <Radio.Group value={conststatus} onChange={handleConststatus}>
                        <Radio value="0">All</Radio>
                        {cstatuslist}
                    </Radio.Group>
                </> : ''}
                <div className="popover-button-style mt-2">
                    <Space wrap>
                        <Button type="default" onClick={purposeHide} block>Reset</Button>
                        <Button type="default" onClick={purposeDone} block>Done</Button>
                    </Space>
                </div>
            </div>
        </div>
    );
    // parpose input end

    // Product type start
    const handleTypeChange = (newOpen) => {
        setOpenType(newOpen);
    };
    const handleProductType = (e) => {
        setProductType(e.target.value)
    }
    const ptoductTypeHide = () => {
        setOpenType(false);
        setProductType('1');
    };
    const ptoductTypeDone = () => {
        setOpenType(false);
    };
    const ptypelist = ptype?.map((type, i) =>
        <Radio key={i} value={type?.id}>{type?.name}</Radio>
    );
    const typs_name = ptype?.find(x => x.id == productType);
    const typeContent = (
        <div>
            <div className="banner_top_redio" style={{ width: "290px" }}>
                <p>Product Type</p>
                <Radio.Group value={productType} onChange={handleProductType} className="mb-2">
                    <Radio value="0">All Type</Radio><br></br>
                    {ptypelist}
                </Radio.Group>
                <div className="popover-button-style mt-2">
                    <Space wrap>
                        <Button type="default" onClick={ptoductTypeHide} block>Reset</Button>
                        <Button type="default" onClick={ptoductTypeDone} block>Done</Button>
                    </Space>
                </div>
            </div>
        </div>
    );
    // Product type end
    // Beds & Baths start
    const handleBedsBathChange = (newOpen) => {
        setOpenBedsBath(newOpen);
    };
    const handleBeds = (checkedValues) => {
        setBed(checkedValues)
    };
    const handleBath = (checkedValues) => {
        setBath(checkedValues)
    }
    const bedsBathHide = () => {
        setOpenBedsBath(false);
        setBed([]);
        setBath([]);
    };
    const bedsBathDone = () => {
        setOpenBedsBath(false);
    };
    const bedsBathContent = (
        <div>
            <div className="banner_top_checkbox">
                <p>Beds</p>
                <Checkbox.Group value={beds} onChange={handleBeds} className="mb-2">
                    <Checkbox value="1">1</Checkbox>
                    <Checkbox value="2">2</Checkbox>
                    <Checkbox value="3">3</Checkbox>
                    <Checkbox value="4">4</Checkbox><br></br>
                    <Checkbox value="5">5</Checkbox>
                    <Checkbox value="6">6</Checkbox>
                    <Checkbox value="7">7</Checkbox>
                    <Checkbox value="8">8+</Checkbox>
                </Checkbox.Group>
                <p>Bath</p>
                <Checkbox.Group value={bath} onChange={handleBath} className="mb-2">
                    <Checkbox value="1">1</Checkbox>
                    <Checkbox value="2">2</Checkbox>
                    <Checkbox value="3">3</Checkbox>
                    <Checkbox value="4">4</Checkbox><br></br>
                    <Checkbox value="5">5</Checkbox>
                    <Checkbox value="6">6</Checkbox>
                    <Checkbox value="7">7</Checkbox>
                    <Checkbox value="8">8+</Checkbox>
                </Checkbox.Group>
                <div className="popover-button-style mt-2">
                    <Space wrap>
                        <Button type="default" onClick={bedsBathHide} block>Reset</Button>
                        <Button type="default" onClick={bedsBathDone} block>Done</Button>
                    </Space>
                </div>
            </div>
        </div>
    );
    // Beds & Baths End
    // area max min sqft start
    const handleAreaChange = (newOpen) => {
        setOpenArea(newOpen);
    };
    const handleMinimumSqft = (e) => {
        setMinArea(e.target.value);
    };
    const handleMaximumSqft = (e) => {
        if (Number(minsqft) > Number(e.target.value)) {
            setAreaMessage('Max sqft smaller than Min sqft');
        } else {
            setAreaMessage('');
        }
        setMaxArea(e.target.value);
    };
    const areaHide = () => {
        setOpenArea(false);
        setMinArea('');
        setMaxArea('');
    };
    const areaDone = () => {
        setOpenArea(false);
    };
    const areaContent = (
        <div>
            <div className="banner_top_checkbox" style={{ width: "290px" }}>
                <Row className="mb-4">
                    <div className="col-6">
                        <p>Minimum sqft</p>
                        <Input type={'number'} placeholder="0" value={minsqft} min={1} max={50000} onChange={handleMinimumSqft} style={{ width: "100%" }} />
                    </div>
                    <div className="col-6">
                        <p>Maximum sqft</p>
                        <Input type={'number'} placeholder="Any" value={maxsqft} min={1} max={50000} onChange={handleMaximumSqft} style={{ width: "100%" }} />
                        <small className="text-danger">{areaMessage}</small>
                    </div>
                </Row>

                <div className="popover-button-style mt-2">
                    <Space wrap>
                        <Button type="default" onClick={areaHide} block>Reset</Button>
                        <Button type="default" onClick={areaDone} block>Done</Button>
                    </Space>
                </div>
            </div>
        </div>
    );
    // area max min sqft End
    // Price start
    const handlePriceChange = (newOpen) => {
        setOpenPrice(newOpen);
    };
    const handleMinimumMaxPrice = (e) => {
        setMinPrice(e.target.value);
    };
    const handleMaximumPrice = (e) => {
        if (Number(minprice) > Number(e.target.value)) {
            setPriceMessage('Max Price smaller than Min Price');
        } else {
            setPriceMessage('');
        }
        setMaxPrice(e.target.value);
    };
    const priceHide = () => {
        setOpenPrice(false);
        setMinPrice('');
        setMaxPrice('');
    };
    const priceDone = () => {
        setOpenPrice(false);
    };
    const priceContent = (
        <div>
            <div className="banner_top_checkbox" style={{ width: "290px" }}>
                <Row className="mb-4">
                    <div className="col-6">
                        <p>Price Max</p>
                        <Input type={'number'} placeholder="0" value={minprice} min={1} max={50000} onChange={handleMinimumMaxPrice} style={{ width: "100%" }} />
                    </div>
                    <div className="col-6">
                        <p>Price Min</p>
                        <Input type={'number'} placeholder="Any" value={maxprice} min={1} max={50000} onChange={handleMaximumPrice} style={{ width: "100%" }} />
                        <small className="text-danger">{priceMessage}</small>
                    </div>
                </Row>
                <div className="popover-button-style mt-2">
                    <Space wrap>
                        <Button type="default" onClick={priceHide} block>Reset</Button>
                        <Button type="default" onClick={priceDone} block>Done</Button>
                    </Space>
                </div>
            </div>
        </div>
    );
    // Price end


    // Filter Submit start
    const clickUrl = () => {
        navigate('/property/for-' + ((purpose == 1) ? 'sale' : ((purpose == 2) ? 'rent' : 'all')) + '?purpose=' + purpose + '&status=' + conststatus + '&location=' + location + '&type=' + productType + '&beds=' + beds + '&baths=' + bath + '&areamin=' + minsqft + '&areamax=' + maxsqft + '&minprice=' + minprice + '&maxprice=' + maxprice + '&city=');
    };
    // Filter Submit End

    // location search
    const locationList = useSelector(
        (state) => state.locationState
    );

    function SearchChangeevent(event) {
        dispatch(locationAction(event.target.value));
        setLocation(event.target.value)
    }
    const locationData = locationList?.locationData?.data?.location;
    const purposeSearchContent = (
        <div>
            <div className="banner_top_checkbox" style={{ width: "315px" }}>
                <ul className="location-list">
                    {locationData?.map((loc, i) =>
                        <li key={i} onClick={() => clickLocation(loc?.location)}><EnvironmentOutlined /> {loc?.location} <span className="city">{loc?.cities?.city}</span></li>
                    )}
                </ul>
            </div>
        </div>
    );

    const clickLocation = (e) => {
        setLocation(e)
        dispatch(locationAction(''));
    };

    return (
        <div>
            <DynamicBackground imageUrl={addProperty?.addPropertyData?.data?.slider?.filter(item => item?.banner_type == 0)[0]}>
                {/* <div className='banner_areas'> */}
                <div className="overlay"></div>
                <Container>
                    <div className='bannner_form_area'>
                        <h3>  {t('search-property')} </h3>
                        <div className="banner_radi__btn_area">

                            <div className='banner_form_area'>
                                <Row>
                                    <Col sm={3} lg={3} className='pb-1'>
                                        <Popover placement="bottomLeft" open={open} onOpenChange={handlePurposeChange} content={purposeContent} trigger="click">
                                            <Button className="input-button text-capitalize">{t('purpose')}</Button>
                                        </Popover>
                                    </Col>
                                    <Col sm={6} lg={6} className='pb-1'>
                                        <Popover placement="bottom" open={locationData?.length > 0 ? true : false} content={purposeSearchContent} trigger="click">
                                            <Input size="large" placeholder="Location" value={location} onChange={SearchChangeevent} prefix={<EnvironmentOutlined />} />
                                        </Popover>
                                    </Col>
                                    <Col sm={3} lg={3} className='pb-1'>
                                        <Popover placement="bottomRight" open={openType} onOpenChange={handleTypeChange} content={typeContent} trigger="click">
                                            <Button className="input-button">
                                                {typs_name ? typs_name.name : 'All Type'}
                                            </Button>
                                        </Popover>
                                    </Col>

                                    <div className='input_from__banner'>
                                        <Row>
                                            <Col sm={12} lg={3} className='pb-1'>
                                                <Popover placement="bottomLeft" open={openBedsBath} onOpenChange={handleBedsBathChange} content={bedsBathContent} trigger="click">
                                                    <Button className="input-button">
                                                        {beds?.length || bath?.length ?
                                                            <>{(beds?.length ? 'Beds:' : '') + beds}
                                                                {beds?.length && bath?.length ? ' / ' : ''}
                                                                {(bath?.length ? 'Baths:' : '') + bath}</> :
                                                            <>Beds & Baths</>}
                                                    </Button>
                                                </Popover>
                                            </Col>
                                            <Col sm={12} lg={3} className='pb-1'>
                                                <Popover placement="bottom" open={openArea} onOpenChange={handleAreaChange} content={areaContent} trigger="click">
                                                    <Button className="input-button">
                                                        {minsqft || maxsqft ?
                                                            <>{minsqft}
                                                                {minsqft && maxsqft ? ' / ' : ''}
                                                                {maxsqft}</> :
                                                            <>Area (sqft)</>}
                                                    </Button>
                                                </Popover>
                                            </Col>
                                            <Col sm={12} lg={3} className='pb-1'>
                                                <Popover placement="bottom" open={openPrice} onOpenChange={handlePriceChange} content={priceContent} trigger="click">
                                                    <Button className="input-button">
                                                        {minprice || maxprice ?
                                                            <>{minprice}
                                                                {minprice && maxprice ? ' / ' : ''}
                                                                {maxprice}</> :
                                                            <>Price (BDT)</>}
                                                    </Button>
                                                </Popover>
                                            </Col>

                                            <Col sm={3} lg={3}>
                                                <button style={{ 'cursor': 'pointer' }} onClick={clickUrl} className='from_button'> Search </button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* </div> */}
            </DynamicBackground>
        </div>
    )
}

export default Dbanner
