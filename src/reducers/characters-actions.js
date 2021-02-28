import { SET_RECORDS, FETCH_RECORDS } from './characters-types'

export const setRecords = payload => ({type: SET_RECORDS, payload})
export const fetchRecords = () => ({type: FETCH_RECORDS})