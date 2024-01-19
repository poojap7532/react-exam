import axios from "axios";
import { BASE_URL } from "../constant";


export function get_data() {
    return axios.get(BASE_URL).then((res) => {
        console.log(res, "from api");

        const data = res.data;
        const status = res.status;

        return {
            data, status
        }
    }).catch((err) => {
        console.log(err);
    })
}


// DELETE PRODUCT API FUNCTION
export function delete_data(action) {
    console.log(action, 'action from api delete');

    return axios.delete(BASE_URL).then((res) => {
        console.log(res, 'from api delete');
        const data = action.payload.id
        const status = res.status;
        return {
            data,
            status,
        };

    }).catch((err) => {
        console.log(err);
    })
}