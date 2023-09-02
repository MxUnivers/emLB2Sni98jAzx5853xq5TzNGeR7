// reducer.js

import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "./actions";


const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEND_REQUEST:
      return { ...state, loading: true };
    case REQUEST_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case REQUEST_FAILURE:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
}