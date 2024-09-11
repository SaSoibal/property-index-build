import React, {useEffect} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Card, Skeleton, Spin} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {RxArrowTopRight} from "react-icons/rx";
import {t} from "i18next";
import {useDispatch, useSelector} from "react-redux";
import {cityAction} from "../../pages/DefaultPages/redux/city-list/cityList.actions";
import {ENVIRONMENT} from "../../config/environment/environment";
function PropertiesByCities(){
    const navigate = useNavigate();
    let count = 0;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cityAction(8));
        count = count + 1;
    }, [count]);

    const cityList = useSelector(
        (state) => state.cityListState
    );
    const cityData = cityList?.cityData?.data?.city;
    const loading = cityList?.loading;
    const skeleton = [];
    for (let i = 0; i < 8; i++) {
        skeleton.push(<Col sm={6} lg={3} key={i}>
            <Card className="property-by-cit-card">
                <div className="card-image">
                    <div className="property-city-loding"> <Spin size="small"  tip="Loading..." /></div>
                </div>
                <div className="card-content">
                    <Skeleton  paragraph={{ rows: 1 }}/>
                </div>
            </Card>
        </Col>)
    }
    const clickUrl = (city) =>{
        navigate('/property/for-sale?purpose=1&status=0&location=&type=0&beds=&baths=&areamin=&areamax=&minprice=&maxprice=&city='+city);
    };
    return (
        <div className='property-by-city light-bg'>
            <Container>
                <div className='title_area'>
                    <div className="row">
                        <div className="col-md-8">
                            <h3>{t('property-by-city')}</h3>
                            <p className='title__p'> There is no greater benchmark for success than customer satisfaction. </p>
                        </div>
                        <div className="col-md-4">
                            <div className="see-all-cities">
                                <Link to={'/'}>See All Cities <RxArrowTopRight/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Row className="property-city-row">
                    {loading?
                        <>{skeleton}</>
                        :
                        <>
                        {cityData?.map((item, i) =>
                            <Col className="city-card" lg={3} key={i}>
                                <Card className="property-by-cit-card">
                                    <div className="card-image">
                                        <img onClick={()=>clickUrl(item?.id)} src={ENVIRONMENT.FILE_URL+item?.image} alt={item?.city} />
                                    </div>
                                    <div className="card-content">
                                            <h5 onClick={()=>clickUrl(item?.id)} className="by-cit-title">{item?.city}</h5>
                                            <p onClick={()=>clickUrl(item?.id)}>{item?.city_property_count} Properties</p>
                                    </div>
                                </Card>
                            </Col>
                        )}
                    </>}

                </Row>
            </Container>
        </div>
    )
}
export default PropertiesByCities
