import React, { useEffect, useState, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import BannerImg from "../../asstes/images/details01.jpg"
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import {Form, Input, Button, Skeleton, message, Spin} from 'antd';
import { RiFacebookFill, RiYoutubeFill, RiTwitterFill, RiInstagramFill, RiLinkedinFill, RiAlbumLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import moment from 'moment';
import LanguageContext from "../../context/LanguageProvider";
import RelatedPosts from '../../components/HomeComponents/BlogComponents/RelatedPosts'
import {ENVIRONMENT} from "../../config/environment/environment";
import {useDispatch, useSelector} from "react-redux";
import {blogDetailsGetAction} from "./redux/blog-details/blogDetails.actions";
import Newsletter from "../../components/HomeComponents/BlogComponents/Newsletter";
import {t} from "i18next";
import {token} from "../../Helper/apiToken";
import AxiosWithOutAuthPostInstance from "../../config/api/withoutauthpost.axios";
function BlogDetails() {
    const { language } = useContext(LanguageContext);
    const [load, setLoading] = useState(false);
    const { slug } = useParams();
    let count = 0;
    const blogDetailsState = useSelector(
        (state) => state.blogDetails
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if(count == 0)
        {
            dispatch(blogDetailsGetAction(slug));
            count = count + 1;
        }
    }, [count, slug]);
    const blogDetails = blogDetailsState.blogDetailsData?.data?.blog_details;
    const archive = blogDetailsState.blogDetailsData?.data?.archives;
    const reletedpost = blogDetailsState.blogDetailsData?.data?.related_post;
    const loading = blogDetailsState.loading;

    const [form] = Form.useForm();
    const validateMessages = {
        required: t('Email_address') + t('is_required'),
        types: {
            email: '${label} is not a valid email',
        },
    };
    const onFinish = async (values) => {
        setLoading(true)
        const formData = {
            api_key:token,
            blog_id: blogDetails?.id,
            name:values.name,
            email:values.email,
            comments:values.comments
        };
        AxiosWithOutAuthPostInstance.post("web-blog-comment", formData).toPromise().then(res => {
            message.success(res?.data?.message);
            setLoading(false);
            form.resetFields();
            dispatch(blogDetailsGetAction(slug));
        })
            .catch(function (error) {
                console.log(error);
            });
    };
    
    return (
        <div className='a_b_full_area'>
            <DefaultLayout>
                <div className='blog_deatils_area'>
                    <img src={BannerImg} alt="" />
                    <h3> Blog Details </h3>
                </div>
                <div className='blog_deatils_area__contn'>
                    <Container>
                        <Row>
                            <Col sm={12} lg={8}>
                                {loading ? <><Skeleton className="mb-4" /> </>:
                                <>
                                <div className='blog__contn__box'>
                                    <img className='img-fit' src={ENVIRONMENT.FILE_URL  + blogDetails?.image} alt={blogDetails?.title_en} />
                                    <h5> {moment(blogDetails?.created_at).format("MMM Do YY")} </h5>
                                    <h3 className="sidebar-title">{language === "en" ? <> {blogDetails?.title_en} </> : <> {blogDetails?.title_bn} </>}</h3>
                                    <div className="s-border"></div>
                                    <div className="m-border"></div>
                                    {language === "en" ? <> <div className='editor__html' dangerouslySetInnerHTML={{ __html: blogDetails?.description_en }} ></div> </> : <> <div className='editor__html' dangerouslySetInnerHTML={{ __html: blogDetails?.description_bn }}></div> </>}
                                </div>
                                </>}
                                <div className='comment__area'>
                                    <div className="comment_section">
                                        <h3>{t('Comments')}</h3>
                                        <Form
                                            name="basic"
                                            layout="vertical"
                                            form={form}
                                            initialValues={{ remember: true }}
                                            onFinish={onFinish}
                                            validateMessages={validateMessages}
                                            autoComplete="off"
                                        >
                                            <Row>
                                                <Col sm={12} lg={6}>
                                                    <Form.Item
                                                        label={t('User_name')}
                                                        name="name"
                                                        rules={[{ required: true, message: t('User_name') + t('is_required') }]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col sm={12} lg={6}>
                                                    <Form.Item
                                                        label={t('Email_address')}
                                                        name="email"
                                                        rules={[{ required: true, type: 'email' }]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                {/* Enter your comment here.. */}
                                                <Col sm={12} lg={12}>
                                                    <Form.Item
                                                        label={t('Comments')}
                                                        name="comments"
                                                        rules={[{ required: true, message:  t('Comments') + t('is_required') }]}
                                                    >
                                                        <Input.TextArea rows={5}  showCount maxLength={500} />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Button className='button__call_' htmlType="submit"  style={{ float:"right", width:"200px" }}>
                                                {load?<><Spin size="small" />&nbsp;&nbsp;</>:''} Submit Comments
                                            </Button>
                                        </Form>
                                    </div>

                                    <Row>
                                        {blogDetails?.comments?.length > 0?<>
                                            {blogDetails?.comments?.map((item, i) =>
                                                <div key={i} className='col-sm-12 col-lg-12 d-flex align-items-stretch'>
                                                    <div className='cmnt_profile_area'>
                                                        <div className='cmnt_profile_pic'>
                                                            <img src='https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg' alt='' />
                                                        </div>
                                                        <div className='cmnt_profile_cntn'>
                                                            <h4> {item?.name} </h4>
                                                            <h6> {moment(item?.created_at).format("MMM Do YYYY  HH:mm:sa")}</h6>
                                                            <p> {item?.comments} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>: ''
                                        }

                                    </Row>

                                </div>
                            </Col>

                            <Col sm={12} lg={4}>
                                <Newsletter/>
                                <div className='blog__social__icon'>
                                    <RiFacebookFill className='b_s_icon fb' />
                                    <RiYoutubeFill className='b_s_icon yt' />
                                    <RiTwitterFill className='b_s_icon tw' />
                                    <RiInstagramFill className='b_s_icon in' />
                                    <RiLinkedinFill className='b_s_icon ln' />
                                </div>
                                <div className='block_archives_area'>
                                    <h3> {t('Archives')} </h3>
                                    <div className='archiver__link'>
                                          {archive?.length > 0 ?
                                            <>
                                                {archive?.map((archive, j) =>
                                                    <Link to="/" key={j}> <RiAlbumLine /> {archive.year} ({archive.count}) </Link>
                                                )}
                                            </> : <><Skeleton /></> }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={12} lg={12}>
                                    {archive?.length > 0 ?
                                    <>
                                    <RelatedPosts rlatedPost={reletedpost} />
                                    </> : <><Skeleton /></> }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </DefaultLayout>

        </div>
    )
}

export default BlogDetails
