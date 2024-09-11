import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import WhyUsImage from "../../asstes/images/b01.png";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import VerticalSliderTabs from './VerticalSliderTabs';
function WhyUsSection(props) {
    const {language} = useContext(LanguageContext);
    const pageData = props.pageData;
    const whyUs = props.whyUs;
    const loading = props.loading;

    // console.log(whyUs,'whyUs')

    return (

        <div className='why-us-about_full_area'>
            <Container>
                <Row>
                    <Col sm={12} lg={16}>
                        {loading ?
                            <><Skeleton /></> :
                            <>
                                <div className="row g-0 why-us">
                                    <VerticalSliderTabs tabs={whyUs} pageData={pageData} />
                                </div>
                            </>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyUsSection
