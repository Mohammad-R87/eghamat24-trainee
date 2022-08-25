import React, {useState} from 'react';
import Task from './Task';

function Tasks(props) {

    return <>
        <div className="container-fluid mt-5">
            <div className="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-8 offset-xl-3 d-flex">
                <div className="card card-primary col-xl-9">
                    <div className="card-header justify-content-between">
                        <h4>Tasks</h4>
                        <div className="d-flex align-items-center">
                            <ul className="d-flex align-items-center m-0 sp-cal-title">
                                <li className="text-primary mr-4 pointer"><i className="fa-solid fa-angle-left"></i>
                                </li>
                                <span className="text-primary cap"></span>
                                <li className="text-primary ml-4 pointer"><i className="fa-solid fa-angle-right"></i>
                                </li>
                            </ul>
                            <button id="btn" className="btn btn-outline-primary ml-4"><i
                                className="fa-solid fa-eye-slash"></i>
                                <span>Hide</span></button>
                        </div>
                    </div>
                    <div id="card" className="card-body">
                        <Task tasks={props.tasks} completeTask={props.completeTask} removeTask={props.removeTask}/>
                    </div>
                    <div className="card-footer">
                        <span className="mr-5 text-dark">
                            <i className="fa-solid fa-table-list"></i> All: 5
                        </span>
                        <span className="mr-5 text-success">
                            <i className="fa-regular fa-circle-check"></i> Done: 3
                        </span>
                        <span className="mr-5 text-danger">
                            <i className="fa-solid fa-xmark"></i> UnDone: 2
                        </span>
                    </div>
                </div>
                <div className="card card-primary h-100 col-xl-2 mx-3">
                    <div className="card-header text-center"><h4>Filtering</h4></div>
                    <div className="card-body py-3">
                        <ul className="position-relative">
                            <li className="w-100 btn btn-outline-dark my-2"><i
                                className="fa-solid fa-table-list"></i> All
                            </li>
                            <li className="w-100 btn btn-outline-success my-2"><i
                                className="fa-regular fa-circle-check"></i> Done
                            </li>
                            <li className="w-100 btn btn-outline-danger my-2"><i
                                className="fa-solid fa-xmark"></i> UnDone
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Tasks;