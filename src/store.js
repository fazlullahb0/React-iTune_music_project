import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import itunesSearchReducer from "./redux-core/itunesSearch/reducer"
import itunesSearchWatcher from "./redux-core/itunesSearch/sagas"

const rootReducer = combineReducers({
    itunesSearch: itunesSearchReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(itunesSearchWatcher)

export default store