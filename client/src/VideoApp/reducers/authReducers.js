import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  // isSignedIn: null,
  isSignedIn: null,
  userId: null,
  userImage: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.getId(),
        userImage: action.payload.getImageUrl(),
        userEmail: action.payload.getEmail().split("@")[0],
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, userImage: null };

    default:
      return state;
  }
};
