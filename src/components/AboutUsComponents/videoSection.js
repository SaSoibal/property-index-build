import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {Skeleton} from "antd";
import {Link} from "react-router-dom";
import {ENVIRONMENT} from "../../config/environment/environment";
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";

function VideoSection(props) {
    const {language} = useContext(LanguageContext);
    const pageData = props.pageData;
    const loading = props.loading;


    return (

        <div className='video-about_full_area'>
            <Container>
                <Row>
                    <Col sm={12} lg={16}>
                        {loading ?
                            <><Skeleton/></> :
                            <>
                                <div className="row g-0" style={{margin: "50px 0"}}>
                                    <div className="col-lg-16 col-sm-12 d-flex">
                                        {loading ? <><Skeleton/></> : <>
                                            <div className='editor__html video-overflow'
                                                 dangerouslySetInnerHTML={{__html: pageData?.video_link}}></div>
                                        </>}
                                    </div>
                                </div>
                            </>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default VideoSection
