import React, {useContext, useEffect} from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {buySaleGuideDetailsAction} from "./redux/buy-sale-guide-details/buySaleGuideDetails.actions";
import {ENVIRONMENT} from "../../config/environment/environment";
import {Skeleton} from "antd";

function BuyingProperty() {
    const { slug } = useParams();
    const { language } = useContext(LanguageContext);
    let count = 0;
    const buySaleGuide = useSelector(
        (state) => state.buySaleGuideDetails
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if(count == 0)
            { setTimeout(()=>{
                dispatch(buySaleGuideDetailsAction(slug));
                count = count + 1;
            },500)
        }
    }, [count,language]);
    const details = buySaleGuide.buySaleGuideDetailsData?.data?.buy_and_sell;
    const loading = buySaleGuide.loading;
    return (
        <div>
            <DefaultLayout>
                {loading?<><Skeleton /><Skeleton className="mb-3" /><Skeleton className="mb-3" /></>:<>
                    <section className="section pages_bur_d_custom full-page">
                        <img style={{ width: "100%" }} src={ENVIRONMENT.FILE_URL + details?.thumbnail} alt={language === "en" ?details?.title_en : details?.title_bn} />
                        <div className='b__cntn'>
                            <h2 className='mb-3'>{t('buyers-guide')} </h2>
                             <h3 className='text-white'> {language === "en" ?details?.title_en : details?.title_bn} </h3>
                        </div>
                    </section>

                    {details?.details?<>
                        {details?.details?.map((item, i) =>
                            <section key={i} className="section pages_bur_d_custom full-page">
                                <img style={{ width: "100%" }} src={ENVIRONMENT.FILE_URL + item?.image} alt={language === "en" ?item?.title_en : item?.title_bn} />
                                <div className='b__cntn'>
                                    <h1> {t(i+1)} </h1>
                                    <p className='p_details'> <span> {language === "en" ?item?.title_en : item?.title_bn}</span> <br></br><br></br>
                                    {language === "en" ? <> <div className='editor__html' dangerouslySetInnerHTML={{ __html: item?.description_en }} ></div> </> : <> <div className='editor__html' dangerouslySetInnerHTML={{ __html: item?.description_bn }}></div> </>}</p>
                                </div>
                            </section>
                        )}
                    </>:<><Skeleton /></>}
                </>}

            </DefaultLayout>
        </div>
    )
}

export default BuyingProperty
