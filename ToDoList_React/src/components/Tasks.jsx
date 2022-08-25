import React, {useState} from 'react';
import Task from './Task';

function Tasks(props) {

    return <>
        <div className="container-fluid mt-4">
            <div className="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-8 offset-xl-3 d-flex">
                <div className="card card-primary col-xl-9">
                    <div className="card-header justify-content-between">
                        <h4>List Tasks</h4>
                        <div className="d-flex align-items-center">
                            <ul className="d-flex align-items-center m-0 sp-cal-title">
                                <li className="text-primary mr-4 pointer"><i className="fa-solid fa-angle-left"></i>
                                </li>
                                <span className="text-primary cap">2022-08-25</span>
                                <li className="text-primary ml-4 pointer"><i className="fa-solid fa-angle-right"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="card" className="card-body scroll">
                        <Task tasks={props.tasks} completeTask={props.completeTask} removeTask={props.removeTask}/>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <div>
                        <span className="mr-5 text-primary">
                            <i className="fa-solid fa-table-list"></i> All: 5
                        </span>
                            <span className="mr-5 text-success">
                            <i className="fa-regular fa-circle-check"></i> Done: 3
                        </span>
                            <span className="mr-5 text-danger">
                            <i className="fa-solid fa-xmark"></i> UnDone: 2
                        </span>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check" />
                            <label for="check" className="custom-control-label">Done</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Tasks;