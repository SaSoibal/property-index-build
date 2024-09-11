import React, {useContext, useEffect} from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import {useDispatch, useSelector} from "react-redux";
import LanguageContext from "../../context/LanguageProvider";
import {ENVIRONMENT} from "../../config/environment/environment";
import WhyJoinUs from "../../components/CareerComponents/WhyJoinUs";
import HiringProcess from "../../components/CareerComponents/HiringProcess";
import OurOpenings from "../../components/CareerComponents/OurOpenings";
import TogetherGrow from "../../components/CareerComponents/TogetherGrow";
import Banner from "../../components/CareerComponents/Banner";
import CoreValue from "../../components/CareerComponents/CoreValue";
import {careerGetAction} from "./redux/career/career.actions";
function Career() {
    const { language } = useContext(LanguageContext);
    let count = 0;
    const careerStateData = useSelector(
        (state) => state.careerState
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if(count == 0)
            { setTimeout(()=>{
                dispatch(careerGetAction());
                count = count + 1;
            },500)
        }
    }, [count]);

    //Log Section
    console.log(careerStateData, 'careerStateData')
  return (
    <div> 
        <DefaultLayout>
            {/*<div className='about_us_deatils_area'>*/}
            {/*    <img className='header_banner' src={ENVIRONMENT.FILE_URL + careerStateData?.careerData?.data?.career?.page_banner_image} alt="" />*/}
            {/*    <h3> {language == "en" ? careerStateData?.careerData?.data?.career?.page_title_en : careerStateData?.careerData?.data?.career?.page_title_bn} </h3>*/}
            {/*</div>*/}
            <Banner pageData={careerStateData?.careerData?.data?.careerPage} loading={careerStateData.loading}/>
            <WhyJoinUs pageData={careerStateData?.careerData?.data?.careerPage} loading={careerStateData.loading}/>
            <CoreValue pageData={careerStateData?.careerData?.data?.careerPage} loading={careerStateData.loading}/>
            <HiringProcess whyUs={careerStateData?.careerData?.data?.careerPage} pageData={careerStateData?.careerData?.data?.career} loading={careerStateData.loading}/>
            <OurOpenings pageData={careerStateData?.careerData?.data?.jobs} loading={careerStateData.loading}/>
            <TogetherGrow pageData={careerStateData?.careerData?.data?.careerPage} loading={careerStateData.loading}/>
        </DefaultLayout>
    </div>
  )
}

export default Career
