// reducer.js

import { FETCH_FAILED_PROFILES, FETCH_SEND_PROFILES, FETCH_SUCCESS_PROFILES } from "../actions";



const initialState = {
  profiles: [],
  profiles2: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEND_PROFILES:
      return { ...state, };
    case FETCH_SUCCESS_PROFILES:
      return { ...state, profiles: action.payload, profiles2: action.payload };
    case FETCH_FAILED_PROFILES:
      return { ...state, profiles: action.payload, profiles2: action.payload };
    default:
      return state;
  }
}