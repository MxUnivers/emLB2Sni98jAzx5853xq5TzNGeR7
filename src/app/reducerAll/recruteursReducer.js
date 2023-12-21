// reducer.js

import { FETCH_FAILED_RECRUTERUR_PROFILES, FETCH_SEND_RECRUTERUR_PROFILES, FETCH_SUCCESS_RECRUTERUR_PROFILES } from "../actions";



const initialState = {
  recruteurs: [],
  recruteurs2: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEND_RECRUTERUR_PROFILES:
      return { ...state, };
    case FETCH_SUCCESS_RECRUTERUR_PROFILES:
      return { ...state, recruteurs: action.payload, recruteurs2: action.payload };
    case FETCH_FAILED_RECRUTERUR_PROFILES:
      return { ...state, recruteurs: action.payload, recruteurs2: action.payload };
    default:
      return state;
  }
}