export default ({ dispatch }) => {
  return next => action => {

    if(!action.payload || !action.payload.then) {
      return next(action);
    }

    action
      .payload
      .then((response = null) => {
        const resolveAction = { ...action, payload: response };
        dispatch(resolveAction);
      })
      .catch((error) => {
        const rejectAction = { ...action, payload: null, error:error };
        dispatch(rejectAction);
      });
  };
};
