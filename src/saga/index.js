import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { characterWatcher } from './characters-saga'

const sagaMiddleware = createSagaMiddleware()

export function* rootWatcher() {
    yield all([
        characterWatcher()
    ])
}

export default sagaMiddleware