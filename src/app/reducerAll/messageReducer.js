

// reducer.js

import { FETCH_FAILED_MESSAGES, FETCH_SEND_MESSAGES, FETCH_SUCCESS_MESSAGES } from "../actions";

const initialState = {
  messages: [],
  messages2: [],
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEND_MESSAGES:
      return { ...state, };
    case FETCH_SUCCESS_MESSAGES:
      return { ...state, messages: action.payload, messages2: action.payload };
    case FETCH_FAILED_MESSAGES:
      return { ...state, messages: action.payload, messages2: action.payload };
    default:
      return state;
  }
}