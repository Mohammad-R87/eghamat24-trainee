// IMPORT PACKAGE
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import moment from "jalali-moment";
// IMPORT COMPONENT
import Tasks from "./components/Tasks";
import Add from "./components/FormAdd";

// RUN APP
function App() {
    const [item, setItem] = useState({ title: "", date: "", isComplete: false });
    const [tasks, setTasks] = useState(getData());
    window.localStorage.setItem("missions", JSON.stringify(tasks));
    moment.locale("en");
    let date = new moment();
    let year = date.year();
    let month = date.month();
    let day = date.date();
    let items = [];
    render(tasks);

    function getData() {
        if (JSON.parse(window.localStorage.getItem("missions")) == null) {
            return [];
        }

        return [...JSON.parse(window.localStorage.getItem("missions"))];
    }

    function render(Record) {
        let d = String(day);
        let m = String(month + 1);
        let y = String(year);
        let toDay = `${y}-0${m}-${d}`;
        for (let i = 0; i < Record.length; i++) {
            if (Record[i].date === toDay) {
                items.push(Record[i]);
            }
        }
    }

    const addTask = (e) => {
        e.preventDefault();
        if (item.title == "" || item.date == "") {
            toastError();
            return;
        }
        setTasks([item, ...tasks]);
        setItem({ title: "", isComplete: false });
        toastSuccess();
        window.location = "/";
    };

    const removeTask = (id) => {
        const removeArr = [...tasks].filter((task) => task.id !== id);
        setTasks(removeArr);
    };

    const completeTask = (id) => {
        let updateTasks = tasks.map((task) => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTasks(updateTasks);
    };

    const handelDayIncrement = () => {
        day++;
        if (day > 31) {
            day = 1;
            month++;
        }
        render(tasks);
    };

    const handelDayDecrement = () => {
        day--;
        if (day > 31) {
            day = 1;
            month++;
        }
        render(tasks);
    };

    // TOAST ERROR AND SUCCESS
    const toastError = () => {
        let elm = document.getElementById("error");
        elm.className = "show";
        setTimeout(function () {
            elm.className = elm.className.replace("show", "");
        }, 3000);
    };

    const toastSuccess = () => {
        let elm = document.getElementById("success");
        elm.className = "show";
        setTimeout(function () {
            elm.className = elm.className.replace("show", "");
        }, 3000);
    };

    // UI APP
    return (
        <>
            <nav className="w-100 col-md-12 d-flex justify-content-center align-items-center">
                <div className="d-flex align-items-center justify-content-between col-md-6">
                    <div className="d-flex align-items-center text-primary">
                        <i className="fa-solid fa-list mr-4"></i>
                        <h2 className="m-0">ToDo List</h2>
                    </div>
                    <div className="d-flex align-items-center router">
                        <NavLink to="/">Tasks</NavLink>
                        <NavLink to="/new">Add</NavLink>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/new" element={<Add onSubmit={addTask} item={item} setItem={setItem} />} />
                <Route path="/" element={<Tasks handelDayIncrement={handelDayIncrement} handelDayDecrement={handelDayDecrement} tasks={items} completeTask={completeTask} removeTask={removeTask} />} />
            </Routes>
        </>
    );
}

export default App;
