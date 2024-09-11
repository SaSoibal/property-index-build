import React, { useContext, useEffect } from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout";
import { Link, useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { Card, Collapse, Form, Input, Skeleton } from "antd";
import ReactOwlCarousel from "react-owl-carousel";
import { RiCustomerService2Fill } from "react-icons/ri";
import LanguageContext from "../../context/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { interiorDetailsAction } from "./redux/interior-details/interiorDetails.actions";
import { ENVIRONMENT } from "../../config/environment/environment";
import { t } from "i18next";
const { Panel } = Collapse;
function InteriorDetailsPages() {
    const options = {
        navText: ["Prev", "Next"],
        items: 1,
    };
    const [form] = Form.useForm();
    const { language } = useContext(LanguageContext);
    const { slug } = useParams();
    let count = 0;
    const dispatch = useDispatch();
    useEffect(() => {
        if (count == 0) {
            setTimeout(() => {
                dispatch(interiorDetailsAction(slug));
                count = count + 1;
            }, 1500)
        }
    }, [count]);
    const details = useSelector(
        (state) => state.interiorDetailsState
    );

    const loading = details?.loading;
    const interiors = details?.interiorDetailsData?.data?.details;
    console.log(interiors, 'details');
    return (
        <div>
            <DefaultLayout>
                <section className="section pages_bur_d_custom full-page mb-80">
                    <img style={{ width: "100%" }} src={ENVIRONMENT.FILE_URL + interiors?.thumbnail} alt={language == 'en' ? (interiors?.title_en) : (interiors?.title_bn)} />
                    <div className='b__cntn'>
                        {loading ? <><Skeleton /></> : <>
                            <h2 className='mb-3'>{language == 'en' ? (interiors?.title_en) : (interiors?.title_bn)}</h2>
                            <h3 className='text-white'>{language == 'en' ? (interiors?.subtitle_en) : (interiors?.subtitle_bn)}</h3>
                        </>}
                    </div>
                </section>
                <Container>
                    {loading ? <><Skeleton /></> : <>
                        {interiors?.information?.map((item, i) => {
                            if ((i % 2) === 0) {
                                return (
                                    <Row className='mb-80' key={i}>
                                        <div className="col-sm-6 col-lg-6 m-auto">
                                            <h2 className={'mb-3'}>
                                                <strong> {language == 'en' ? (item?.title_en) : (item?.title_bn)}</strong>
                                            </h2>
                                            <p className='text-black'>{language == 'en' ? (item?.description_en) : (item?.description_bn)}</p>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="popular-places">
                                                <div className="popular-places-inner">
                                                    <div className="popular-places-overflow">
                                                        <div className="popular-places-photo">
                                                            <img className="img-fluid w-100" src={ENVIRONMENT.FILE_URL + item?.thumbnail} alt={language == 'en' ? (item?.title_en) : (item?.title_bn)} />
                                                        </div>
                                                        <div className="info">
                                                            <h3>
                                                                <Link> {language == 'en' ? (item?.title_en) : (item?.title_bn)}  </Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                )
                            } else {
                                return (
                                    <Row className='mb-80' key={i}>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="popular-places">
                                                <div className="popular-places-inner">
                                                    <div className="popular-places-overflow">
                                                        <div className="popular-places-photo">
                                                            <img className="img-fluid w-100" src={ENVIRONMENT.FILE_URL + item?.thumbnail} alt={language == 'en' ? (item?.title_en) : (item?.title_bn)} />
                                                        </div>
                                                        <div className="info">
                                                            <h3>
                                                                <Link> {language == 'en' ? (item?.title_en) : (item?.title_bn)}  </Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6 m-auto">
                                            <h2 className={'mb-3'}>
                                                <strong> {language == 'en' ? (item?.title_en) : (item?.title_bn)}</strong>
                                            </h2>
                                            <p className='text-black'>{language == 'en' ? (item?.description_en) : (item?.description_bn)}</p>
                                        </div>
                                    </Row>
                                )
                            }
                        }
                        )}
                    </>}
                </Container>

                <Container>
                    <Row className='mb-80'>
                        <div className="col-sm-12 col-lg-12">
                            <h2 className="mb-4 text-center">
                                <strong>{t('what-we-provide')}</strong>
                            </h2>
                        </div>
                        {loading ? <><Skeleton /></> : <>
                            {interiors?.weprovide?.map((item, i) =>
                                <div className="col-sm-12 col-lg-4" key={i}>
                                    <Card className="text-center w-100">
                                        <img className="w-100 mb-3" src={ENVIRONMENT.FILE_URL + item?.thumbnail} alt={language == 'en' ? (item?.title_en) : (item?.title_bn)} />
                                        <h4><strong>{language == 'en' ? (item?.title_en) : (item?.title_bn)}</strong></h4>
                                        <p className='text-black'>{language == 'en' ? (item?.description_en) : (item?.description_bn)}</p>
                                    </Card>
                                </div>
                            )}
                        </>}
                    </Row>
                </Container>

                <Container>
                    <Row className='mb-80'>
                        <div className="col-sm-12 col-lg-12">
                            <h2 className="mb-4 text-center">
                                <strong> Gallery</strong>
                            </h2>
                        </div>
                        <div className='w-75 mx-auto'>
                            <ReactOwlCarousel loop
                                nav={false}
                                dots={true}
                                autoplay={true}
                                className="owl-carousel"
                                {...options}>
                                {loading ? <><Skeleton /></> : <>
                                    {interiors?.gallery?.map((item, i) =>
                                        <div className='item' style={{ height: '350px', overflow: 'hidden' }} key={i}>
                                            <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={ENVIRONMENT.FILE_URL + item.image} alt={ENVIRONMENT.FILE_URL + item.image} />
                                        </div>
                                    )}
                                </>}
                            </ReactOwlCarousel>
                        </div>

                    </Row>
                </Container>
                <Container>
                    <Row className='mb-80'>
                        <div className="col-sm-12 col-lg-6">
                            <h2 className="mb-4 text-center">
                                <strong>{t('send-us-a-message')}</strong>
                            </h2>
                            <Form
                                form={form}
                                name="form-control"
                                layout="vertical"
                                // onFinish={onFinish}
                                style={{ maxWidth: 600 }}
                            > <Row>
                                    <div className="col-md-6">
                                        <Form.Item name="name" label="Your Name" width={'300px'} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item name="floor_area" label="Floor Area (Optional)">
                                            <Input />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Item name="your_idea" label="Feel Free to Share Your Ideas">
                                            <Input />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-12 ">
                                        <button type="submit" className="calculat__btn mt-0">
                                            Submit
                                        </button>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <h2 className="mb-4">
                                <strong>{t('just-a-call-away')}</strong>
                            </h2>
                            <p>{language == 'en' ? (interiors?.justcallaway?.details_en) : (interiors?.justcallaway?.details_bn)}</p>
                            <h1 className="contact-us-icon"><span className="text-danger">
                                <RiCustomerService2Fill /></span> {interiors?.justcallaway?.phone_no}</h1>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <Row className='mb-5'>
                        <div className="col-sm-12 col-lg-12">
                            <h2 className="mb-4 text-center">
                                <strong> {t('FAQ')} </strong>
                            </h2>
                        </div>
                        <div className="col-sm-12 col-lg-12">
                            <Collapse defaultActiveKey={['0']} accordion>
                                {loading ? <><Skeleton /></> : <>
                                    {interiors?.faq?.map((item, i) =>
                                        <Panel header={language == 'en' ? (item?.title_en) : (item?.title_bn)} key={i}>
                                            <p>{language == 'en' ? (item?.description_en) : (item?.description_bn)}</p>
                                        </Panel>
                                    )}
                                </>}
                            </Collapse></div>
                    </Row>
                </Container>

            </DefaultLayout>
        </div>
    )
}

export default InteriorDetailsPages
