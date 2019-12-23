import { uiActions } from 'src/constants/store/actionTypes';

const initialState = {
  popupMessage: {
    message: null,
    position: null
  }
};

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case uiActions.TOGGLE_POPUP_MESSAGE:
      return {
        ...state,
        popupMessage: {
          message: payload.message,
          position: payload.position
        }
      };
    default:
      return state;
  }
};

export default uiReducer;
