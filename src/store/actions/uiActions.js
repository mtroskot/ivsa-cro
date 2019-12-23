import { uiActions } from 'src/constants/store/actionTypes';

export const togglePopupMessage = (message, position) => ({
  type: uiActions.TOGGLE_POPUP_MESSAGE,
  payload: {
    message,
    position
  }
});
