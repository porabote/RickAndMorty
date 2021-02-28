import { combineReducers } from 'redux'

import {charactersReducer} from '../reducers/characters-reducer'

export const rootReducer = combineReducers({
    characters: charactersReducer
})

export default rootReducer