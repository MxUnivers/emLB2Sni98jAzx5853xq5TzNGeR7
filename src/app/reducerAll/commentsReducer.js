// reducer.js

import { FETCH_FAILED_COMMENTS, FETCH_SEND_COMMENTS, FETCH_SUCCESS_COMMENTS } from "../actions";



const initialState = {
  comments: [],
  comments2: [],
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEND_COMMENTS:
      return { ...state, };
    case FETCH_SUCCESS_COMMENTS:
      return { ...state, comments: action.payload, comments2: action.payload };
    case FETCH_FAILED_COMMENTS:
      return { ...state, comments: action.payload, comments2: action.payload };
    default:
      return state;
  }
}