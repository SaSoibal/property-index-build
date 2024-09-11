import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import addPropertyReducer from "../../pages/DefaultPages/redux/add-property/addProperty.reducer";
import blogReducer from "../../pages/DefaultPages/redux/blog/blog.reducer";
import blogDetailsReducer from "../../pages/DefaultPages/redux/blog-details/blogDetails.reducer";
import areaGuideReducer from "../../pages/DefaultPages/redux/area-guide/areaGuide.reducer";
import areaGuideDetailsReducer from "../../pages/DefaultPages/redux/area-guide-details/areaGuideDetails.reducer";
import buySaleGuideReducer from "../../pages/DefaultPages/redux/buy-sale-guide/buySaleGuide.reducer";
import buySaleGuideDetailsReducer from "../../pages/DefaultPages/redux/buy-sale-guide-details/buySaleGuideDetails.reducer";
import partnerReducer from "../../pages/DefaultPages/redux/partner/partner.reducer";
import loneInstructionReducer from "../../pages/DefaultPages/redux/lone-instruction/loneInstruction.reducer";
import interiorReducer from "../../pages/DefaultPages/redux/interior/interior.reducer";
import interiorDetailsReducer from "../../pages/DefaultPages/redux/interior-details/interiorDetails.reducer";
import propertyReducer from "../../pages/DefaultPages/redux/property/property.reducer";
import ptypeCstatusReducer from "../../pages/DefaultPages/redux/ptype-cstatus/ptypeCstatus.reducer";
import propertyDetailsReducer from "../../pages/DefaultPages/redux/property-details/propertyDetails.reducer";
import locationReducer from "../../pages/DefaultPages/redux/location/location.reducer";
import latestPropertyReducer from "../../pages/DefaultPages/redux/latest-property/latestProperty.reducer";
import cityListReducer from "../../pages/DefaultPages/redux/city-list/cityList.reducer";
import landSalesReducer from "../../pages/DefaultPages/redux/land-sales/landSales.reducer";
import landSalesDetailsReducer from "../../pages/DefaultPages/redux/land-sales-details/landSalesDetails.reducer";
import aboutUsReducer from "../../pages/DefaultPages/redux/about-us/aboutUs.reducer";
import contactUsReducer from "../../pages/DefaultPages/redux/contact-us/contactUs.reducer";
import careerReducer from "../../pages/DefaultPages/redux/career/career.reducer";
import loanBenefitReducer from "../../pages/DefaultPages/redux/loan-benefits/loanBenefits.reducer";
import loanBankReducer from "../../pages/DefaultPages/redux/loan-banks/loanBanks.reducer";
import hotPropertyReducer from "../../pages/DefaultPages/redux/hot-property/hotProperty.reducer";
import urgentPropertyReducer from "../../pages/DefaultPages/redux/urgent-property/urgentProperty.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        // "partnerState",
        // "registerState",
        // "forgetPasswordState",
        // "userRoleState",
        // 'localizeState'
    ],
};

const appReducer = combineReducers({
    addPropertyState: addPropertyReducer,
    blogState: blogReducer,
    aboutUsState: aboutUsReducer,
    careerState: careerReducer,
    contactUsState: contactUsReducer,
    blogDetails: blogDetailsReducer,
    areaGuide: areaGuideReducer,
    areaGuideDetails: areaGuideDetailsReducer,
    buySaleGuideState: buySaleGuideReducer,
    buySaleGuideDetails: buySaleGuideDetailsReducer,
    partnerState: partnerReducer,
    loneInstructionState: loneInstructionReducer,
    interiorState: interiorReducer,
    interiorDetailsState: interiorDetailsReducer,
    propertyListState: propertyReducer,
    ptypeCstatusState: ptypeCstatusReducer,
    propertyDetailsState: propertyDetailsReducer,
    locationState: locationReducer,
    latestPropertyState: latestPropertyReducer,
    cityListState: cityListReducer,
    landSaleState: landSalesReducer,
    landSaleDetailsState: landSalesDetailsReducer,
    loanBenefitState: loanBenefitReducer,
    loanBankState: loanBankReducer,
    hotPropertyState: hotPropertyReducer,
    urgentPropertyState: urgentPropertyReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
