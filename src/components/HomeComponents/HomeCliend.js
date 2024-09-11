import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel';
import {Skeleton} from "antd";
import {ENVIRONMENT} from "../../config/environment/environment";
function HomeCliend(props){
    const partners = props?.partner;
    const loadings = props?.loding;
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
                items: 3,
            },
            1024: {
                items: 4,
            },
            1280: {
                items: 5,
            },
            1366: {
                items: 5,
            },
        }
    };
    return (
        <div className='cliend_area'>
            <ReactOwlCarousel
                className="owl-theme product__box"
                loop
                margin={10}
                nav={false}
                dots={true}
                autoplay={true}
                autoplayTimeout={4000}
                {...options}
            >
                {loadings ?
                    <><Skeleton /></> :
                    <>
                        {partners?.map((item, i) =>
                            <div className="item" key={i}>
                                <img src={ENVIRONMENT.FILE_URL + item?.image} alt={item?.name} />
                            </div>
                        )}
                    </>}
            </ReactOwlCarousel>
        </div>
    )
}

export default HomeCliend
