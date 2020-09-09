import { combineReducers } from "redux";
import authReducers from "./authReducers";
import { reducer as formReducers } from "redux-form";
import streamReducers from "./streamReducers";
import videoReducers from "./videoReducers";
import selectReducers from "./selectReducers";
import modalReducers from "./modalReducers";

import carouselReducers from "./carouselReducers";
export default combineReducers({
  // carousel: carouselReducers,
  auth: authReducers,
  form: formReducers,
  streams: streamReducers,
  videos: videoReducers,
  selectedVideo: selectReducers,
  modal: modalReducers,
});
