import { DELETE_DATA_ERROR, DELETE_DATA_SUCCESS, GET_DATA_ERROR, GET_DATA_SUCCESS } from "../../action/action";
import { get_data } from "../../api/api";
import { call, put } from "redux-saga/effects";
import { delete_data } from "../../api/api";


// get data function
export function* handle_get_data(action) {
    try {
        const res = yield call(get_data, action)

        const data = res.data;
        const status = res.status;

        if (status === 200) {
            yield put({ type: GET_DATA_SUCCESS, data })
        } else {
            yield put({ type: GET_DATA_ERROR, data })
        }

    } catch (error) {
        yield put({ type: GET_DATA_ERROR, error })
    }
}


// delete product data
export function* handle_delete_data(action) {
    console.log(action, 'action from handleDelete');
    try {
        const res = yield call(delete_data, action)
        console.log(res, 'from manage delete');
        const status = res.status;
        const data = res.data;

        if (status === 200 || status === 201) {
            yield put({ type: DELETE_DATA_SUCCESS, data });
        } else {
            yield put({ type: DELETE_DATA_ERROR, data });
        }
    } catch (e) {
        yield put({ type: DELETE_DATA_ERROR, e })
        console.log(e);
    }
}