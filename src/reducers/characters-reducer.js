import { SET_RECORDS, FETCH_RECORDS } from './characters-types'

const initialState = {
    records: [],
    count: 0,
    pagesCount: 0,
    nextPage: null,
    bottomAxisX: 0,
    currentPage: 1
}

export const charactersReducer = (store = initialState, action) => {
    switch (action.type) {
        case SET_RECORDS:
            return {
                ...store,
                records: store.records.concat(action.payload.results),
                count: action.payload.info.count,
                pagesCount: action.payload.info.pages,
                nextPage: action.payload.info.next,
            }
        case FETCH_RECORDS:
            return {...store, currentPage: ++store.currentPage}
        default: return store
    }
}