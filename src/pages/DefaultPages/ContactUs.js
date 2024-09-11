import React, {useContext, useEffect} from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import {useDispatch, useSelector} from "react-redux";
import LanguageContext from "../../context/LanguageProvider";
import {ENVIRONMENT} from "../../config/environment/environment";
import Map from "../../components/ContactUsComponents/Map";
import {contactUsGetAction} from "./redux/contact-us/contactUs.actions";
import BannerImg from "../../asstes/images/details01.jpg";
import {t} from "i18next";

function ContactUs() {
    const {language} = useContext(LanguageContext);
    let count = 0;
    const contactUsStateData = useSelector(
        (state) => state.contactUsState
    );
    const pageData = contactUsStateData?.contactUsData?.data?.contactPage;
    const dispatch = useDispatch();
    useEffect(() => {
        if (count == 0) {
            setTimeout(() => {
                dispatch(contactUsGetAction());
                count = count + 1;
            }, 500)
        }
    }, [count]);

    //Log Section
    console.log(contactUsStateData?.contactUsData?.data?.contactPage);
    return (
        <div>
            <DefaultLayout>
                <div className='contact_us_deatils_area'>
                    {/*<img className='header_banner' src={ENVIRONMENT.FILE_URL + contactUsStateData?.contactUsData?.data?.contactPage?.page_banner_image } alt="" />*/}
                    <img className='header_banner' src={BannerImg} alt=""/>
                    <h3>
                        {t('contact-us')}
                    </h3>
                </div>
                <Map pageData={contactUsStateData?.contactUsData?.data?.contactPage}
                     loading={contactUsStateData.loading}/>
            </DefaultLayout>
        </div>
    )
}

export default ContactUs
