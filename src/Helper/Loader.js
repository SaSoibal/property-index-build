import React, { } from 'react'
import loaderImg from "../asstes/images/loader.gif";

function Loader(props) {
    return (
        <div>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="text-center">
                            <img src={loaderImg} height="100" alt="Loging"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader
