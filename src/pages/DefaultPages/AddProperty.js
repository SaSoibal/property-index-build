import React, { useEffect, useContext } from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import Banner from '../../components/HomeComponents/AddPropertyComponents/Banner'
import HowItWork from "../../components/HomeComponents/AddPropertyComponents/HowItWork";
import CustomerExperiences from '../../components/HomeComponents/AddPropertyComponents/CustomerExperiences'
import FrequentlyAskedQuestions from '../../components/HomeComponents/AddPropertyComponents/FrequentlyAskedQuestions'
import AboutPropertySelling from '../../components/HomeComponents/AddPropertyComponents/AboutPropertySelling'
import { useSelector, useDispatch } from "react-redux";
import { addPropertyGetAction } from "./redux/add-property/addProperty.actions";
import LanguageContext from "../../context/LanguageProvider";

function AddProperty() {
    const { language } = useContext(LanguageContext);
    let count = 0;
    const addProperty = useSelector(
        (state) => state.addPropertyState
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if (count == 0) {
            setTimeout(() => {
                dispatch(addPropertyGetAction());
                count = count + 1;
            }, 1500)
        }
    }, [count, language]);

    return (
        <div>
            <DefaultLayout>
                <Banner slider={addProperty.addPropertyData?.data?.slider} loading={addProperty.loading} />
                <HowItWork howitworks={addProperty.addPropertyData?.data?.how_it_works} loading={addProperty.loading} />
                <CustomerExperiences customer_exp={addProperty.addPropertyData?.data?.customer_exp} loading={addProperty.loading} />
                <FrequentlyAskedQuestions faq={addProperty.addPropertyData?.data?.faq} loading={addProperty.loading} />
                {/*<AboutPropertySelling />*/}
            </DefaultLayout>
        </div>
    )
}

export default AddProperty
