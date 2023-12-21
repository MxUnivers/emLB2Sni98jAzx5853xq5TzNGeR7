// reducer.js

import { FETCH_FAILED_OFFRES_EMPLOIS, FETCH_SEND_OFFRES_EMPLOIS, FETCH_SUCCESS_OFFRES_EMPLOIS } from "../actions";



const initialState = {
    offres : [],
    offres2 : [],
};

export default function offreReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEND_OFFRES_EMPLOIS:
      return { ...state, };
    case FETCH_SUCCESS_OFFRES_EMPLOIS:
      return { ...state, offres:action.payload,offres:action.payload };
    case FETCH_FAILED_OFFRES_EMPLOIS:
      return { ...state, offres:action.payload,offres:action.payload };
    default:
      return state;
  }
}