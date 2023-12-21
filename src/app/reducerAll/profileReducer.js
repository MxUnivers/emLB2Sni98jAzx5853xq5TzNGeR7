// reducer.js

import { FETCH_FAILED_PROFILE, FETCH_FAILED_PROFILES, FETCH_SEND_PROFILE, FETCH_SEND_PROFILES, FETCH_SUCCESS_PROFILE, FETCH_SUCCESS_PROFILES } from "../actions";



const initialState = {
  profile: {},
  profile2: {},
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEND_PROFILE:
      return { ...state, };
    case FETCH_SUCCESS_PROFILE:
      return { ...state, profile: action.payload, profile2: action.payload };
    case FETCH_FAILED_PROFILE:
      return { ...state, profile: action.payload, profile2: action.payload };
    default:
      return state;
  }
}