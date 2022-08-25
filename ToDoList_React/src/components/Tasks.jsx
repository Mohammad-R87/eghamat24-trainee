// IMPORT PACKAGE
import React, {useState, useEffect} from 'react';
// IMPORT COMPONENT
import Task from './Task';

// RUN TASKS
function Tasks(props) {
    let [checked, setChecked] = useState(false);
    let [items, setItems] = useState([]);

    useEffect(() => {
        handelChange();
    }, [])


    function handelChange() {
        checked = !checked;
        setChecked(checked);
        items = [];
        setItems(items);

        for (let i = 0; i < props.tasks.length; i++) {
            if (props.tasks[i].isComplete == checked) {
                items.push(props.tasks[i]);
            }
        }
    }

    // ALL FUNCTION COUNTER
    function allCount() {
        let sum = props.tasks.length;
        return sum;
    }

    function doneCount() {
        let sum = 0;
        for (let i = 0; i < props.tasks.length; i++) {
            if (props.tasks[i].isComplete == true) {
                sum++;
            }
        }
        return sum;
    }

    function unDoneCount() {
        let sum = 0;
        for (let i = 0; i < props.tasks.length; i++) {
            if (props.tasks[i].isComplete == false) {
                sum++;
            }
        }
        return sum;
    }

    // UI TASKS
    return <>
        <div className="container-fluid mt-4">
            <div className="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-8 offset-xl-3 d-flex">
                <div className="card card-primary col-xl-9">
                    <div className="card-header justify-content-between">
                        <h4>List Tasks</h4>
                        <div className="d-flex align-items-center">
                            <ul className="d-flex align-items-center m-0 sp-cal-title">
                                <li onClick={props.handelDayIncrement} className="text-primary mr-4 pointer"><i
                                    className="fa-solid fa-angle-left"></i>
                                </li>
                                <span className="text-primary cap"></span>
                                <li onClick={props.handelDayDecrement} className="text-primary ml-4 pointer"><i
                                    className="fa-solid fa-angle-right"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="card" className="card-body scroll">
                        <Task tasks={items} completeTask={props.completeTask} removeTask={props.removeTask}/>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <div>
                        <span className="mr-5 text-primary">
                            <i className="fa-solid fa-table-list"></i> <strong>All: {allCount()}</strong>
                        </span>
                            <span className="mr-5 text-success">
                            <i className="fa-regular fa-circle-check"></i> <strong>Done: {doneCount()}</strong>
                        </span>
                            <span className="mr-5 text-danger">
                            <i className="fa-solid fa-xmark"></i> <strong>UnDone: {unDoneCount()}</strong>
                        </span>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" checked={checked} onChange={handelChange}
                                   className="custom-control-input" id="check"/>
                            <label htmlFor="check" className="custom-control-label">Done</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Tasks;