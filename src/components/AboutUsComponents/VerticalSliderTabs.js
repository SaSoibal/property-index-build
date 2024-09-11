import React, {useContext, useState} from 'react';
import WhyUsImage from "../../asstes/images/b01.png";
import {Link} from 'react-router-dom';
import {Skeleton} from "antd";
import LanguageContext from "../../context/LanguageProvider";
import {ENVIRONMENT} from "../../config/environment/environment";
import {t} from "i18next";

const VerticalSliderTabs = ({tabs, pageData}) => {
    const {language} = useContext(LanguageContext);
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleClick = (index) => {
        setActiveTabIndex(index);
    };
    const truncateText = (text, limit) => {
        if (!text) return null;
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };

    return (
        <div className="">
            <div className="col-lg-6 col-sm-6 why-us-about-title-section" >
                <h1 className="why-us-about-section-title1">
                    {t('why-us')}
                </h1>
                <div className="slider-tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-button ${activeTabIndex === index ? 'active' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            {tab.title_en}
                        </button>
                    ))}
                </div>
            </div>

            <div className="slider-content col-lg-6 col-sm-6" style={{float: "left"}}>
                {tabs.map((item, index) => (
                    <div
                        key={index}
                        className={`content-item ${activeTabIndex === index ? 'active' : ''}`}
                    >
                        <div className="property-photo" style={{textAlign: "center"}}>
                            <Link to={`blog-details/$`} className="property-img">
                                <img src={ENVIRONMENT.FILE_URL + item?.image} alt="properties"
                                     className="img-fite"/>

                            </Link>
                            <div className="item-text">
                                <span>

                                        {language === "en" ? <>
                                            <div className='editor__html'
                                                 dangerouslySetInnerHTML={{__html: truncateText(item?.description_en, 500)}}></div>
                                        </> : <>
                                            <div className='editor__html'
                                                 dangerouslySetInnerHTML={{__html: truncateText(item?.description_en, 500)}}></div>
                                        </>}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalSliderTabs;
