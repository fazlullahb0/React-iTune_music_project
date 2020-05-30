import { takeEvery, call, cancel, put } from "redux-saga/effects"
import * as itunesSearchActions from "./actions"
import itunesSearchApi from './itunesSearchApi'

function* searchItunesSaga(event) {
    const { searchTerm } = event
    
    if(!searchTerm.length) {
        yield cancel()
    }

    const itunesSearch = yield call(itunesSearchApi, searchTerm)

    const { results, error } = itunesSearch

    if(error) {
        yield cancel()
    }

   yield put({
       type: itunesSearchActions.SET_ITUNES_SEARCH_RESULTS,
       results: results.filter(elem => elem.wrapperType === "track")
   })
}

function* itunesSearchWatcher() {
    yield takeEvery(itunesSearchActions.SEARCH_ITUNES, searchItunesSaga)
}

export default itunesSearchWatcher