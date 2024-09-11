import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class HomeAdd extends Component {
    render() {
        return (
            <div className='add_banner_area'>
                <div className='h_banner_p'>
                    {/* need to change background image */}
                    <div className="item" >
                        <Link to="/" >
                            <div className='h_banner_p__box'>
                                <Container>
                                    <Row>
                                        <Col sm={12} lg={6}>
                                            <div className='b_contant__txt'>
                                                <h2>Start Listing Or Buying A Property With Realton </h2>
                                                <p> View your dream homes online </p>
                                                {/*<button className='viewNowBtn'> View Now <RxArrowTopRight/></button>*/}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeAdd
