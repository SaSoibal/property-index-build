import { propertyTypes } from "./property.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const propertyAction = (purpose,conststatus,location,productType,beds,bath,minsqft,maxsqft,minprice,maxprice,cities,tags,currentPage) => async (dispatch) => {
    dispatch({
        type: propertyTypes.PROPERTY_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-property-list?purpose=${purpose}&status=${conststatus}&location=${location}&type=${productType}&beds=${beds}&baths=${bath}&minsqft=${minsqft}&maxsqft=${maxsqft}&minprice=${minprice}&maxprice=${maxprice}&city=${cities}&tags=${tags}&page=${currentPage}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: propertyTypes.PROPERTY_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: propertyTypes.PROPERTY_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: propertyTypes.PROPERTY_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: propertyTypes.PROPERTY_ACTION_END,
            });
        }
    );
};
