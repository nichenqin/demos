export default function ({ dispatch }) {
  return next => action =>
    (!action.payload || !action.payload.then) ?
      // next will find next middleware
      next(action) :
      action.payload.then(response => {
        // replace the promise with the response
        // use then helper
        const newAction = { ...action, payload: response };
        // dispath will run the very action=>reducer circle again
        dispatch(newAction);
      });
}
