import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
const localeOptions = {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
}

export const CalculatorControls = props => {

    const totalpriceFun = (event) => {
        props.setPurchasingHousePrice(event.target.value);
    }
    const loanPeriodFun = (event) => {
        props.setMortgageTerm(event.target.value);
    }
    const downPaymentFun = (event) => {
        props.setDepositAmount(event.target.value);
    }
    const interestRateFun = (event) => {
        props.setInterestRate(event.target.value);
    }

    return (
        <div className="calculator">
            <div className="grid__container grid__container_left_width">
                <div className="grid__item">
                    <Row>
                        <Col sm={7} lg={7}>
                            <label className="grid__item--label" htmlFor="purchasingHousePrice">Total Price</label>
                            <input
                                type="range"
                                style={{ width: "100%" }}
                                className="grid__item--range-slider"
                                id="purchasingHousePrice"
                                min="100000"
                                max="20000000"
                                step="1000"
                                value={props.purchasingHousePrice}
                                onChange={totalpriceFun} />
                        </Col>
                        <Col sm={5} lg={5}>
                            <span className="grid__item--header">{props.purchasingHousePrice}  BDT</span>
                        </Col>

                        <Col sm={7} lg={7}>
                            <label className="grid__item--label" htmlFor="purchasingHousePrice">Loan Period</label>
                            <input
                                type="range"
                                style={{ width: "100%" }}
                                className="grid__item--range-slider"
                                id="mortgageTerm"
                                min="1"
                                max="25"
                                step="1"
                                value={props.mortgageTerm}
                                onChange={loanPeriodFun} />
                        </Col>
                        <Col sm={5} lg={5}>
                            <span className="grid__item--header">{props.mortgageTerm} Years</span>
                        </Col>

                        <Col sm={7} lg={7}>
                            <label className="grid__item--label" htmlFor="purchasingHousePrice">Down payment</label>
                            <input
                                type="range"
                                style={{ width: "100%" }}
                                className="grid__item--range-slider"
                                id="depositAmount"
                                min="100000"
                                max="20000000"
                                step="100000"
                                value={props.depositAmount}
                                onChange={downPaymentFun}
                            />
                        </Col>
                        <Col sm={5} lg={5}>
                            <span className="grid__item--header">{parseInt(props.depositAmount).toLocaleString('bd')} BDT</span>
                        </Col>

                        <Col sm={7} lg={7}>
                            <label className="grid__item--label" htmlFor="purchasingHousePrice">Interest Rate</label>
                            <input
                                type="range"
                                style={{ width: "100%" }}
                                className="grid__item--range-slider"
                                id="interestRate"
                                min="6"
                                max="20"
                                step="0.1"
                                value={props.interestRate}
                                onChange={interestRateFun}
                            />
                        </Col>
                        <Col sm={5} lg={5}>
                            <span className="grid__item--header m00">{props.interestRate}%</span>
                        </Col>
                        {/* <Col sm={12} lg={12}>
                            <p className='apply__btn'> Apply For Loan </p>
                        </Col> */}
                    </Row>
                </div>
            </div>
            <div className='grid__container_right_width'>
                <div className='grid__container_right_width_box'>
                    <h5 className='text-light'> Monthly Payment </h5>
                    <h4 className='text-light'> BDT </h4>
                    <h3 className='text-light'> {Math.round(props.monthlyEMI?.toFixed(2))} </h3>
                </div>
                <div className='grid__container_right_width_box'>
                    <h5 className='text-light'> Total Payable over {props.mortgageTerm} Years </h5>
                    <h4 className='text-light'> BDT </h4>
                    <h3 className='text-light'> {Math.round(props.totalRepaidAmount?.toFixed(2))} </h3>
                </div>
                {/*<p className='apply__btn'> View All Banks</p>*/}
            </div>
        </div>
    );
}
