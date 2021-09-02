import axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { CREATE, LOAD_TODOS, EDIT_TODO, CHECK_TODO, REMOVE } from 'store/actions/actionTypes';
import { fetchTodos } from 'store/actions/actionCreators';

export function* Watchers(): Generator {
  yield takeLatest(CREATE, handleCreate);
  yield takeLatest(LOAD_TODOS, handleLoad);
  yield takeLatest(CHECK_TODO, handleCheck);
  yield takeLatest(REMOVE, handleRemove);
  yield takeLatest(EDIT_TODO, handleEdit);
}

const BASE_URL = 'http://dummy-server.io/todo';
const options = {
  headers: { 'Content-Type': 'application/json' },
};

export function requestCreate(): Promise<AxiosResponse> {
  return axios.post(`${BASE_URL}/todo`, { content: 'string' }, options);
}

export function* handleCreate() {
  try {
    const response: AxiosResponse = yield call(requestCreate);
    alert(response.data.msg);
  } catch (e) {
    console.error(e);
  }
}

export function requestFetch(): Promise<AxiosResponse> {
  return axios.get(`${BASE_URL}/todo`);
}

export function* handleLoad() {
  try {
    const response: AxiosResponse = yield call(requestFetch);
    const { data } = response;
    yield put(fetchTodos(data.todoList));
  } catch (e) {
    console.error(e);
  }
}

export function* handleFetch() {
  try {
    const response: AxiosResponse = yield call(requestFetch);
    const { data } = response;
    yield put(fetchTodos(data.todoList));
  } catch (e) {
    console.error(e);
  }
}

export function requsetCheck(): Promise<AxiosResponse> {
  return axios.post(`${BASE_URL}/todo/1`, { isCheked: true }, options);
}

export function* handleCheck() {
  try {
    const response: AxiosResponse = yield call(requsetCheck);
    alert(response.data.msg);
  } catch (e) {
    console.error(e);
  }
}

export function requestRemove(): Promise<AxiosResponse> {
  return axios.post(`${BASE_URL}/todo/2`, {}, options);
}

export function* handleRemove() {
  try {
    const response: AxiosResponse = yield call(requestRemove);
    alert(response.data.msg);
  } catch (e) {
    console.error(e);
  }
}

export function requestEdit(): Promise<AxiosResponse> {
  return axios.post(`${BASE_URL}/todo/3`, { content: 'string' }, options);
}

export function* handleEdit() {
  try {
    const response: AxiosResponse = yield call(requestEdit);
    alert(response.data.msg);
  } catch (e) {
    console.error(e);
  }
}
