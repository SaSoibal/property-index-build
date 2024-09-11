import React, { useContext, useEffect, useState } from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import {
    RiHotelBedFill,
    RiPhoneFill,
    RiHeartFill,
    RiReplyFill,
    RiArrowRightSLine,
    RiArrowLeftSLine,
    RiMapPinLine,
    RiPlayFill,
    RiBuilding2Fill,
    RiCarFill,
    RiBarChartBoxLine,
    RiBankLine,
    RiHospitalLine,
    RiShoppingBag2Line,
    RiBusLine,
    RiFlightTakeoffFill,
    RiAncientPavilionLine,
    RiPassportLine,
    RiSteeringFill,
    RiLightbulbFlashLine,
    RiDeleteBin5Line,
    RiPlaystationFill,
    RiNpmjsLine,
    RiParentLine,
    RiDoorOpenFill,
    RiFridgeLine,
    RiGasStationFill,
    RiPlug2Fill,
    RiRainbowFill,
    RiAccountBoxLine,
    RiStoreFill,
    RiTeamLine,
    RiBroadcastFill,
    RiLuggageCartLine,
    RiRadarLine,
    RiMicFill,
    RiMoneyDollarBoxLine,
    RiScan2Line,
    RiBriefcase2Fill,
    RiBikeFill,
    RiPlantFill,
    RiMistFill,
    RiEarthquakeFill,
    RiCheckboxBlankLine,
    RiRobotLine,
    RiBasketballFill,
    RiBearSmileLine,
    RiStarSmileFill,
    RiNurseFill,
    RiShirtLine,
    RiKnifeLine,
    RiBodyScanFill,
    RiAppsLine,
    RiTableAltLine,
    RiFireLine,
    RiVidicon2Line,
    RiGuideFill,
    RiSuitcase2Line, RiNewspaperLine, RiNotification3Fill, RiUser3Line
} from "react-icons/ri";
import { BiBath, BiBorderAll } from "react-icons/bi";
import { Carousel, Form, Input, Modal, Skeleton, Spin, Image, Button, Card } from 'antd';
import { Row, Col } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts'
import Logo from "../../asstes/images/logo2.png"
import adds from "../../asstes/images/add.jpg";
import BannerImg from "../../asstes/images/details01.jpg"
import Calculator from "../../components/HomeComponents/LoanCalculation/Calculator.js"
import { VscBrowser, VscPlayCircle } from "react-icons/vsc";
import ReactPlayer from "react-player";
import LanguageContext from "../../context/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { propertyDetailsAction } from "./redux/property-details/propertyDetails.actions";
import { ENVIRONMENT } from "../../config/environment/environment";
import { t } from "i18next";
import Moment from 'moment';
import SaleContactForm from "../../components/ApartmentSaleContact/saleContactForm";
import CallButton from "../../components/ApartmentSaleContact/callButton";
import Currency from "../../Helper/Currency";

