import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import { ENVIRONMENT } from "../../config/environment/environment";
import MissionVisionImage from "../../asstes/images/03.png";
import { t } from "i18next";
import LanguageContext from "../../context/LanguageProvider";

function GalleryItem(props) {
    const { language } = useContext(LanguageContext);
    const item = props.item;
    const loading = props.loading;

    // let $show = false;
    // if(item.album.length > 0){
    //     $show = true
    // }

    return (
        <>
            <div className="col-lg-16 col-md-12" key={item.id}>
                <h3 style={{ padding: "20px 0" }}>
                    {language == 'en' ? item.title_en : item.title_bn}
                </h3>
                <div className="col-lg-16 col-sm-12 d-flex">
                    {item.album.map(album => (
                        <div className="col-sm-4" style={{ textAlign: "left", paddingRight: "10px" }} key={album.id}>
                            <img src={ENVIRONMENT.FILE_URL + album.image} style={{ width: "480px", height: "250px" }} alt={album.title_en}
                                className="img-fite" />
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default GalleryItem
