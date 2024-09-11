import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Card, Carousel, Skeleton, Spin } from "antd";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine, RiHotelBedFill } from "react-icons/ri";
import { BiBath, BiBorderAll } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { latestPropertyAction } from "../../pages/DefaultPages/redux/latest-property/latestProperty.actions";
import { ENVIRONMENT } from "../../config/environment/environment";
import { t } from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import Currency from "../../Helper/Currency";
function LatestProperties() {
    const [activeTab, setTab] = useState(1);
    const { language } = useContext(LanguageContext);
    const clickTab = (key) => {
        setTab(key);
    }
    let count = 0;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(latestPropertyAction(activeTab));
        count = count + 1;
    }, [count, activeTab]);

    const property = useSelector(
        (state) => state.latestPropertyState
    );
    const propertyData = property?.LatestPropertyData?.data?.website;
    console.log(propertyData, 'propertyData')
    const loading = property?.loading;
    const priceCLC = (price) => {
        if (price === undefined || price === null) {
            return 'Invalid price'; // or any default value or message you prefer
        }

        const lengths = price.toString().length;
        const language = 'en'; // Assuming a default language for demonstration. You should replace this with your actual language logic.

        if (lengths > 1 && lengths < 4) {
            return t('BDT') + new Intl.NumberFormat(language === 'en' ? 'en-IN' : 'bn-IN').format((price / 100)) + t('hundred');
        } else if (lengths > 3 && lengths < 6) {
            return t('BDT') + new Intl.NumberFormat(language === 'en' ? 'en-IN' : 'bn-IN').format((price / 1000)) + t('thousand');
        } else if (lengths > 5 && lengths < 8) {
            return t('BDT') + new Intl.NumberFormat(language === 'en' ? 'en-IN' : 'bn-IN').format((price / 100000)) + t('lac');
        } else if (lengths > 7) {
            return t('BDT') + new Intl.NumberFormat(language === 'en' ? 'en-IN' : 'bn-IN').format((price / 10000000)) + t('crore');
        } else {
            return 'Price out of range'; // or any default value or message you prefer
        }
    };

    const skeleton = [];
    for (let i = 0; i < 8; i++) {
        skeleton.push(<Col sm={6} lg={3} className="mb-4" key={i}>
            <div className="latest-product  mb-3"> <Spin size="small" tip="Loading..." /></div>
            <Skeleton />
        </Col>)
    }
    return (
        <div className='latest-property mt-5'>
            <Container>
                <div className='title_area'>
                    <div className="row">
                        <div className="col-md-8 title-center">
                            <h3>{t('latest-property')}</h3>
                            {/*<p className='title__p'> Aliquam lacinia diam quis lacus euismod </p>*/}
                        </div>
                        <div className="col-md-4">
                            <div className="latest-property-btn">
                                <button style={{ 'cursor': 'pointer' }} onClick={() => clickTab(1)} className={activeTab == 1 ? 'active' : ''}> Sale </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button style={{ 'cursor': 'pointer' }} onClick={() => clickTab(2)} className={activeTab == 2 ? 'active' : ''}> Rent </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Row>
                    {loading ?
                        <>
                            {skeleton}
                        </> : <>
                            {propertyData?.map((item, i) =>
                                <Col sm={6} lg={3} key={i}>
                                    <Card className="latest-property-card">
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

                                        <div className="card-image">
                                            {/*<img src={ENVIRONMENT.FILE_URL+'/property/' + item?.property_thumbnail?.url} alt={item?.title} className="img-fluid" />*/}

                                            <Carousel
                                                dots={false}
                                                arrows
                                                nextArrow={<RiArrowRightSLine />}
                                                prevArrow={<RiArrowLeftSLine />}
                                                className="custom-carousel"
                                            >
                                                <div className="carousel-item">
                                                    <img
                                                        src={`${ENVIRONMENT.FILE_URL}/property/${item.property_thumbnail.url}`}
                                                        alt={item.title}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </Carousel>

                                            {/*<Carousel dots={false} arrows nextArrow={<RiArrowRightSLine />} prevArrow={<RiArrowLeftSLine />}>*/}
                                            {/*    <div className="overlay"></div>*/}
                                            {/*    <div key={1}>*/}
                                            {/*        <img src={ENVIRONMENT.FILE_URL+'/property/' + item?.property_thumbnail?.url} alt={item?.title} className="img-fluid" />*/}
                                            {/*    </div>*/}
                                            {/*</Carousel>*/}

                                            {/*<Carousel dots={false} arrows nextArrow={<RiArrowRightSLine />} prevArrow={<RiArrowLeftSLine />}>*/}
                                            {/*    {item?.property_thumbnail?.map((image, j) =>*/}
                                            {/*        <div key={j}>*/}
                                            {/*            <img src={ENVIRONMENT.FILE_URL+'/property/' + item?.property_thumbnail?.url} alt={item?.title} className="img-fluid" />*/}
                                            {/*        </div>*/}
                                            {/*    )}*/}
                                            {/*</Carousel>*/}
                                        </div>
                                        <div className="card-content">
                                            <h5 className="latest-property-price">
                                                {/*{Currency(item?.price)}*/}
                                                {priceCLC(item?.price_contact?.offer_price)}
                                            </h5>
                                            <Link to={`/property-details?purpose=${activeTab}&lid=${item?.listing_id}&pid=${item?.property_id}`}>
                                                <h5 className="latest-property-title">
                                                    {item?.title}
                                                </h5>
                                            </Link>
                                            <div className="location">
                                                <Link to={`/property-details?purpose=${activeTab}&pid=${item?.listing_id ? (item?.listing_id) : item?.property_id}`}>
                                                    {item?.location ? (item?.location?.location) + ',' : ''} {item ? (item.areas ? (item.areas.area_name) + ',' : '') : ''} {item ? (item.cities ? (item.cities.city) : '') : ''}</Link>
                                            </div>
                                            <div className="latest-information">
                                                <span><RiHotelBedFill /> {item?.bedroom} Beds</span>
                                                <span><BiBath /> {item?.bathroom} Baths</span>
                                                <span><BiBorderAll /> {item?.square_feet} sqft</span>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            )}

                        </>}
                </Row>
            </Container>
        </div>
    )
}
export default LatestProperties
