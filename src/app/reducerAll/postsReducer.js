// reducer.js

import { FETCH_FAILED_POSTS, FETCH_SEND_POSTS, FETCH_SUCCESS_POSTS } from "../actions";



const initialState = {
  posts: [],
  posts2: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEND_POSTS:
      return { ...state, };
    case FETCH_SUCCESS_POSTS:
      return { ...state, posts: action.payload, posts2: action.payload };
    case FETCH_FAILED_POSTS:
      return { ...state, posts: action.payload, posts2: action.payload };
    default:
      return state;
  }
}