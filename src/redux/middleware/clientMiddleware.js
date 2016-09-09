export default function clientMiddleware(client) {
  return ({dispatch, getState}) => {
    return (next) => (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const {request, types, ...rest} = action; // eslint-disable-line no-redeclare
      if (!request) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      next({...rest, type: REQUEST});

      const actionRequest = request(client);
      actionRequest.then(
        (result) => next({...rest, result, type: SUCCESS}),
        (error) => next({...rest, error, type: FAILURE})
      ).catch((error) => {
        console.error('MIDDLEWARE ERROR:', error); // eslint-disable-line
        next({...rest, error, type: FAILURE});
      });

      return actionRequest;
    };
  };
}
