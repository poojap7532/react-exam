import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dataReducer from '../redux-saga/reducer/reducer'
import { DELETE_DATA_PROGRESS } from '../redux-saga/action/action'

function Data() {

    const title = useRef();

    const [result, setresult] = useState([])

    let ind = 0

    const arr = JSON.parse(localStorage.getItem("data")) || [];


    // add data from local storage
    const handlesubmit = () => {
        const data = {
            title: title.current.value,
        };

        console.log(data);
        arr.push(data);

        localStorage.setItem("data", JSON.stringify(arr));

        setresult(arr);
    };

    // delete data from local storage
    const removeData = (val, ind) => {
        console.log(val);
        console.log(ind);

        arr.splice(ind, 1);

        console.log(arr);

        localStorage.setItem("data", JSON.stringify(arr));

        setresult(arr);
    }

    const data = useSelector((state) => state.dataReducer)

    const dispatch = useDispatch()

    // delete data from card
    const deleteData = (val) => {
        console.log(val);


        dispatch({ type: DELETE_DATA_PROGRESS, payload: val })
    }

    useEffect(() => {
        setresult([...arr])
    }, [])

    return (
        <div>

            <input type="text" placeholder='enter title' name='title' ref={title} class="bg" />

            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handlesubmit}>
                Add
            </button>

            {/* SHOW LOCAL STORAGE DATA */}
            {/* model */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">LocalStorage Data</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            {
                                result?.map((val, ind) => {
                                    return (
                                        <div class="modal-body">
                                            <h6>{val.title}</h6>
                                            <button onClick={() => removeData(val, ind)}>Delete</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn " data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn ">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Show CARD DATA */}
            {
                data.data.map((val, ind) => {
                    return (
                        <>
                            <div className='container text-center'>
                                <div className='row align-items-center '>
                                    <div className='col'>
                                        <div class="card" style={{ width: '10rem', color: 'brown', font:'20px 900' }}>
                                            <div class="card-header">
                                                Data
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"> userId: {val.userId}</li>
                                                <li class="list-group-item"> ID : {val.id}</li>
                                                <li class="list-group-item">Title: {val.title}</li>
                                                <li class="list-group-item"><button onClick={() => deleteData(val)}>Delete</button></li>
                                                <li class="list-group-item"><button>Update</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })
            }
        </div>
    )
}

export default Data