import { compose, applyMiddleware, createStore } from 'redux'
import sagaMiddleware, { rootWatcher } from '../saga'
import rootReducer from './root-reducer'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(
            sagaMiddleware
        )
    ));

sagaMiddleware.run(rootWatcher)

export default store;
