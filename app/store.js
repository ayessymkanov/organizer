import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import NotesListReducer from './reducers/NotesListReducer'

const reducer = combineReducers({
  notesList: NotesListReducer
})

const store = createStore(reducer, {}, applyMiddleware(logger))

export default store
