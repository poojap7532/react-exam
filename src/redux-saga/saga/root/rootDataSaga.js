import { takeLatest } from "redux-saga/effects";
import { DELETE_DATA_PROGRESS, GET_DATA_PROGRESS } from "../../action/action";
import { handle_delete_data, handle_get_data } from "../manage/manageData";


export function* handle_get_data_saga() {
    yield takeLatest(GET_DATA_PROGRESS, handle_get_data)
}

export function* handle_delete_data_saga() {
    yield takeLatest(DELETE_DATA_PROGRESS, handle_delete_data)
}