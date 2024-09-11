import React from 'react'
import { Container } from 'react-bootstrap'
import ReactOwlCarousel from 'react-owl-carousel';
import Img01 from "../../../asstes/images/l1.png"
import Img02 from "../../../asstes/images/l2.png"
import {t} from "i18next";
import {Link} from "react-router-dom";
// import Img03 from "../../../asstes/images/l1.png"
function AboutPropertySelling() {
    const options = {
        navText: ["Prev", "Next"],
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

    return (
        <div className='how_it_work_area'>
            <Container>
                <div className='title_area' style={{textAlign: "center"}}>
                    <h3> {t("Learn_More_About_Property_Selling")} </h3>
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

                    <div className='item'>
                        <div className="acr-featured-listing">
                            <div className="featured-listing-thumb">
                                <Link to="/themes/react/acres/listing-details-v1">
                                    <img src={Img01} alt="listing" />
                                </Link>
                                <div className="featured-listing-controls">
                                    <Link to="/themes/react/acres/home-v2">
                                        {/* <i className="far fa-heart"></i> */}
                                    </Link>
                                </div>
                            </div>
                            <div className='box__item_contn'>
                                <h3> When To Sell Your House And How? </h3>
                                <button className='box__item_contn_btn'> TRENDS </button>
                                <p>There is no doubt that owning a house is a dream that we all have and at the same time it is also a necessity that needs….</p>
                                <span className="date left">September 2, 2020</span>
                                <span className="time right">8 minutes</span>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="acr-featured-listing">
                            <div className="featured-listing-thumb">
                                <Link to="/themes/react/acres/listing-details-v1">
                                    <img src={Img02} alt="listing" />
                                </Link>
                                <div className="featured-listing-controls">
                                    <Link to="/themes/react/acres/home-v2">
                                        {/* <i className="far fa-heart"></i> */}
                                    </Link>
                                </div>
                            </div>
                            <div className='box__item_contn'>
                                <h3> When To Sell Your House And How? </h3>
                                <button className='box__item_contn_btn'> TRENDS </button>
                                <p>There is no doubt that owning a house is a dream that we all have and at the same time it is also a necessity that needs….</p>
                                <span className="date left">September 2, 2020</span>
                                <span className="time right">8 minutes</span>
                            </div>
                        </div>
                    </div>

                </ReactOwlCarousel>
            </Container>
        </div>
    )
}

export default AboutPropertySelling
