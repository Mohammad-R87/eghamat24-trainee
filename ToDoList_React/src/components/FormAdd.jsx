import React, {useState, useEffect, useRef} from "react";

function Add({setItem, item, onSubmit}) {
    let titleRef = useRef();
    let dateRef = useRef();

    useEffect(() => {
        titleRef.current.focus();
    })

    const handelChange = e => {
        setItem((prev) => {
            return {
                id: Date.now(),
                title: titleRef.current.value,
                date: dateRef.current.value,
                isComplete: prev.isComplete
            }
        })
    }

    return <>
        <div className="container-fluid mt-5">
            <div className="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-6 offset-xl-3">
                <div className="card card-primary">
                    <div className="card-header">
                        <h4>Add New Task</h4>
                    </div>
                    <form onChange={handelChange}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input ref={titleRef} type="text"
                                       name="title" id="title" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="due-date">Due Date</label>
                                <input ref={dateRef} type="date"
                                       name="due-date" id="due-date" className="form-control"/>
                            </div>
                            <div className="form-group mt-5">
                                <button type="submit" onClick={onSubmit}
                                        className="btn btn-primary btn-lg btn-block">ADD
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Add;