function ApartmentsForSaleDetails() {
    const params = new URLSearchParams(window.location.search);

    const [visible, setVisible] = useState(false);
    const [modelFeatures, setmodelFeatures] = useState(false);
    const [modelCatagori, setModelCatagori] = useState([]);
    const [viewPlay, setPlayVideo] = useState('');


    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // for smooth scrolling
        });
    };

    const modelFeaturesFunction = () => {
        setmodelFeatures(true)
    }
    const modelViseFunction = (name) => {
        setModelCatagori(name)
        setVisible(true)
    }
    const { language } = useContext(LanguageContext);
    const [count, setCount] = useState(0);
    const details = useSelector(
        (state) => state.propertyDetailsState
    );
    console.log(details, 'pdetails')
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('use effect call');
        console.log(count, 'count');
        if (count == 0) {
            setTimeout(() => {
                dispatch(propertyDetailsAction(params.get('purpose'), params.get('lid'), params.get('pid')));
                setCount(prevCount => prevCount + 1);
            }, 500);

            handleScrollToTop();
        }
    }, [count, language]);
    const pdetails = details?.propertyDetailsData?.list;
    const relatedProperties = details?.propertyDetailsData?.related_property;
    const all_feature = details?.propertyDetailsData?.list?.website_feature;
    let datas = [];

    function getObjectKey(obj, value) {
        if (obj) {
            datas.push(Object.keys(obj).filter((key) => obj[key] === value && key !== 'id' && key !== 'property_id'));
        }
    }

    getObjectKey(all_feature, 1);
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

    function iconPack(itype) {
        if (itype == 'belcony_or_terrace') {
            return <><RiBarChartBoxLine /><p> Belcony or terrace </p></>;
        } else if (itype == 'lobby_in_building') {
            return <><RiAncientPavilionLine /><p>Lobby in building</p></>;
        } else if (itype == 'double_giazed_windows') {
            return <><RiDoorOpenFill /><p> Double giazed windows </p></>;
        } else if (itype == 'central_air_con') {
            return <><RiPassportLine /><p> Central air-con </p></>;
        } else if (itype == 'central_heating') {
            return <><RiSteeringFill /><p> Central heating </p></>;
        } else if (itype == 'electricity_backup') {
            return <><RiLightbulbFlashLine /><p> Electricity backup </p></>;
        } else if (itype == 'waste_disposal') {
            return <><RiDeleteBin5Line /><p> Waste disposal </p></>;
        } else if (itype == 'elevator_in_building') {
            return <><RiNpmjsLine /><p> Elevator in building </p></>;
        } else if (itype == 'service_elevator') {
            return <><RiPlaystationFill /><p> Service elevator </p></>;
        } else if (itype == 'tenant') {
            return <><RiParentLine /><p> Tenant </p></>;
        } else if (itype == 'furnished') {
            return <><RiBarChartBoxLine /><p> Furnished </p></>;
        } else if (itype == 'twenty_four_hour_concierge') {
            return <><RiFridgeLine /><p> 24 concierge </p></>;
        } else if (itype == 'gas') {
            return <><RiGasStationFill /><p> Gas </p></>;
        } else if (itype == 'electricity') {
            return <><RiPlug2Fill /><p> Electricity </p></>;
        } else if (itype == 'prayer_room') {
            return <><RiRainbowFill /><p> Prayer room </p></>;
        } else if (itype == 'waiting_area') {
            return <><RiAccountBoxLine /><p> Waiting area </p></>;
        } else if (itype == 'storage_area') {
            return <><RiStoreFill /><p> Storage area </p></>;
        } else if (itype == 'community_space') {
            return <><RiTeamLine /><p> Community space </p></>;
        } else if (itype == 'broadband_internet') {
            return <><RiBroadcastFill /><p> Broadband_internet </p></>;
        } else if (itype == 'satellite') {
            return <><RiRadarLine /><p> Satellite </p></>;
        } else if (itype == 'business_center') {
            return <><RiLuggageCartLine /><p> Business center </p></>;
        } else if (itype == 'conference_room') {
            return <><RiMicFill /><p> Conference room </p></>;
        } else if (itype == 'intercom') {
            return <><RiPhoneFill /><p> Intercom </p></>;
        } else if (itype == 'atm_facility') {
            return <><RiMoneyDollarBoxLine /><p> ATM Facility </p></>;
        } else if (itype == 'barbeque_area') {
            return <><RiScan2Line /><p> Barbeque area </p></>;
        } else if (itype == 'day_care_center') {
            return <><RiBriefcase2Fill /><p> Day care center </p></>;
        } else if (itype == 'first_aid_medical_center') {
            return <><RiHospitalLine /><p> Medical center </p></>;
        } else if (itype == 'gym') {
            return <><RiBikeFill /><p> Gym </p></>;
        } else if (itype == 'garden') {
            return <><RiPlantFill /><p> Garden </p></>;
        } else if (itype == 'swimming_pool') {
            return <><RiMistFill /><p> Swimming pool </p></>;
        } else if (itype == 'steam_room') {
            return <><RiEarthquakeFill /><p> Steam room </p></>;
        } else if (itype == 'sauna') {
            return <><RiRobotLine /><p> Sauna </p></>;
        } else if (itype == 'jacuzzi') {
            return <><RiCheckboxBlankLine /><p> Jacuzzi </p></>;
        } else if (itype == 'sports_area') {
            return <><RiBasketballFill /><p> Sports area </p></>;
        } else if (itype == 'pet_policy') {
            return <><RiBearSmileLine /><p> Pet policy </p></>;
        } else if (itype == 'maintenance_staff') {
            return <><RiNurseFill /><p> Maintenance staff </p></>;
        } else if (itype == 'canteen') {
            return <><RiStarSmileFill /><p> Canteen </p></>;
        } else if (itype == 'laundry') {
            return <><RiShirtLine /><p> Laundry </p></>;
        } else if (itype == 'shared_kitchen') {
            return <><RiKnifeLine /><p> Shared kitchen </p></>;
        } else if (itype == 'facilities_for_disabled') {
            return <><RiAppsLine /><p> Facilities for disabled </p></>;
        } else if (itype == 'cleaning_services') {
            return <><RiBodyScanFill /><p> Cleaning services </p></>;
        } else if (itype == 'change_interior') {
            return <><RiTableAltLine /><p> Change interior </p></>;
        } else if (itype == 'cctv_security') {
            return <><RiVidicon2Line /><p> Cctv Security </p></>;
        } else if (itype == 'fire_exit') {
            return <><RiFireLine /><p> Fire exit </p></>;
        } else if (itype == 'fire_extinguisher') {
            return <><RiBarChartBoxLine /><p> Fire extinguisher </p></>;
        } else if (itype == 'fire_hose') {
            return <><RiGuideFill /><p> Fire hose </p></>;
        } else if (itype == 'sprinkler') {
            return <><RiSuitcase2Line /><p> Sprinkler </p></>;
        } else if (itype == 'guard') {
            return <><RiUser3Line /><p> Guard </p></>;
        } else if (itype == 'visitor_log') {
            return <><RiNewspaperLine /><p> Visitor log </p></>;
        } else if (itype == 'fire_alarm') {
            return <><RiNotification3Fill /><p> Fire alarm </p></>;
        }
    }

    // most search location oprtion
    const option = {
        series: [{
            name: 'Search',
            data: pdetails?.most_search_location_count
        }],
        options: {
            fill: {
                colors: ['#fda94f', '#E91E63', '#9C27B0']
            },
            chart: {
                type: 'bar',
                height: 350
            },
            title: {
                text: `Most Searched in ${pdetails?.areas?.area_name}`
            },
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: pdetails?.most_search_location,
            }
        },
    }

    return (
        <div>
            <DefaultLayout>
                <div className='blog_deatils_area '>
                    <img src={BannerImg} alt="" />
                </div>

                <div className='box__area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 col-lg-12'>
                                <div className='details_barcum'>
                                    <p>
                                        <span>  <Link
                                            to={`/property-details?purpose=${params.get('purpose')}&lid=${params.get('lid')}&pid=${params.get('pid')}`}>Property Index<RiArrowRightSLine /></Link></span>
                                        {pdetails ? <>
                                            <span> <Link
                                                to={`/property-details?purpose=${params.get('purpose')}&lid=${params.get('lid')}&pid=${params.get('pid')}`}>Property for {pdetails?.purpose == 1 ? 'Sale' : 'Rent'} in {pdetails?.cities?.city}<RiArrowRightSLine /></Link></span>
                                            <span> <Link
                                                to={`/property-details?purpose=${params.get('purpose')}&lid=${params.get('lid')}&pid=${params.get('pid')}`}> {pdetails?.location?.location}<RiArrowRightSLine /> </Link>  </span>
                                            <span> <Link
                                                to={`/property-details?purpose=${params.get('purpose')}&lid=${params.get('lid')}&pid=${params.get('pid')}`}>  Block {pdetails?.block}
                                                <RiArrowRightSLine /> </Link>   </span>
                                            <span>
                                                <Link to={`/property-details?purpose=${params.get('purpose')}&lid=${params.get('lid')}&pid=${params.get('pid')}`}>  Listing ID - {pdetails?.listing_id}
                                                    <RiArrowRightSLine />
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={`/property-details?purpose=${params.get('purpose')}&lid=${params.get('lid')}&pid=${params.get('pid')}`}>  Property ID - {pdetails?.property_id}
                                                </Link>
                                            </span>
                                        </> :
                                            <>
                                                <span> <Link
                                                    to={`/property-details?purpose=${params.get('purpose')}&lid=${params.get('lid')}&pid=${params.get('pid')}`}><Spin
                                                        size="small" /></Link></span>
                                            </>
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className='col-sm-12 col-lg-8'>
                                <div className='full_slider_area'>
                                    {pdetails?.imagevideo?.length > 0 ?
                                        <>
                                            {pdetails?.other_info?.sticker_id && <>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '8px',
                                                    right: '0px',
                                                    backgroundColor: 'rgb(234 196 0)',
                                                    borderBottomLeftRadius: '12px',
                                                    borderTopLeftRadius: '12px',
                                                    zIndex: '1',
                                                    color: `${pdetails?.other_info?.sticker?.color}`,
                                                    padding: '5px',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 'bold',
                                                    fontSize: '10px'
                                                }}>
                                                    {pdetails?.other_info?.sticker?.type}
                                                </div>
                                            </>}
                                            <Carousel dots={false} dotPosition={'top'} arrows
                                                nextArrow={<RiArrowRightSLine />} prevArrow={<RiArrowLeftSLine />}>
                                                {pdetails?.imagevideo?.map((image, j) =>
                                                    <div key={j}>
                                                        <img src={ENVIRONMENT.FILE_URL + '/property/' + image?.url}
                                                            alt={pdetails?.title}
                                                            className="details-slide-img img-fluid" />
                                                    </div>
                                                )}
                                            </Carousel>
                                            <div className='slider___bootom_model_area'>
                                                {pdetails?.imagevideo?.length > 0 ?
                                                    <button onClick={() => modelViseFunction("floorplans")}><VscBrowser
                                                        className='mr-1' />Floor Plans</button>
                                                    : ''}
                                                {pdetails?.property_video?.length > 0 ?
                                                    <button onClick={() => modelViseFunction("seevideo")}><VscPlayCircle
                                                        className='mr-1' />See Video</button>
                                                    : ''}
                                                {pdetails?.latitude && pdetails?.longitude ?
                                                    <button onClick={() => modelViseFunction("map")}><RiMapPinLine
                                                        className='mr-1' />Banner</button>
                                                    : ''}
                                            </div>
                                        </> : <>
                                            <div className="sipn-div-st"><Spin size="small" tip="Loading..." /></div>
                                        </>}

                                    {modelCatagori === "floorplans" ? <>
                                        <Modal
                                            title="Floor Plans"
                                            centered
                                            className='slider___m_class'
                                            open={visible}
                                            onOk={() => setVisible(false)}
                                            onCancel={() => setVisible(false)}
                                            width={1000}
                                        >
                                            <div className='floor_loanModel'>
                                                {pdetails?.imagevideo?.length > 0 ?
                                                    <Row>
                                                        {pdetails?.floorplan?.map((plan, j) =>
                                                            <div className='col-sm-12 col-lg-3 mt-2 mb-2'>
                                                                <Image
                                                                    className='floor_map_img'
                                                                    src={ENVIRONMENT.FILE_URL + '/property/' + plan?.url}
                                                                    alt={pdetails?.title}
                                                                />
                                                            </div>
                                                        )}
                                                    </Row> : <>
                                                        <div className="sipn-div-st"><Spin size="small"
                                                            tip="Loading..." /></div>
                                                    </>}
                                            </div>
                                        </Modal>
                                    </> : null}
                                    {modelCatagori === "seevideo" ? <>
                                        <Modal
                                            title="See Video"
                                            centered
                                            className='slider___m_class'
                                            open={visible}
                                            onOk={() => setVisible(false)}
                                            onCancel={() => setVisible(false)}
                                            width={'85%'}
                                        >
                                            <div className='floor_loanModel'>
                                                <div className='floor_loanModel'>
                                                    <Row>
                                                        <Col lg={9}>
                                                            <ReactPlayer
                                                                width="95%"
                                                                height="450px"
                                                                controls={true}
                                                                playing={true}
                                                                url={viewPlay ? viewPlay : pdetails?.property_video?.[0]?.url}
                                                                config={{ file: { attributes: { controlsList: "nodownload" } } }}
                                                            />
                                                        </Col>
                                                        <Col lg={3}>
                                                            {pdetails?.property_video?.map((video, n) =>
                                                                <div className="video-card" key={n}>
                                                                    <ReactPlayer
                                                                        width="100%"
                                                                        height="100%"
                                                                        controls={false}
                                                                        url={video?.url}
                                                                        config={{
                                                                            file: {
                                                                                attributes: {
                                                                                    playing: "false",
                                                                                    controlsList: "nodownload"
                                                                                }
                                                                            }
                                                                        }}
                                                                    />
                                                                    <Button className="btn btn-block"
                                                                        onClick={event => setPlayVideo(video?.url)}><RiPlayFill /></Button>
                                                                </div>
                                                            )}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Modal>
                                    </> : null}
                                    {modelCatagori === "map" ? <>
                                        <Modal
                                            title="Banner"
                                            centered
                                            className='slider___m_class'
                                            open={visible}
                                            onOk={() => setVisible(false)}
                                            onCancel={() => setVisible(false)}
                                            width={1000}
                                        >
                                            <div className='map'>
                                                <Row>
                                                    <Col lg={12}>
                                                        <Iframe
                                                            src={`https://maps.google.com/maps?q=${pdetails?.latitude}, ${pdetails?.longitude}&z=15&output=embed`}
                                                            width="100%" height="500" frameborder="0"
                                                            style="border:0"></Iframe>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Modal>
                                    </> : null}


                                </div>
                                <div className='propity__details__area'>
                                    {pdetails ? <>
                                        <div className='propity__details__headline'>
                                            <h3>
                                                {/*{Currency(pdetails?pdetails?.price:0)}*/}
                                                {priceCLC(pdetails ? pdetails?.price_contact?.offer_price : 0)}
                                            </h3>
                                            <button><RiReplyFill /> Share</button>
                                            <button><RiHeartFill /> Save</button>
                                        </div>
                                        <h4>{pdetails?.location ? (pdetails?.location?.location) + ',' : ''} {pdetails ? (pdetails.areas ? pdetails.areas.area_name + ',' : '') : ''} {pdetails ? (pdetails.cities ? pdetails.cities.city : '') : ''}  </h4>
                                        <div className='propity__details_facilities_list'>
                                            <div className='propity__details_facilities_list_item'>
                                                <RiHotelBedFill />
                                                <div>
                                                    <p>Beds</p>
                                                    <span>{pdetails?.bedroom}</span>
                                                </div>
                                            </div>
                                            <div className='propity__details_facilities_list_item'>
                                                <BiBath />
                                                <div>
                                                    <p>Baths</p>
                                                    <span>{pdetails?.bathroom} </span>
                                                </div>
                                            </div>
                                            <div className='propity__details_facilities_list_item'>
                                                <RiBuilding2Fill />
                                                <div>
                                                    <p>Balcony</p>
                                                    <span>{pdetails?.balcony} </span>
                                                </div>
                                            </div>
                                            <div className='propity__details_facilities_list_item'>
                                                <RiCarFill />
                                                <div>
                                                    <p>Parking</p>
                                                    <span>{pdetails?.parking == 1 ? 'Yes' : 'No'} </span>
                                                </div>
                                            </div>
                                            <div className='propity__details_facilities_list_item'>
                                                <BiBorderAll />
                                                <div>
                                                    <p>Square feet</p>
                                                    <span>{pdetails?.square_feet} sqft</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="mb-3"><strong>{pdetails?.title ? pdetails.title : ''}</strong>
                                        </h3>
                                        <p>{language == 'en' ? (pdetails?.description) : (pdetails?.description_bangla)}</p>
                                        <div className='editor_others_html'
                                            dangerouslySetInnerHTML={{ __html: pdetails?.other_info?.others_info }}></div>
                                    </> : <>
                                        <Skeleton className="mb-3" />
                                        <Skeleton />
                                    </>}
                                </div>

                                <div className='propity__details_property_information'>
                                    {pdetails ? <>
                                        <h3> Property Information </h3>
                                        <div className='row'>
                                            <div className='col-sm-12 col-lg-6'>
                                                <p className="information"><span> Product Type</span>
                                                    <span> {pdetails?.product_type?.name} </span></p>
                                                <p className="information"><span> Purpose </span>
                                                    <span> {params.get('purpose') == 1 ? 'Sale' : 'Rent'} </span></p>
                                                <p className="information"><span> Reference no. </span> <span> Index ID - {pdetails?.listing_id ? (pdetails?.listing_id) : pdetails?.property_id} </span>
                                                </p>
                                            </div>
                                            <div className='col-sm-12 col-lg-6'>
                                                <p className="information"><span> Completion </span>
                                                    <span> {pdetails?.construction_status?.lead_status} </span></p>
                                                <p className="information"><span> Last Updated </span>
                                                    <span> {pdetails?.updated_by ? (Moment(pdetails?.updated_at).format('d - MMM - YYYY')) : ''} </span>
                                                </p>
                                            </div>
                                        </div>
                                    </> : <>
                                        <Skeleton />
                                    </>}
                                </div>

                                <div className='propity__details_property_information'>
                                    {pdetails ? <>
                                        <h3> Features / Amenities </h3>
                                        <div className='row'>
                                            <div className='col-sm-6 col-lg-2'>
                                                <div className='features_amenities_area'>
                                                    {datas?.length > 0 && iconPack(datas[0][0])}
                                                </div>
                                            </div>
                                            <div className='col-sm-6 col-lg-2'>
                                                <div className='features_amenities_area'>
                                                    {datas?.length > 0 && iconPack(datas[0][1])}
                                                </div>
                                            </div>
                                            <div className='col-sm-6 col-lg-2'>
                                                <div className='features_amenities_area'>
                                                    {datas?.length > 0 && iconPack(datas[0][2])}
                                                </div>
                                            </div>
                                            <div className='col-sm-6 col-lg-2'>
                                                <div className='features_amenities_area'>
                                                    {datas?.length > 0 && iconPack(datas[0][3])}
                                                </div>
                                            </div>
                                            <div className='col-sm-6 col-lg-2'>
                                                <div className='features_amenities_area'>
                                                    {datas?.length > 0 && iconPack(datas[0][4])}
                                                </div>
                                            </div>
                                            <div className='col-sm-6 col-lg-2'>
                                                <div onClick={() => modelFeaturesFunction()}
                                                    className='features_amenities_area features_amenities_area_last'>
                                                    <strong> + More <br></br>Amenities </strong>
                                                </div>

                                                <Modal
                                                    title="Amenities"
                                                    centered
                                                    className='amenities___m_class'
                                                    open={modelFeatures}
                                                    onOk={() => setmodelFeatures(false)}
                                                    onCancel={() => setmodelFeatures(false)}
                                                    width={800}
                                                    footer={null}
                                                >
                                                    <div className='map'>
                                                        <div className='row mb-4'>
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][0])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][1])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][2])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][3])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][4])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][5])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][6])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][7])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][8])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][9])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][10])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][11])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][12])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][13])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][14])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][15])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][16])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][17])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][18])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][19])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][20])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][21])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][22])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][23])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][24])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][25])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][26])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][27])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][28])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][29])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][30])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][31])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][32])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][33])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][34])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][35])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][36])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][37])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][38])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][39])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][40])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][41])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][42])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][43])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][44])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][45])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][46])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][47])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][48])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                            {datas?.length > 0 ? <>
                                                                <div className='col-sm-6 col-lg-3 mb-4'>
                                                                    <div className='features_amenities_area'>
                                                                        {datas?.length > 0 && iconPack(datas[0][49])}
                                                                    </div>
                                                                </div>
                                                            </> : ''}
                                                        </div>
                                                    </div>
                                                </Modal>

                                            </div>
                                        </div>
                                    </> : <>
                                        <div className="own-sipn-div-st"><Spin size="small" tip="Loading..." /></div>
                                    </>}
                                </div>

                                <div className='propity__details_property_information'>
                                    <h3> Floor Plans </h3>
                                    <div className='floor-plan'>
                                        {pdetails?.imagevideo?.length > 0 ?
                                            <Row>
                                                {pdetails?.floorplan?.map((plan, key) =>
                                                    <div className='col-sm-12 col-lg-3 mt-2 mb-2' key={key}>
                                                        <Image
                                                            className='floor_map_img'
                                                            src={ENVIRONMENT.FILE_URL + '/property/' + plan?.url}
                                                            alt={pdetails?.title}
                                                        />
                                                    </div>
                                                )}
                                            </Row> : <>
                                                <div className="floor-plan-sipn-div-st"><Spin size="small"
                                                    tip="Loading..." /></div>
                                            </>}
                                    </div>
                                </div>


                                <div className='propity__details_property_information'>
                                    {pdetails ? <>
                                        <div className='chart_area'>
                                            <div id="chart">
                                                <ReactApexChart options={option.options} series={option.series}
                                                    type="bar" height={300} />
                                            </div>
                                        </div>
                                    </> : <>
                                        <div className="own-sipn-div-st"><Spin size="small" tip="Loading..." /></div>
                                    </>}

                                </div>

                                <div className='propity__details_property_information'>
                                    <div className='p-calculetor'>
                                        <h3> Mortgage </h3>
                                        <p> Calculate and view the monthly mortgage on this apartment </p>
                                    </div>
                                    <Calculator />
                                </div>

                                <div className='propity__details_property_information'>
                                    <div className='propity__details_calculation_information'>
                                        {pdetails ? <>
                                            <h3> Location & Nearby </h3>
                                            <div className='row'>
                                                {all_feature?.nearby_schools ? <>
                                                    <div className='col-sm-6 col-lg-2'>
                                                        <div className='features_location_area'>
                                                            <RiBankLine />
                                                            <p title={all_feature?.nearby_schools} style={{
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap',
                                                                width: '100%',
                                                                display: 'inline-block',
                                                                padding: '0px 3px'
                                                            }}>{all_feature?.nearby_schools}</p>
                                                        </div>
                                                    </div>
                                                </> : <></>}
                                                {all_feature?.nearby_hospitals ? <>
                                                    <div className='col-sm-6 col-lg-2'>
                                                        <div className='features_location_area'>
                                                            <RiHospitalLine />
                                                            <p title={all_feature?.nearby_hospitals} style={{
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap',
                                                                width: '100%',
                                                                display: 'inline-block',
                                                                padding: '0px 3px'
                                                            }}>{all_feature?.nearby_hospitals}</p>
                                                        </div>
                                                    </div>
                                                </> : <></>}
                                                {all_feature?.nearby_shopping_mall ? <>
                                                    <div className='col-sm-6 col-lg-2'>
                                                        <div className='features_location_area'>
                                                            <RiShoppingBag2Line />
                                                            <p title={all_feature?.nearby_shopping_mall} style={{
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap',
                                                                width: '100%',
                                                                display: 'inline-block',
                                                                padding: '0px 3px'
                                                            }}>{all_feature?.nearby_shopping_mall}</p>
                                                        </div>
                                                    </div>
                                                </> : <></>}
                                                {all_feature?.airport_distance ? <>
                                                    <div className='col-sm-6 col-lg-2'>
                                                        <div className='features_location_area'>
                                                            <RiFlightTakeoffFill />
                                                            <p title={all_feature?.airport_distance} style={{
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap',
                                                                width: '100%',
                                                                display: 'inline-block',
                                                                padding: '0px 3px'
                                                            }}>{all_feature?.airport_distance}</p>
                                                        </div>
                                                    </div>
                                                </> : <></>}
                                                {all_feature?.nearby_public_transport ? <>
                                                    <div className='col-sm-6 col-lg-2'>
                                                        <div className='features_location_area'>
                                                            <RiBusLine />
                                                            <p title={all_feature?.nearby_public_transport} style={{
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap',
                                                                width: '100%',
                                                                display: 'inline-block',
                                                                padding: '0px 3px'
                                                            }}>{all_feature?.nearby_public_transport}</p>
                                                        </div>
                                                    </div>
                                                </> : <></>}
                                                {all_feature?.other_nearby_places ? <>
                                                    <div className='col-sm-6 col-lg-2'>
                                                        <div className='features_location_area'>
                                                            <RiMapPinLine />
                                                            <p title={all_feature?.other_nearby_places} style={{
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap',
                                                                width: '100%',
                                                                display: 'inline-block',
                                                                padding: '0px 3px'
                                                            }}>{all_feature?.other_nearby_places}</p>
                                                        </div>
                                                    </div>
                                                </> : <></>}
                                            </div>
                                        </> : <>
                                            <div className="own-sipn-div-st"><Spin size="small" tip="Loading..." /></div>
                                        </>}
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12 col-lg-4'>
                                {pdetails ?
                                    <div className="box__area_from_list_logo_area">

                                        {
                                            pdetails?.ownership && pdetails?.ownership == '1' &&
                                            <div className="btn-content own-property">
                                                <h3>Managed by </h3>
                                                <img style={{ backgroundColor: 'black' }} className='own' src={Logo} />
                                            </div>
                                        }


                                        {
                                            pdetails?.ownership && pdetails?.ownership != '1' &&
                                            <div className="btn-content">
                                                <h3>Managed by </h3>
                                                <img className='other' src={ENVIRONMENT.FILE_URL + 'property/' + pdetails?.ownership_logo} />
                                            </div>
                                        }


                                        {
                                            !pdetails?.ownership &&
                                            <div className="btn-content">
                                                <h3>Managed by </h3>
                                                <img style={{ backgroundColor: 'black' }} className='own' src={Logo} />
                                            </div>
                                        }

                                        {/* {
                                            pdetails?.ownership && pdetails?.ownership == 1 ?
                                                <div className="btn-content own-property">
                                                    <h3>Managed by </h3>
                                                    <img src={Logo} alt="" />
                                                </div>
                                                :
                                                <div className="btn-content">
                                                    <h3>Managed by </h3>
                                                    <img
                                                        src={ENVIRONMENT.FILE_URL + '/property/' + pdetails?.ownership_logo}
                                                        alt="" />
                                                </div>
                                        } */}
                                        <CallButton
                                            property_id={pdetails?.property_id} />
                                        <SaleContactForm id={pdetails?.id}
                                            property_id={pdetails?.property_id} />
                                    </div>
                                    : <>
                                        <div className="own-sipn-div-st mb-4"><Spin size="small" tip="Loading..." />
                                        </div>
                                    </>
                                }

                                {/*<SaleContactForm property_id={pdetails?.id}/>*/}

                                <div className='useful_links_area'>
                                    <h3> Useful Links </h3>
                                    <ul className="useFullLink">
                                        <li><Link to="/new-projects"><RiArrowRightSLine /> New Projects </Link></li>
                                        <li><Link
                                            to="/property/for-sale?purpose=1&status=0&location=&type=0&beds=&baths=&areamin=&areamax=&minprice=&maxprice=&city=&tags="><RiArrowRightSLine /> Sell
                                            a property </Link></li>
                                        <li><Link
                                            to="/property/for-rent?purpose=2&status=0&location=&type=0&beds=&baths=&areamin=&areamax=&minprice=&maxprice=&city=&tags="><RiArrowRightSLine /> Rent
                                            a property</Link></li>
                                        <li><Link to="/loan-calculator"><RiArrowRightSLine /> Loan Calculator </Link>
                                        </li>
                                        <li><Link to="/real-estate-solutions"><RiArrowRightSLine /> Buy and Sale Guide
                                        </Link></li>
                                    </ul>
                                </div>
                                <img src={adds} className="add-image" alt={'Add'} />
                            </div>
                        </div>

                        <div className="w-100 mb-3">
                            <h3 className='mb-4'>
                                <strong>Related Property</strong>
                            </h3>
                            <div className='row'>
                                {relatedProperties?.map((item, key) => (
                                    <div className='col-sm-4 col-lg-3 mb-1' key={key}>
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
                                            <div className="product-card-image">
                                                <img src={ENVIRONMENT.FILE_URL + '/property/' + item?.property_thumbnail?.url} alt={item?.title} className="img-fluid" />
                                            </div>
                                            <div className="card-content">
                                                <p className="latest-property-price" style={{ color: "#ffcb05" }}>
                                                    {priceCLC(item?.price_contact?.offer_price)}
                                                </p>
                                                <Link onClick={() => setCount(0)} to={`/property-details?purpose=${params.get('purpose')}&lid=${item?.listing_id}&pid=${item?.property_id}`} >
                                                    <h5 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                                        {item?.title}
                                                    </h5>
                                                </Link>
                                                <div className="location">
                                                    <Link className='text-muted' onClick={() => setCount(0)} to={`/property-details?purpose=${params.get('purpose')}&pid=${item?.listing_id ? (item?.listing_id) : item?.property_id}`}>
                                                        {item?.location ? (item?.location?.location) + ',' : ''} {item ? (item.areas ? (item.areas.area_name) + ',' : '') : ''} {item ? (item.cities ? (item.cities.city) : '') : ''}</Link>
                                                </div>
                                                <div className="latest-information">
                                                    <span><RiHotelBedFill /> {item?.bedroom} Beds </span>
                                                    <span><BiBath /> {item?.bathroom} Baths </span>
                                                    <span><BiBorderAll /> {item?.square_feet} sqft</span>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </div>
    )
}

export default ApartmentsForSaleDetails

