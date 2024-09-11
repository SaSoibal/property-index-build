import React, { useState } from 'react';
import { CalculatorControls } from './CalculatorControls';
import { handleMortgageDataChange } from './utils';
import { Container, Row, Col } from 'react-bootstrap';

function Calculator() {
    const [depositAmount, setDepositAmount] = useState(100000);
    const [purchasingHousePrice, setPurchasingHousePrice] = useState(100000);
    const [mortgageTerm, setMortgageTerm] = useState(1);
    const [interestRate, setInterestRate] = useState(6);

    //Set initial values for the whole mortgage term
    const amountToBorrow = purchasingHousePrice - depositAmount;
    // const monthlyPayment = ((interestRate / 100 / 12) * amountToBorrow) / (1 - (Math.pow((1 + (interestRate / 100 / 12)), ((0 - mortgageTerm) * 12))));
    // const totalRepaid = monthlyPayment * 12 * mortgageTerm;
    // const totalInterestPaid = totalRepaid - amountToBorrow;

    /*------------- loan calculator start -------------*/
    const monthlyInterestRate = interestRate / (12 * 100);
    const totalNoOfInstallments = (mortgageTerm * 12);
    const monthlyEMI = ((amountToBorrow * monthlyInterestRate) * Math.pow((1 + monthlyInterestRate), totalNoOfInstallments)) / (Math.pow((1 + monthlyInterestRate), totalNoOfInstallments) - 1);
    const totalRepaidAmount = monthlyEMI * totalNoOfInstallments;
    /*------------- loan calculator end -------------*/

    // const yearlyPayments = handleMortgageDataChange(amountToBorrow, mortgageTerm, interestRate, monthlyPayment);


    return (
        <CalculatorControls
            depositAmount={depositAmount}
            setDepositAmount={setDepositAmount}
            purchasingHousePrice={purchasingHousePrice}
            setPurchasingHousePrice={setPurchasingHousePrice}
            mortgageTerm={mortgageTerm}
            setMortgageTerm={setMortgageTerm}
            interestRate={interestRate}
            setInterestRate={setInterestRate}
            monthlyEMI={monthlyEMI}
            totalRepaidAmount={totalRepaidAmount}
        />
    )
}

export default Calculator
