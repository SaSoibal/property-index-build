import React from 'react'
import AxiosWithOutAuthInstance from "../config/api/withoutauth.axios";
function Currency(props) {
    const selectedCurrency = localStorage.getItem("currency") || "BDT";
    AxiosWithOutAuthInstance.get(`https://api.exchangerate-api.com/v4/latest/BDT`).toPromise().then(
        (res) => {
            localStorage.setItem("rate",res?.data?.rates[selectedCurrency]);
        },
        (error) => {

        });
    const rate = localStorage.getItem("rate") || 1;
    console.log(rate);
    return (
        <div>
            {selectedCurrency} {new Intl.NumberFormat('en-IN').format(props*rate)}
        </div>
    )
}

export default Currency
