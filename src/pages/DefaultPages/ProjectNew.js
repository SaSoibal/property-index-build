import React, { useContext, useEffect, useState } from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import BannerImg from "../../asstes/images/details01.jpg"
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Form, Input, InputNumber, Pagination, Select, Skeleton, Space, Spin } from 'antd';
import ArImg from "../../asstes/images/aR01.png"
import { Link } from 'react-router-dom';
import { cityAction } from "./redux/city-list/cityList.actions";
import { useDispatch, useSelector } from "react-redux";
import { ptypeCstatusAction } from "./redux/ptype-cstatus/ptypeCstatus.actions";
import { landSalesAction } from "./redux/land-sales/landSales.actions";
import { ENVIRONMENT } from "../../config/environment/environment";
import { t } from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import notFound from "../../asstes/images/no-data-found.png";
import { propertyAction } from "./redux/property/property.actions";

function ProjectNew() {
    const { language } = useContext(LanguageContext);
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [maxprice, setMaxPrice] = useState('');
    const [minprice, setMinPrice] = useState('');
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(cityAction(''));
        dispatch(ptypeCstatusAction());
        dispatch(landSalesAction(city, propertyType, maxprice, minprice, currentPage));
    }, [currentPage]);
    const cityList = useSelector(
        (state) => state.cityListState
    );
    const typeStatus = useSelector(
        (state) => state.ptypeCstatusState
    );
    const landSale = useSelector(
        (state) => state.landSaleState
    );
    const cityData = cityList?.cityData?.data?.city;
    const ptype = typeStatus?.ptypecstatusData?.data?.type;
    const landsale = landSale?.landSalesData?.data?.website;
    const totalProperty = landSale?.landSalesData?.data?.website?.total;
    const loading = landSale?.loading;
    const onShowSizeChange = (current, pageSize) => {
        setCurrentPage(current);
    }
    const cityChange = (e) => {
        setCity(e)
    }
    const ptypeChange = (e) => {
        setPropertyType(e)
    }
    const maxPriceChange = (e) => {
        setMaxPrice(e.target.value)
    }
    const minPriceChange = (e) => {
        setMinPrice(e.target.value)
    }
    const skeleton = [];
    for (let i = 0; i < 6; i++) {
        skeleton.push(<div className="col-sm-4 col-lg-4" key={i}>
            <div className="popular-places">
                <div className="popular-places-inner">
                    <div className="popular-places-overflow">
                        <div className="popular-places-photo">
                            <div className="product-spin mb-3"> <Spin size="small" tip="Loading..." /></div>
                        </div>
                        <div className="info n_p_price_info">
                            <Skeleton />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
    const priceCLC = (price) => {
        const lengths = price?.toString()?.length;
        if (lengths > 1 && lengths < 4) {
            return t('BDT') + new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format((price / 100)) + t('hundred');
        } else if (lengths > 3 && lengths < 6) {
            return t('BDT') + new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format((price / 1000)) + t('thousand');
        } else if (lengths > 5 && lengths < 8) {
            return t('BDT') + new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format((price / 100000)) + t('lac');
        } else if (lengths > 7) {
            return t('BDT') + new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format((price / 10000000)) + t('crore');
        }
    }
    const onClick = () => {
        dispatch(landSalesAction(city, propertyType, maxprice, minprice));
    };
    const onClickReset = () => {
        setCity('');
        setPropertyType('')
        setMinPrice('')
        setMaxPrice('')
        dispatch(landSalesAction(city, propertyType, maxprice, minprice));
    };

    return (
        <div>
            <DefaultLayout>
                <div className='blog_deatils_area'>
                    <img src={BannerImg} alt="" />
                    <h3> Discover Bangladesh! </h3>
                </div>
                <div className='new-project-filter'>
                    <Container>
                        <Row className="project_filter_form">
                            <Col sm={3} lg={3} className='pb-3'>
                                <Select name="propertyprice" value={city ? city : null} onChange={cityChange} options={cityData?.map((ct) => ({ label: ct?.city, value: ct?.id }))} style={{ width: '100%' }} placeholder="Select City" />
                            </Col>
                            <Col sm={3} lg={3} className='pb-3'>
                                <Select name="product_type" value={propertyType ? propertyType : null} onChange={ptypeChange} options={ptype?.map((pt) => ({ label: pt?.name, value: pt?.id }))} style={{ width: '100%' }} placeholder="Property Type" />
                            </Col>
                            <Col sm={3} lg={3} className='pb-3'>
                                <Input type='number' name="min_price" value={minprice} onChange={minPriceChange} className="price-input-max" placeholder="Min Price" minLength={1} maxLength={11} />
                                <Input type='number' name="max_price" value={maxprice} onChange={maxPriceChange} className="price-input-min" placeholder="Max Price" minLength={1} maxLength={11} />
                            </Col>
                            <Col sm={3} lg={3} className='text-center'>
                                <Space wrap>
                                    <Button type="submit" onClick={onClick} block className='project_filter_btn btn-block'> Search</Button>
                                    <Button block onClick={onClickReset} className='project_filter_btn btn-block'> Reset </Button>
                                </Space>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container>
                    <div className='new-project-filter-content'>
                        <div className="row">
                            {loading ?
                                <>
                                    {skeleton}
                                </> : <>
                                    {landsale?.data?.length > 0 ? <>
                                        {landsale?.data?.map((item, i) =>
                                            <div className="col-sm-4 col-lg-4" key={i}>
                                                <div className="popular-places">
                                                    <div className="popular-places-inner">
                                                        <div className="popular-places-overflow">
                                                            <div className="popular-places-photo">
                                                                <img src={ENVIRONMENT.FILE_URL + '/property/' + item?.property_thumbnail?.url} className="img-fluid w-100" alt="properties" />
                                                            </div>
                                                            <div className="info n_p_price_info">
                                                                <h3>
                                                                    <Link to={`/projects-details?lpid=${item?.listing_id ? (item?.listing_id) : item?.property_id}`}> {item?.title} </Link>
                                                                </h3>
                                                                <h5> {item?.location ? (item?.location?.location) + ',' : ''} {item ? (item.areas ? (item.areas.area_name) + ',' : '') : ''} {item ? (item.cities ? (item.cities.city) : '') : ''}</h5>
                                                                <span className='n_p_price'> {priceCLC(item?.price_contact?.offer_price)} to  {priceCLC(item?.price_contact?.bottom_price)} </span>
                                                            </div>
                                                            {/*<div className="new">New</div>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </> : <>
                                        <img className="w-100" src={notFound} alt={'Not Found...'} />
                                    </>}
                                </>}

                            <div className='mt-3'>
                                <Pagination
                                    onChange={onShowSizeChange}
                                    defaultCurrent={1}
                                    pageSize={15}
                                    total={totalProperty}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </DefaultLayout>
        </div>
    )
}

export default ProjectNew
