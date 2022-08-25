import React, {useState, useEffect, useRef} from "react";

function Add(props) {
    const [inputTitle, setTitle] = useState(props.edit ? props.edit.value : '');
    const [inputDate, setDate] = useState(props.edit ? props.edit.value : '');

    let titleRef = useRef();
    let dateRef = useRef();

    useEffect(() => {
        titleRef.current.focus();
    })

    const handelChangeTitle = e => {
        setTitle(e.target.value);
    }

    const handelChangeDate = e => {
        setDate(e.target.value)
    }

    const handelSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Date.now(),
            title: inputTitle,
            date: inputDate,
            isComplete: false
        });
        setTitle('');
        setDate('');
    }

    return <>
        <div className="container-fluid mt-5">
            <div className="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-6 offset-xl-3">
                <div className="card card-primary">
                    <div className="card-header">
                        <h4>Add New Task</h4>
                    </div>
                    <form onSubmit={handelSubmit}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input onChange={handelChangeTitle} value={inputTitle} ref={titleRef} type="text"
                                       name="title" id="title" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="due-date">Due Date</label>
                                <input onChange={handelChangeDate} value={inputDate} ref={dateRef} type="date"
                                       name="due-date" id="due-date" className="form-control"/>
                            </div>
                            <div className="form-group mt-5">
                                <button type="submit" onClick={handelSubmit}
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