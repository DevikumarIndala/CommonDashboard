import { getAllItems } from "../../Api/Api";
import { DashboardType } from "./dashboard.type";


export const getApiCallRequest = () => {
  return {
    type: DashboardType.API_GET_LIST_REQUEST,
  };
};

export const getApiCallSuccess = () => {
  return {
    type: DashboardType.API_GET_LIST_SUCESS,
   
  };
};

export const getApiCallFail = () => {
  return {
    type: DashboardType.API_GET_LIST_FAIL,
  };
};

export const getApiLiveChats = (data) => {
  return {
    type: DashboardType.API_GET_LIVE_CHATS,
    payload: data,
  };
};




export const getApiCall = () => async (dispatch) => {
  try {
    dispatch(getApiCallRequest());
    const gettingData = await getAllItems(); // Make sure this returns the data
    dispatch(getApiCallSuccess(gettingData)); // Assuming response.data contains the data
  } catch (error) {
    console.error("Error creating data:", error);
    dispatch(getApiCallFail());
  }
};


