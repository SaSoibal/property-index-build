import React, { useContext, useEffect } from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import Dbanner from "../../components/HomeComponents/Dbanner"
import HomeAdd from '../../components/HomeComponents/HomeAdd'
import { useDispatch, useSelector } from "react-redux";
import { ptypeCstatusAction } from "./redux/ptype-cstatus/ptypeCstatus.actions";
import HowRealtor from "../../components/HomeComponents/HowRealtor";
import PropertiesByCities from "../../components/HomeComponents/PropertiesByCities";
import LanguageContext from "../../context/LanguageProvider";
import LatestProperties from "../../components/HomeComponents/LatestProperties";
import Partner from "../../components/HomeComponents/Partner";
import HotProperties from '../../components/HomeComponents/HotProperties';
import UrgentSaleProperties from '../../components/HomeComponents/UrgentSaleProperties';

function dHome() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { language } = useContext(LanguageContext);
    let count = 0;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const typeStatus = useSelector(
        (state) => state.ptypeCstatusState
    );
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (count == 0) {
            setTimeout(() => {
                dispatch(ptypeCstatusAction());
                count = count + 1;
            }, 1500)
        }
    }, [count, language]);
    const ptype = typeStatus?.ptypecstatusData?.data?.type;
    const cstatus = typeStatus?.ptypecstatusData?.data?.status;
    const loading = typeStatus?.loading;

    return (
        <div>
            <DefaultLayout>
                <Dbanner ptype={ptype} cstatus={cstatus} loading={loading} />
                <HowRealtor />
                <PropertiesByCities />
                <LatestProperties />
                <HotProperties />
                <UrgentSaleProperties />

                {/*<PopularDhakaNeighborhoods />*/}
                {/*<PropertySaleSearchesBangladesh />*/}
                <Partner />
                <HomeAdd />
            </DefaultLayout>
        </div>
    )
}

export default dHome
