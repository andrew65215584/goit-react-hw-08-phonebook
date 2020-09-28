export const logger = ({ dispatch, getState }) => next => action => {
  return typeof action === 'function'
    ? action(dispatch, getState)
    : next(action);
};
