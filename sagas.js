import { put, takeEvery, call, all } from 'redux-saga/effects'
import axios from "axios";
const apiUrl = "//localhost:4000/";

function takePagination(number) {
  return axios({
    method: 'get',
    url: `${apiUrl}api/ViewHeroes?page=${number}`
  })
}

function deleteHero(d) {
  return axios({
    method: 'delete',
    url: `${apiUrl}api/upload/${d.payload}`,
    data: {
      data: d.filename
    }
  })
}

export function* workerPagination(number) {
  try {
    const response = yield call(takePagination, number);
    const data = response.data

    yield put({ type: 'PAGINATION_TO_PROPS', payload: data })
  } catch (error) {
    yield console.log(error)
  }
}

export function* workerDeleteHero(d) {

  try {
    yield call(deleteHero, d);
    yield put({ type: 'PAGINATION_START', payload: d.currentPage })
  } catch (error) {
    yield console.log(error)
  }
}





export function* watchPagingation() {

  yield takeEvery('PAGINATION_START', workerPagination)
}

export function* watchDelete() {

  yield takeEvery('DELETE_HERO', workerDeleteHero)
}


// обратите внимание, как мы экспортируем rootSaga
// единая точка входа для запуска всех Саг одновременно
export default function* rootSaga() {
  yield all([
    watchPagingation(),
    watchDelete()
  ])
}