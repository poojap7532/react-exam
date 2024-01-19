import { all } from "@redux-saga/core/effects"
import { handle_delete_data_saga, handle_get_data_saga } from "./root/rootDataSaga"


export function* rootSaga() {
    yield all([handle_get_data_saga(), handle_delete_data_saga()])
}