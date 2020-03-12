import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const currLocaleSelector = store => store.locale.currLocale;
export const userDataSelector = store => store.user.userData;
export const newsDataSelector = store => store.news;
export const loadingActionsSelector = store => store.ui.loader.actions;
export const refreshingActionsSelector = store => store.ui.loader.refreshing;

export const checkIfLoadingSelector = createSelector(
  loadingActionsSelector,
  loadingActions => memoize(actionsToCheck => loadingActions.some(action => actionsToCheck.includes(action.name)))
);

export const checkIfRefreshingSelector = createSelector(
  refreshingActionsSelector,
  refreshingActions => memoize(actionToCheck => refreshingActions.some(action => action === actionToCheck))
);

export const updatingItemIdSelector = createSelector(
  loadingActionsSelector,
  loadingActions =>
    memoize(actionToCheck => {
      const action = loadingActions.find(
        action =>
          actionToCheck === action.name &&
          (Number.isInteger(action.params?.id) || typeof action.params?.id === 'string')
      );
      return action?.params.id;
    })
);
