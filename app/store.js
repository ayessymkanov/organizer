import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import notesList from './reducers/notesList'

const reducer = combineReducers({
  notesList
})

const store = createStore(reducer, {}, applyMiddleware(logger))

export default store
