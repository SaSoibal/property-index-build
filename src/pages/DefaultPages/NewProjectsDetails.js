import React, {useContext, useEffect, useState} from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import BannerImg from "../../asstes/images/details01.jpg"
import BannerContn from "../../asstes/images/banner-4.jpg"
import { Container, Row, Col } from 'react-bootstrap';
import {Modal, Skeleton,Spin, Image} from 'antd';
import Logo from "../../asstes/images/logo2.png"
import {RiDoorOpenLine, RiImage2Fill, RiMapPinLine} from "react-icons/ri";
import adds from "../../asstes/images/add.jpg";
import {useDispatch, useSelector} from "react-redux";
import {landSalesDetailsAction} from "./redux/land-sales-details/landSalesDetails.actions";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import {ENVIRONMENT} from "../../config/environment/environment";
import Iframe from 'react-iframe'
function NewProjectsDetails() {
    const [modelCatagori, setModelCatagori] = useState([]);
    const [visible, setVisible] = useState(false);
    const params = new URLSearchParams(window.location.search);
    const { language } = useContext(LanguageContext);
    const modelViseFunction = (name) => {
        setModelCatagori(name)
        setVisible(true)
    }
    const landSale = useSelector(
        (state) => state.landSaleDetailsState
    );
    let counts = 0;
    const dispatch = useDispatch();
    useEffect(() => {
        if(counts == 0)
        { setTimeout(()=>{
            dispatch(landSalesDetailsAction(params.get('lpid')));
            counts = counts + 1;
        },1500)
        }
    }, [counts]);
    const land = landSale?.landSalesDetailsData?.data?.details;
    const loading = landSale?.loading;
    const priceCLC = (price) =>{
        const lengths =  price.toString().length;
        if(lengths > 1 && lengths < 4) {
            return t('BDT') + new Intl.NumberFormat(language == 'en' ? 'en-IN' : 'bn-IN').format((price / 100)) + t('hundred');
        }else if(lengths > 3 && lengths < 6){
            return t('BDT') + new Intl.NumberFormat(language=='en'?'en-IN':'bn-IN').format((price / 1000)) + t('thousand');
        }else if(lengths > 5 && lengths < 8){
            return t('BDT') + new Intl.NumberFormat(language=='en'?'en-IN':'bn-IN').format((price / 100000)) + t('lac');
        }else if(lengths > 7) {
            return t('BDT') + new Intl.NumberFormat(language=='en'?'en-IN':'bn-IN').format((price / 10000000)) + t('crore');
        }
    }
    console.log(land,'landSale')
    return (
        <div>
            <DefaultLayout>
                <div className='blog_deatils_area'>
                    <img src={BannerImg} alt="" />
                    <h3> {land?.project_name}</h3>
                </div>
                <Container>

                    <div className='discover_pages_contant discover_pages_contant_details'>
                        <div className="row">
                            <div className="col-sm-9 col-lg-9">
                                <div className='full_slider_area'>
                                    {loading?<>
                                        <div className="sipn-div-st"> <Spin size="small"  tip="Loading..." /></div>
                                    </>:<>
                                        <img className='land-sale-thumbnail' src={ENVIRONMENT.FILE_URL+'/property/' + land?.property_thumbnail?.url} alt={land?.title} />
                                        <div className='slider___bootom_model_area'>
                                            {land?.imagevideo.length > 0 ?
                                               <button onClick={() => modelViseFunction("image")}><RiImage2Fill className='mr-1' />Images</button>
                                            :''}
                                            {land?.latitude && land?.longitude ?
                                                <button onClick={() => modelViseFunction("map")}><RiMapPinLine className='mr-1' />Banner</button>
                                            :''}
                                        </div>
                                    </>}
                                    {modelCatagori === "image" ? <>
                                        <Modal
                                            title="Images"
                                            centered
                                            className='slider___m_class'
                                            open={visible}
                                            onOk={() => setVisible(false)}
                                            onCancel={() => setVisible(false)}
                                            width={1000}
                                        >
                                            <div className='floor_loanModel'>
                                                {land?.imagevideo.length > 0 ?
                                                    <Row>
                                                        {land?.imagevideo?.map((plan, j) =>
                                                            <div className='col-sm-12 col-lg-3 mt-2 mb-2'>
                                                                <Image
                                                                    className='floor_map_img'
                                                                    src={ENVIRONMENT.FILE_URL+'/property/' + plan?.url} alt={land?.title}
                                                                />
                                                            </div>
                                                        )}
                                                    </Row>:<>
                                                        <div className="sipn-div-st"> <Spin size="small"  tip="Loading..." /></div>
                                                    </>}
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
                                                        <Iframe src={`https://maps.google.com/maps?q=${land?.latitude}, ${land?.longitude}&z=15&output=embed`} width="100%" height="500" frameborder="0" style="border:0"></Iframe>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Modal>
                                    </> : null}
                                </div>
                                <div className='blog__contn__box mt-3'>
                                    {loading?<>
                                        <Skeleton  className="mt-3" />
                                    </>:<>
                                        <div className="content">
                                            <h3 className="mb-3">{priceCLC(land?.price_contact?.offer_price)} -
                                                {priceCLC(land?.price_contact?.bottom_price)}</h3>
                                            <h5 className="mb-2">{land?.location?(land?.location?.location)+',':''} {land?(land.areas?land.areas.area_name+',':''):''} {land?(land.cities?land.cities.city:''):''}  </h5>
                                            <h3 className="sidebar-title">{land?.title} </h3>
                                            <div className="s-border"></div>
                                            <div className="m-border"></div>
                                            <p className=''> {land?.description}  </p>
                                            <div className='editor_others_html' dangerouslySetInnerHTML={{ __html: land?.other_info?.others_info }} ></div>
                                        </div>
                                      </>}
                                </div>
                                <div className='blog__contn__box mt-3'>
                                    <h3 className="sidebar-title mb-3">Property Information</h3>
                                    {loading?<>
                                        <Skeleton  className="mt-3" />
                                    </>:<>
                                        <Row>
                                            <Col lg={6} md={12}>
                                                <table width="100%">
                                                    <tr><th width={100}>Product Type</th><td>:</td><td>{land?.product_type?.name}</td></tr>
                                                    <tr><th>Property Type</th><td>:</td><td>{land?.property_type==1?'Free Hold':'Lease Hold'}</td></tr>
                                                    <tr><th>Project Type</th><td>:</td><td>{land?.project_type?.type}</td></tr>
                                                    <tr><th>Road Size</th><td>:</td><td>{land?.road_size}</td></tr>
                                                </table>
                                            </Col>
                                            <Col lg={6} md={12}>
                                                <table width="100%">
                                                    <tr><th width={100}>Facing</th><td>:</td><td>{land?.facing}</td></tr>
                                                    <tr><th>Category</th><td>:</td><td>{land?.category}</td></tr>
                                                    <tr><th>Plot Boundary</th><td>:</td><td>{land?.plot_boundary}</td></tr>
                                                </table>
                                            </Col>
                                        </Row>
                                    </>}
                                </div>

                                <div className='blog__contn__box mt-3'>
                                    <h3 className="sidebar-title mb-3">Property Address</h3>
                                    {loading?<>
                                        <Skeleton  className="mt-3" />
                                    </>:<>
                                        <div className='land-address d-flex'>
                                            <div className='icon'><RiMapPinLine/></div>
                                            <div className='address'>
                                                {land?.block?<span>Block : {land?.block}</span>:''}{land?.sector?<span>Sector : {land?.sector}</span>:''}{land?.road?<span>Sector : {land?.road}</span>:''}<br></br>
                                                <p className="pt-0">{land?.property_address}</p>
                                            </div>
                                        </div>
                                    </>}
                                </div>

                                <div className='blog__contn__box mt-3'>
                                    <h3 className="sidebar-title mb-3">Area Banner</h3>
                                    <img className='land-area-map-thumbnail' src={ENVIRONMENT.FILE_URL+'/property/' + land?.floorplan?.url} alt={land?.title} />
                                </div>
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <div className='discover_pages_details_box_right'>
                                    <img src={Logo} alt="" />
                                    <h3> Contact Now </h3>
                                    <h5 className="text-white mb-3">Email : info@propertyindexbd.com</h5>
                                    <h5 className="text-white">Call : +880 1715 000000</h5>
                                </div>
                                <div className='discover_pages_details_box_right_overview'>
                                    <h3>  Overview</h3>
                                    {loading?<> <Skeleton /></>:<>
                                        <table className="table mb-0">
                                            <tr><th>Project ID</th><td>:</td><td>{land?.listing_id > 0?land?.listing_id:land?.property_id}</td></tr>
                                            <tr><th>Price</th><td>:</td><td>
                                                {priceCLC(land?.price_contact?.offer_price)} -
                                                {priceCLC(land?.price_contact?.bottom_price)}
                                            </td></tr>
                                            <tr><th>Plot no</th><td>:</td><td>{land?.plot_no}</td></tr>
                                            <tr><th>Size</th><td>:</td><td>{land?.plot_size}</td></tr>
                                            {land?.property_type==1?
                                                <tr><th>Reg. Status</th><td>:</td><td>
                                                    {land?.property_registration==1?'Registered':''}
                                                    {land?.property_registration==2?'Unregistered':''}
                                                    {land?.property_registration==3?'Mutation':''}
                                                    {land?.property_registration==4?'Rajuk Approval':''}
                                                </td>  </tr>
                                            :''}
                                            {land?.property_type==2?
                                            <tr><th>Paper Status</th><td>:</td><td>
                                                {land?.property_registration==1?'Full Payment':''}
                                                {land?.property_registration==2?'Lease dead Complete':''}
                                                {land?.property_registration==3?'Lease dead and Mutation Complete':''}
                                                {land?.property_registration==4?'Full Paper Complete':''}
                                            </td>  </tr>
                                            :''}
                                        </table>
                                    </>}
                                </div>
                                <div className='add_discover_apartments'>
                                    <img src={adds} alt={'Apartments for Sale'} className='w-100 mb-4'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </DefaultLayout>
        </div>
    )
}

export default NewProjectsDetails
