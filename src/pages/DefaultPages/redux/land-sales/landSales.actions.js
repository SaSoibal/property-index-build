import { landSalesTypes } from "./landSales.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const landSalesAction = (city,propertyType,maxprice,minprice,currentPage) => async (dispatch) => {
    dispatch({
        type: landSalesTypes.LAND_SALES_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-land-sales-list?city=${city}&ptype=${propertyType}&minprice=${minprice}&maxprice=${maxprice}&api_key=${token}&page=${currentPage}`).toPromise().then(
        (res) => {
            dispatch({
                type: landSalesTypes.LAND_SALES_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: landSalesTypes.LAND_SALES_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: landSalesTypes.LAND_SALES_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: landSalesTypes.LAND_SALES_ACTION_END,
            });
        }
    );
};
