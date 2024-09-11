import React, { useState, useEffect, useContext, useRef } from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import BannerImg from "../../asstes/images/details01.jpg"
import { Container, Col, Row, } from 'react-bootstrap'
import {
    Input,
    Select,
    Radio,
    Checkbox,
    Pagination,
    Button,
    Space,
    Popover,
    Tag,
    Spin, Tooltip
} from 'antd';
import { Link, useParams } from 'react-router-dom';
import Logo from "../../asstes/images/logo2.png";
import adds from "../../asstes/images/add.jpg";
import adds1 from "../../asstes/images/add1.jpg";
import notFound from "../../asstes/images/no-data-found.png";
import {
    RiHotelBedFill,
    RiArrowDropRightLine,
    RiArrowLeftSLine, RiArrowRightSLine, RiAddFill
} from "react-icons/ri";
import { BiBath, BiBorderAll } from "react-icons/bi";
import { Carousel } from 'antd';
import LanguageContext from "../../context/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { propertyAction } from "./redux/property/property.actions";
import { ENVIRONMENT } from "../../config/environment/environment";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import { ptypeCstatusAction } from "./redux/ptype-cstatus/ptypeCstatus.actions";
import { EnvironmentOutlined } from "@ant-design/icons";
import { locationAction } from "./redux/location/location.actions";
import { cityAction } from "./redux/city-list/cityList.actions";
import CallButton from "../../components/ApartmentSaleContact/callButton";
import SaleContactForm from "../../components/ApartmentSaleContact/saleContactForm";
import Currency from "../../Helper/Currency";
function ApartmentsForSale() {
    const selectedCurrency = localStorage.getItem("currency") || "BDT";
    const [currentPage, setCurrentPage] = useState(1)
    const { language } = useContext(LanguageContext);
    const params = new URLSearchParams(window.location.search);
    const navigate = useNavigate();
    const [purpose, setPurpose] = useState(params.get('purpose') || 1);
    const [conststatus, setConststatus] = useState(params.get('status'));
    const [location, setLocation] = useState(params.get('location'));
    const [productType, setProductType] = useState(params.get('type'));
    const [beds, setBed] = useState(params.get('beds'));
    const [bath, setBath] = useState(params.get('baths'));
    const [minprice, setMinPrice] = useState(params.get('minprice'));
    const [maxprice, setMaxPrice] = useState(params.get('maxprice'));
    const [maxsqft, setMaxArea] = useState(params.get('areamax'));
    const [minsqft, setMinArea] = useState(params.get('areamin'));
    const [cities, setCity] = useState(params.get('city'));
    const [selectCity, setSelectCity] = useState('');

    const [open, setOpen] = useState(false);
    const [openType, setOpenType] = useState(false);
    const [openBedsBath, setOpenBedsBath] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);
    const [openArea, setOpenArea] = useState(false);
    const [areaMessage, setAreaMessage] = useState('');
    const [priceMessage, setPriceMessage] = useState('');
    const [isupdate, setisupdate] = React.useState(0);
    // tag
    const [tags, setTags] = useState([]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef(null);
    const editInputRef = useRef(null);

    const typeStatus = useSelector(
        (state) => state.ptypeCstatusState
    );
    let counts = 0;
    useEffect(() => {
        if (counts == 0) {
            setTimeout(() => {
                dispatch(ptypeCstatusAction());
                counts = counts + 1;
            }, 1500)
        }
    }, [counts, language]);
    const ptype = typeStatus?.ptypecstatusData?.data?.type;
    const cstatus = typeStatus?.ptypecstatusData?.data?.status;



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
        setPurpose('2');
        setConststatus('0');
    };
    const purposeDone = () => {
        setOpen(false);
    };
    const status_name = cstatus?.find(x => x.id == conststatus);
    console.log(cstatus, 'cstatus');

    const purposeContent = (
        <div>
            <div className="banner_top_redio" >
                <p>Purpose</p>
                <Radio.Group value={purpose} onChange={handlePurpose} className="mb-2">
                    <Radio value="1">Sale</Radio>
                    <Radio value="2">Rent</Radio>
                </Radio.Group>
                {purpose == 1 ? <>
                    <p>Completion Status</p>
                    <Radio.Group value={conststatus > 0 ? (status_name?.id) : conststatus} onChange={handleConststatus}>
                        <Radio value={'0'}>All</Radio>
                        {cstatus?.map((status, i) =>
                            <Radio key={i} value={status?.id}>{status?.construction_status}</Radio>
                        )}
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
            <div className="banner_top_checkbox" >
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
    const handleBedClose = () => {
        setBed('');
    };
    const handleBathsClose = () => {
        setBath('');
    }
    // Beds & Baths End
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
    const typs_name = ptype?.find(x => x.id == productType);
    const typeContent = (
        <div>
            <div className="banner_top_redio" >
                <p>Product Type</p>
                <Radio.Group value={productType > 0 ? (typs_name?.id) : productType} onChange={handleProductType} className="mb-2">
                    <Radio value="0">All Type</Radio><br></br>
                    {ptype?.map((type, i) =>
                        <Radio key={i} value={type?.id}>{type?.name}</Radio>
                    )}
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
            <div className="banner_top_checkbox" >
                <Row className="mb-4">
                    <div className="col-6">
                        <p>Min Price</p>
                        <Input type={'number'} placeholder="0" value={minprice} min={1} max={50000} onChange={handleMinimumMaxPrice} style={{ width: "100%" }} />
                    </div>
                    <div className="col-6">
                        <p>Max Price</p>
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
    const handleMinMaxPriceClose = () => {
        setMinPrice('')
        setMaxPrice('')
    }
    // Price end

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
        setCity('');
        setTags([]);
    };
    const areaDone = () => {
        setOpenArea(false);
    };

    // tag
    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current?.focus();
    }, [inputValue]);

    const handleCloseTab = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };

    const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
    };
    useEffect(() => {
        dispatch(cityAction(''));
    }, []);

    const cityList = useSelector(
        (state) => state.cityListState
    );
    const cityChange = (e) => {
        setCity(e)
    }
    const cityData = cityList?.cityData?.data?.city;
    useEffect(() => {
        if (cities) {
            const selCity = cityData?.find((element) => {
                return element.id == cities;
            })
            setSelectCity(selCity);
        } else {
            setSelectCity('');
        }
    }, [cities])

    const handleCityClose = () => {
        setCity('');
        setSelectCity('');
    }
    // tag
    const areaContent = (
        <div>
            <div className="banner_top_checkbox" >
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
                    <div className="col-12 mt-3">
                        <p>Cities</p>
                        <Select style={{ width: "100%" }} onChange={cityChange} value={selectCity?.city} options={cityData?.map((ct) => ({ label: ct?.city, value: ct?.id }))} />
                    </div>
                    <div className="col-12 mt-3">
                        <p>Keywords</p>
                        <div className="add-keyword-tag">
                            <Space size={[0, 8]} wrap>
                                <Space size={[0, 8]} wrap>
                                    {tags.map((tag, index) => {
                                        if (editInputIndex === index) {
                                            return (
                                                <Input
                                                    ref={editInputRef}
                                                    key={tag}
                                                    size="small"
                                                    value={editInputValue}
                                                    onChange={handleEditInputChange}
                                                    onBlur={handleEditInputConfirm}
                                                    onPressEnter={handleEditInputConfirm}
                                                />
                                            );
                                        }
                                        const isLongTag = tag.length > 20;
                                        const tagElem = (
                                            <Tag
                                                key={tag}
                                                closable={index !== 0}
                                                style={{ userSelect: 'none' }}
                                                onClose={() => handleCloseTab(tag)}
                                            >
                                                <span
                                                    onDoubleClick={(e) => {
                                                        if (index !== 0) {
                                                            setEditInputIndex(index);
                                                            setEditInputValue(tag);
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                >
                                                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                                </span>
                                            </Tag>
                                        );
                                        return isLongTag ? (
                                            <Tooltip title={tag} key={tag}>
                                                {tagElem}
                                            </Tooltip>
                                        ) : (
                                            tagElem
                                        );
                                    })}
                                </Space>
                                {inputVisible ? (
                                    <Input
                                        ref={inputRef}
                                        type="text"
                                        size="small"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleInputConfirm}
                                        onPressEnter={handleInputConfirm}
                                    />
                                ) : (
                                    <Tag onClick={showInput}>
                                        <RiAddFill className='text-danger' /> Add Tags
                                    </Tag>
                                )}
                            </Space>
                        </div>
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

    const handleMinMaxSqftClose = () => {
        setMinArea('')
        setMaxArea('')
    }
    const handleTagClose = () => {
        setTags([]);
    }
    // area max min sqft End
    const filterConststatus = (e) => {
        setConststatus(e.target.value)
        setisupdate(isupdate + 1);
    }
    const clickUrl = () => {
        navigate('/property/for-' + (purpose == 1 ? 'sale' : 'rent') + '?purpose=' + purpose + '&status=' + conststatus + '&location=' + location + '&type=' + productType + '&beds=' + beds + '&baths=' + bath + '&areamin=' + minsqft + '&areamax=' + maxsqft + '&minprice=' + minprice + '&maxprice=' + maxprice + '&city=' + cities + '&tags=' + tags);
    }
    const onShowSizeChange = (current, pageSize) => {
        setCurrentPage(current);
    }

    let count = 0;
    const dispatch = useDispatch();
    useEffect(() => {
        clickUrl();
        dispatch(propertyAction(purpose, conststatus, location, productType, beds, bath, minsqft, maxsqft, minprice, maxprice, cities, tags, currentPage));
        count = count + 1;
    }, [count, language, window.location.href, isupdate, currentPage]);
    const property = useSelector(
        (state) => state.propertyListState
    );
    const propertyData = property?.propertyData?.data?.website?.data;
    const totalProperty = property?.propertyData?.data?.website?.total;
    const loading = property?.loading;

    console.log(propertyData, 'propertyData')

    const priceCLC = (price) => {
        if (price === undefined || price === null) {
            return 'Invalid price'; // or any default value or message you prefer
        }

        const lengths = price.toString().length;
        const language = 'en'; // Assuming a default language for demonstration. You should replace this with your actual language logic.

        if (lengths > 1 && lengths < 4) {
            return t('BDT ') + new Intl.NumberFormat(language === 'en' ? 'en-IN' : 'bn-IN').format((price / 100)) + t('hundred');
        } else if (lengths > 3 && lengths < 6) {
            return t('BDT ') + new Intl.NumberFormat(language === 'en' ? 'en-IN' : 'bn-IN').format((price / 1000)) + t('thousand');
        } else if (lengths > 5 && lengths < 8) {
            return t('BDT ') + new Intl.NumberFormat(language === 'en' ? 'en-IN' : 'bn-IN').format((price / 100000)) + t('lac');
        } else if (lengths > 7) {
            return t('BDT ') + new Intl.NumberFormat(language === 'en' ? 'en-IN' : 'bn-IN').format((price / 10000000)) + t('crore');
        } else {
            return 'Price out of range'; // or any default value or message you prefer
        }
    };

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
            <div className="banner_top_checkbox" style={{ width: "278px" }}>
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
            <DefaultLayout>
                <div className='blog_deatils_area '>
                    <img src={BannerImg} alt="" />
                    <h3> {typs_name ? typs_name.name : ''} Properties for {purpose == 1 ? 'Sale' : 'Rent'} in Bangladesh </h3>
                </div>
                <div className='box_filter_area'>
                    <Container>
                        <div className='box_filter_form'>
                            <Row className="pt-3">
                                <Col sm={12} lg={1} className='filter_box_input'>
                                    <Popover placement="bottomLeft" open={open} onOpenChange={handlePurposeChange} content={purposeContent} trigger="click">
                                        <Button className="input-button">{purpose == 1 ? 'Sale' : 'Rent'}</Button>
                                    </Popover>
                                </Col>
                                <Col sm={12} lg={3} className='filter_box_input'>
                                    <Popover placement="bottom" open={locationData?.length > 0 ? true : false} content={purposeSearchContent} trigger="click">
                                        <Input size="large" className="location-input" placeholder="Location" value={location} onChange={SearchChangeevent} />
                                    </Popover>
                                </Col>
                                <Col sm={12} lg={2} className='filter_box_input'>
                                    <Popover placement="bottom" open={openType} onOpenChange={handleTypeChange} content={typeContent} trigger="click">
                                        <Button className="input-button">
                                            {typs_name ? typs_name.name : 'All Type'}
                                        </Button>
                                    </Popover>
                                </Col>
                                <Col sm={12} lg={2} className='filter_box_input'>
                                    <Popover placement="bottom" open={openBedsBath} onOpenChange={handleBedsBathChange} content={bedsBathContent} trigger="click">
                                        <Button className="input-button">
                                            {beds?.length || bath?.length ?
                                                <>{(beds?.length ? 'Beds:' : '') + beds}
                                                    {beds?.length && bath?.length ? ' / ' : ''}
                                                    {(bath?.length ? 'Baths:' : '') + bath}</> :
                                                <>Beds & Baths</>}
                                        </Button>
                                    </Popover>
                                </Col>
                                <Col sm={12} lg={2} className='filter_box_input'>
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
                                <Col sm={12} lg={1} className='filter_box_input'>
                                    <Popover placement="bottom" open={openArea} onOpenChange={handleAreaChange} content={areaContent} trigger="click">
                                        <button className="from_button" >
                                            More
                                        </button>
                                    </Popover>
                                </Col>
                                <Col sm={12} lg={1}>
                                    <button onClick={clickUrl} className='from_button'> Search </button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <Container>
                    <div className='apartments_deatils_area'>
                        <Row>
                            <Col sm={12} lg={12}>
                                <div className='mt-4 pb-0'>
                                    {(beds?.length ?
                                        <Tag
                                            closable
                                            onClose={(e) => {
                                                e.preventDefault();
                                                handleBedClose();
                                            }}
                                        >
                                            {'Beds: ' + beds}
                                        </Tag>
                                        : '')}
                                    {(bath?.length ?
                                        <Tag
                                            closable
                                            onClose={(e) => {
                                                e.preventDefault();
                                                handleBathsClose();
                                            }}
                                        >
                                            {'Baths: ' + bath}
                                        </Tag>
                                        : '')}
                                    {minprice || maxprice ?
                                        <>
                                            <Tag
                                                closable
                                                onClose={(e) => {
                                                    e.preventDefault();
                                                    handleMinMaxPriceClose();
                                                }}
                                            >
                                                {priceCLC(minprice)}
                                                {minprice && maxprice ? ' - ' : ''}
                                                {priceCLC(maxprice)}
                                            </Tag>
                                        </> :
                                        ''}
                                    {minsqft || maxsqft ?
                                        <Tag
                                            closable
                                            onClose={(e) => {
                                                e.preventDefault();
                                                handleMinMaxSqftClose();
                                            }}
                                        >{minsqft ? (new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(minsqft)) : ''}{minsqft ? ' sqft' : ''}
                                            {minsqft && maxsqft ? ' - ' : ''}
                                            {maxsqft ? (new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format(maxsqft)) : ''}{maxsqft ? ' sqft' : ''}</Tag> :
                                        ''}
                                    {tags.length > 0 ?
                                        <Tag
                                            closable
                                            onClose={(e) => {
                                                e.preventDefault();
                                                handleTagClose();
                                            }}
                                        >{'Tags: ' + tags}</Tag>
                                        : ''}
                                    {selectCity ?
                                        <Tag
                                            closable
                                            onClose={(e) => {
                                                e.preventDefault();
                                                handleCityClose();
                                            }}
                                        >{'City: ' + selectCity?.city}</Tag>
                                        : ''}
                                </div>
                            </Col>
                            <Col sm={9} lg={9}>
                                <div className='apartments_deatils_top'>
                                    <div className='apartments_deatils_top_left'>
                                        <p> Status: </p>
                                        <div className="banner_radi__btn_area">
                                            <Radio.Group value={conststatus > 0 ? (status_name?.id) : conststatus} onChange={filterConststatus}>
                                                <Radio value={'0'}>All</Radio>
                                                {cstatus?.map((status, i) =>
                                                    <Radio key={i} value={status?.id}>{status?.construction_status}</Radio>
                                                )}
                                            </Radio.Group>
                                        </div>
                                    </div>
                                    {/*<div className='apartments_deatils_top_right apartments_deatils_top_right_pdng'>*/}
                                    {/*  <Checkbox>Active listings</Checkbox>*/}
                                    {/*</div>*/}
                                    <div className='apartments_deatils_top_right'>
                                        <Select size={'small'} className='apartments_deatils_top_right_select' defaultValue="Popular" >
                                            <option value="Popular">Popular</option>
                                            <option value="Newest">Newest</option>
                                            <option value="LowestPrice">Lowest Price</option>
                                            <option value="Highest Price">Highest Price</option>
                                        </Select>
                                    </div>
                                    <div className='apartments_for_sale_boxxx'>
                                        {loading ?
                                            <><Spin className="spin-style" tip="Loading..."></Spin></> :
                                            <>
                                                {propertyData?.length > 0 ? <>
                                                    {propertyData?.map((item, i) =>
                                                        <div className="property-box-2 border1px" key={i}>

                                                            <div className="row g-0">
                                                                <div className="col-lg-5 col-md-5">
                                                                    <Link to={`/property-details?purpose=${purpose}&lid=${item?.listing_id}&pid=${item?.property_id}`} className="property-img">
                                                                        <div className="property-photo">
                                                                            {/*<img src={ENVIRONMENT.FILE_URL+'/property/' + item?.property_thumbnail?.url} alt={item?.title} className="img-fluid" />*/}
                                                                            <Carousel
                                                                                dots={false}
                                                                                arrows
                                                                                nextArrow={<RiArrowRightSLine />}
                                                                                prevArrow={<RiArrowLeftSLine />}
                                                                                className="custom-carousel"
                                                                            >
                                                                                <div className="carousel-item">
                                                                                    {item?.other_info?.sticker_id && <>
                                                                                        <div style={{
                                                                                            position: 'absolute',
                                                                                            top: '5px',
                                                                                            right: '0px',
                                                                                            backgroundColor: 'rgb(234 196 0)',
                                                                                            borderBottomLeftRadius: '12px',
                                                                                            borderTopLeftRadius: '12px',
                                                                                            zIndex: '1',
                                                                                            color: `${item?.other_info?.sticker?.color}`,
                                                                                            padding: '5px',
                                                                                            textTransform: 'uppercase',
                                                                                            fontWeight: 'bold',
                                                                                            fontSize: '10px'
                                                                                        }}>
                                                                                            {item?.other_info?.sticker?.type}
                                                                                        </div>
                                                                                    </>}
                                                                                    <img
                                                                                        src={`${ENVIRONMENT.FILE_URL}/property/${item?.property_thumbnail?.url}`}
                                                                                        alt={item.title}
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </Carousel>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-lg-7 col-md-7">
                                                                    <div className="detail">
                                                                        <div className="hdg">
                                                                            <h2>
                                                                                {/*{Currency(item?.price)}*/}
                                                                                {purpose == 1 && priceCLC(item?.price_contact?.offer_price)}
                                                                                {purpose == 2 && priceCLC(item?.price_contact?.monthly_rent)}
                                                                            </h2>
                                                                            <div>
                                                                                <span className='facilities_list_iconnn'> <RiHotelBedFill />&nbsp;{item?.bedroom}</span>
                                                                                <span className='facilities_list_iconnn'> <BiBath />&nbsp;{item?.bathroom} </span>
                                                                                <span className='facilities_list_iconnn'> <BiBorderAll />&nbsp;{item?.square_feet} sqft</span>
                                                                            </div>
                                                                        </div>

                                                                        <div className="facilities-list clearfix">
                                                                            <div className="float-start">
                                                                                {/*<div>*/}
                                                                                {/*  <span>{item?.product_type?.name}</span>*/}
                                                                                {/*  {item?.construction_status?<span>{item?.construction_status?.lead_status}</span>:''}*/}
                                                                                {/*  {item?.purpose == 1?<span>Sales</span>:<span>Rent</span>}*/}
                                                                                {/*</div>*/}
                                                                                <h4 className="title">
                                                                                    <Link to={`/property-details?purpose=${purpose}&lid=${item?.listing_id}&pid=${item?.property_id}`}>{item?.title}</Link>
                                                                                </h4>
                                                                                <h5 className="location">
                                                                                    <Link to={`/property-details?purpose=${purpose}&lid=${item?.listing_id}&pid=${item?.property_id}`}>
                                                                                        {item?.location ? (item?.location?.location) + ',' : ''} {item ? (item.areas ? (item.areas.area_name) + ',' : '') : ''} {item ? (item.cities ? (item.cities.city) : '') : ''}</Link>
                                                                                </h5>
                                                                                <div className="managed-by">
                                                                                    <p>Managed By</p>
                                                                                    {item?.ownership && item?.ownership == '1' && <img className='own' src={Logo} />}
                                                                                    {item?.ownership && item?.ownership != '1' && <img className='other' src={ENVIRONMENT.FILE_URL + 'property/' + item?.ownership_logo} />}
                                                                                    {!item?.ownership && <img className='own' src={Logo} />}
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                        <div className="footer">
                                                                            <CallButton property_id={item?.listing_id ? (item?.listing_id) : item?.property_id} />
                                                                            <SaleContactForm id={item?.id} property_id={item?.listing_id ? (item?.listing_id) : item?.property_id} />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className='mt-3'>
                                                        <Pagination
                                                            onChange={onShowSizeChange}
                                                            defaultCurrent={1}
                                                            pageSize={15}
                                                            total={totalProperty}
                                                        />
                                                    </div>
                                                </> : <>
                                                    <img className="w-100" src={notFound} alt={'Not Found...'} />
                                                </>}
                                            </>}
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} lg={3}>
                                <div className='search_header_apartments'>
                                    <h2>Property For Rent <RiArrowDropRightLine />  </h2>
                                    <img src={adds} alt={'Apartments for Sale'} className='w-100 mb-4' />
                                    <img src={adds1} alt={'Apartments for Sale'} className='w-100 mb-3' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </DefaultLayout>
        </div>
    )
}

export default ApartmentsForSale
