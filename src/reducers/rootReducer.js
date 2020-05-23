import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import authReducer from './authReducer';
import twiitReducer from './twiitReducer';
import replyReducer from "./commentReducer";


const rootReducer = combineReducers({auth:authReducer,twiit:twiitReducer,reply:replyReducer,firebase:firebaseReducer,firestore:firestoreReducer});

export default rootReducer

