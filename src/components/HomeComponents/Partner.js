import React, { useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Card, Carousel } from "antd";
import aR02 from "../../asstes/images/aR02.png";
import aR03 from "../../asstes/images/aR03.png";
import aR04 from "../../asstes/images/aR04.png";
import aR05 from "../../asstes/images/aR05.png";
import aR06 from "../../asstes/images/aR06.png";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine, RiHotelBedFill } from "react-icons/ri";
import { BiBath, BiBorderAll } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { partnerAction } from "../../pages/DefaultPages/redux/partner/partner.actions";
import { t } from "i18next";
import HomeCliend from "./HomeCliend";
function LatestProperties() {
    let count = 0;
    const partner = useSelector(
        (state) => state.partnerState
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if (count == 0) {
            dispatch(partnerAction());
            count = count + 1;
        }
    }, [count]);
    return (
        <div className='footer____top mt-5'>
            <Container>
                <Row>
                    <Col sm={12} lg={12}>
                        <div className='title_area'>
                            {/* <p> {t("Property")}  </p> */}
                            <h3> {t("Reliable_Partners")} </h3>
                        </div>
                    </Col>
                    <HomeCliend partner={partner.partnerData?.data?.partner} loding={partner.loading} />
                </Row>
            </Container>
        </div>
    )
}
export default LatestProperties
