import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  ActiveUser: {
    name: "",
    email: "",
    password: "",
  },
};

export function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      const { name, email, password } = payload;
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        ActiveUser: { name, email, password },
      };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}
