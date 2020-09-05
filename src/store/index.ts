import { applyMiddleware, compose, createStore } from 'redux';

// TODO: NODE_ENVによってloggerを読み込むか決定
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from '@appReducer/index';
import rootSaga from '@appSaga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;