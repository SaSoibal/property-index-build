import React, {useContext} from 'react'
import { Container } from 'react-bootstrap'
import {Skeleton} from "antd";
import LanguageContext from "../../../context/LanguageProvider";
import {ENVIRONMENT} from "../../../config/environment/environment";
import ReactOwlCarousel from 'react-owl-carousel';
import {t} from "i18next";
function HowItWork(howitworks) {
    const how_it_work_data = howitworks.howitworks;
    const loading = howitworks.loading;
    const { language } = useContext(LanguageContext);
    const options = {
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        items: 4,
        responsive: {
            0: {
                items: 2,
            },
            450: {
                items: 2,
            },
            600: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 4,
            },
            1280: {
                items: 4,
            },
            1366: {
                items: 4,
            },
        }
    };

    if(loading){
        return (
            <div className='how_it_work_area'>
                <Container>
                    <div className='title_area' style={{textAlign: "center"}}>
                        <h3>{t("How_it_Works")}  </h3>
                        <p className='title__p'> There is no greater benchmark for success than customer satisfaction.<br></br> Over the years, we’ve built a culture of service.   </p>
                    </div>
                    <Skeleton />
                </Container>
            </div>
        )
    }else{
        return (
            <div className='how_it_work_area'>
                <Container>
                <div className='title_area' style={{textAlign: "center"}}>
                    <h3>{t("How_it_Works")} </h3>
                    <p className='title__p'> There is no greater benchmark for success than customer satisfaction.<br></br> Over the years, we’ve built a culture of service.   </p>
                </div>
                    <ReactOwlCarousel loop
                                 margin={10}
                                 nav={true}
                                 dots={true}
                                 autoplay={false}

                                 autoplayTimeout={4000}
                                 className="how_it_work_items owl-carousel"
                                 {...options}>

                         {how_it_work_data?.map((work, i) =>
                            <div className='item' key={i}>
                                <div className="acr-featured-listing">
                                    <div className="featured-listing-thumb">
                                        <img src={ENVIRONMENT.FILE_URL+work.image} alt={work.title_en} />
                                    </div>
                                    <div className="featured-listing-content">
                                        <div className="featured-listing-meta">
                                            <p>{language=='bn'?work.title_bn:work.title_en}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ReactOwlCarousel>
                </Container>
            </div>
        )
    }

}

export default HowItWork
