import React, {useContext, useEffect} from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import {useDispatch, useSelector} from "react-redux";
import BannerImg from "../../asstes/images/details01.jpg";
import StorySection from "../../components/AboutUsComponents/storySection";
import MissionVisionSection from "../../components/AboutUsComponents/missionVisionSection";
import WhyUsSection from "../../components/AboutUsComponents/whyUsSection";
import DataSection from "../../components/AboutUsComponents/dataSection";
import VideoSection from "../../components/AboutUsComponents/videoSection";
import MasterMindSection from "../../components/AboutUsComponents/masterMindSection";
import GallerySection from "../../components/AboutUsComponents/gallerySection";
import {aboutUsGetAction} from "./redux/about-us/aboutUs.actions";
import LanguageContext from "../../context/LanguageProvider";
import {ENVIRONMENT} from "../../config/environment/environment";
function AboutUs() {
    const { language } = useContext(LanguageContext);
    let count = 0;
    const aboutUsStateData = useSelector(
        (state) => state.aboutUsState
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if(count == 0)
            { setTimeout(()=>{
                dispatch(aboutUsGetAction());
                count = count + 1;
            },500)
        }
    }, [count]);

    console.log(aboutUsStateData, 'aboutUsStateData')

    //Log Section
  return (
    <div> 
        <DefaultLayout>
            <div className='about_us_deatils_area'>
                <img className='header_banner' src={ENVIRONMENT.FILE_URL + aboutUsStateData?.aboutUsData?.data?.aboutPage?.page_banner_image} alt="" />
                <h3> {language == "en" ? aboutUsStateData?.aboutUsData?.data?.aboutPage?.page_title_en : aboutUsStateData?.aboutUsData?.data?.aboutPage?.page_title_bn} </h3>
            </div>
            <StorySection pageData={aboutUsStateData?.aboutUsData?.data?.aboutPage} loading={aboutUsStateData.loading}/>
            <MissionVisionSection pageData={aboutUsStateData?.aboutUsData?.data?.aboutPage} loading={aboutUsStateData.loading}/>
            <WhyUsSection whyUs={aboutUsStateData?.aboutUsData?.data?.whyUs} pageData={aboutUsStateData?.aboutUsData?.data?.aboutPage} loading={aboutUsStateData.loading}/>
            <DataSection pageData={aboutUsStateData?.aboutUsData?.data?.aboutPage} loading={aboutUsStateData.loading}/>
            <VideoSection pageData={aboutUsStateData?.aboutUsData?.data?.aboutPage} loading={aboutUsStateData.loading}/>
            <MasterMindSection pageData={aboutUsStateData?.aboutUsData?.data?.aboutPage} loading={aboutUsStateData.loading}/>
            <GallerySection gallery={aboutUsStateData?.aboutUsData?.data?.gallery} pageData={aboutUsStateData?.aboutUsData?.data?.aboutPage} loading={aboutUsStateData.loading}/>
        </DefaultLayout>
    </div>
  )
}

export default AboutUs
