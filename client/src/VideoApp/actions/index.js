// import faker from "faker";
import _ from "lodash";
// import moment from "react-moment";
// import moment from "moment";
import axios from "axios";
import history from "../history";
import {
  SELECT_VIDEO,
  SIGN_IN,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  SIGN_OUT,
  FETCH_VIDEOS,
  SHOW_MODAL,
  CLOSE_MODAL,
} from "./types";
const BASE_URL = "http://localhost:3001";

export const showModal = (trueOrFalse) => {
  return {
    type: SHOW_MODAL,
    payload: trueOrFalse,
  };
};

export const closeModal = (trueOrFalse) => {
  return {
    type: CLOSE_MODAL,
    payload: trueOrFalse,
  };
};

export const selectVideo = (streams) => {
  return {
    type: SELECT_VIDEO,
    payload: streams,
  };
};
// selectedVideo, setSelectedVideo
export const signIn = (userProfile) => {
  return {
    type: SIGN_IN,
    payload: userProfile,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// -------------------------------youtube
export const fetchVideos = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/videos`);
  dispatch({ type: FETCH_VIDEOS, payload: response.data });
};
// -------------------------------

export const createStream = (formValues) => async (dispatch, getState) => {
  // _.set(formValues, "description", formValues.Stream_Description);
  // _.set(formValues, "title", formValues.Stream_Title);
  // _.set(formValues, "channelTitle", formValues.Channel_Title);
  // _.set(formValues, "notes", formValues.Notes);
  // _.set(formValues, "publishTime", moment(new Date()).format("MM-DD-YYYY"));
  // _.set(formValues, "imgUrl", faker.random.image());

  const { userId } = getState().auth;
  const response = await axios.post(`${BASE_URL}/streams`, {
    ...formValues,
    userId,
  });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/streams`);
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  // _.set(formValues, "description", formValues.Stream_Description);
  // _.set(formValues, "title", formValues.Stream_Title);
  // _.set(formValues, "channelTitle", formValues.Channel_Title);
  // _.set(formValues, "Notes", formValues.Notes);
  // _.set(formValues, "publishTime", moment(new Date()).format("MM-DD-YYYY"));

  const response = await axios.patch(`${BASE_URL}/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  const response = await axios.delete(`${BASE_URL}/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
