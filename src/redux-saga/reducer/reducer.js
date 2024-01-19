import { GET_DATA_PROGRESS, GET_DATA_SUCCESS, GET_DATA_ERROR, DELETE_DATA_PROGRESS, DELETE_DATA_SUCCESS, DELETE_DATA_ERROR } from "../action/action";

const initialState = {
    data: [],
    isLoading: false,
    isError: null,
}


const dataReducer = (state = { ...initialState }, action) => {
    console.log(action);

    switch (action.type) {
        case GET_DATA_PROGRESS:
            return {
                ...state,
                isLoading: true,
                isError: null
            }

        case GET_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: null,
                data: action.data
            }
        }

        case GET_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.data
            }
        }

        // DELETE PRODUCT
        case DELETE_DATA_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }

        case DELETE_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: state.data.filter(val => val.id !== action.data),
                isError: null
            }
        }

        case DELETE_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        }

        default:
            return state;
    }
}

export default dataReducer