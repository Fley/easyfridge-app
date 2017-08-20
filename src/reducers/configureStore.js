import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './index';

const configureStore = (initialState) => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  // const httpErrorHandler = store => next => action => {
  //   const result = next(action);
  //   if (result.error) {
  //     console.error(result.error);
  //   }
  //   if (result.error && result.error.hasOwnProperty('status')) {
  //     const { status } = result.error;
  //     switch (status) {
  //       case 401:
  //         store.dispatch({ type: 'LOGOUT' });
  //         break;
  //       default:
  //     }
  //   }
  // };
  // middlewares.push(httpErrorHandler);


  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./', () => {
      const nextRootReducer = require('./index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;