import { produce } from 'immer';
import { DashboardType } from './dashboard.type';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  //livechat:[]
};

const dashboardReducer = produce((draft, action) => {
  switch (action.type) {
    case DashboardType.API_GET_LIST_REQUEST:
      draft.isLoading = true;
      break;
    case DashboardType.API_GET_LIST_SUCESS:
      draft.isLoading = false;
      draft.data = action.payload; // Assuming action.payload contains the data
      break;

    case DashboardType.API_GET_LIVE_CHATS:
      draft.isLoading = false;
      draft.data = action.payload;
      break;

    case DashboardType.API_GET_LIST_FAIL:
      draft.isError = true;
      break;

    default:
      break;
  }
}, initialState);

export default dashboardReducer;
