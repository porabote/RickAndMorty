import { put, takeEvery, call } from 'redux-saga/effects'
import { setRecords, fetchRecords } from '../reducers/characters-actions'
import { SET_RECORDS, FETCH_RECORDS } from '../reducers/characters-types'
import store from '../store'

// todo API Service instead
const fetchListFromApi = () => {

    const pageId = store.getState().characters.currentPage;
    return fetch(`https://rickandmortyapi.com/api/character/?page=${pageId}`)
    
}

function* fetchRecordsWorker() {
    
    const data = yield call(fetchListFromApi)
    const json = yield call( () => new Promise( res => res(data.json()) ) );
    yield put(setRecords(json))
    
}

function* characterWatcher() {
    
    yield takeEvery(FETCH_RECORDS, fetchRecordsWorker)
    
}

export {
    characterWatcher
}