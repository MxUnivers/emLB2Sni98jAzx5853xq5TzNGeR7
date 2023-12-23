import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import offreReducer from "./reducerAll/offreReducer";
import messageReducer from "./reducerAll/messageReducer";
import candidaturesReducer from "./reducerAll/candidaturesReducer";
import postsReducer from "./reducerAll/postsReducer";
import reducer from "./reducer";
import commentsReducer from "./reducerAll/commentsReducer";


const rootReducer = combineReducers({
    reducer:reducer,
    offres: offreReducer,
    messages: messageReducer,
    candidatures: candidaturesReducer,
    posts: postsReducer,
    comments: commentsReducer,
    // ... autres reducers pour les entités restantes
  });

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;