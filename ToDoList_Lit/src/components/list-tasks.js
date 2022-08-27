import {LitElement, html} from "lit";

import {bootstrap} from '../assets/js/bootstrap';
import {style} from '../assets/js/style.js';
import {custom} from '../assets/js/custom.js';

const get_tasks = () => {
    const data = localStorage.getItem('missions')
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

class ListTasks extends LitElement {
    static properties = {
        listTasks: {type: Array},
        filter: {type: Boolean},
        isHide: {type: Boolean},
    };

    static styles = [bootstrap, style, custom];

    constructor() {
        super();
        this.listTasks = JSON.parse(localStorage.getItem('missions')) || [];
        // this.filter = false;
        this.isHide = true;
    };

    render() {
        const TODO_CASES = {
            false: this.listTasks.filter(item => !item.completed),
        };
        const TODO_DEFAULT_CASE = this.listTasks;
        const tasks = TODO_CASES[this.filter] || TODO_DEFAULT_CASE;

        const listTasks = html`
            <div class="container-fluid mt-5">
                <div class="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-8 offset-xl-3 d-flex">
                    <div class="card card-primary col-xl-9">
                        <div class="card-header justify-content-between">
                            <h4>Tasks</h4>
                            <div class="d-flex align-items-center">
                                <ul class="d-flex align-items-center m-0 sp-cal-title">
                                    <li class="text-primary mr-4 pointer"><i class="fa-solid fa-angle-left"></i></li>
                                    <span class="text-primary cap"></span>
                                    <li class="text-primary ml-4 pointer"><i class="fa-solid fa-angle-right"></i></li>
                                </ul>
                                <button @click=${this._hideHandler} class="btn btn-outline-primary ml-4"><i
                                        class="fa-solid fa-eye-slash"></i> <span>Hide & Show</span></button>
                            </div>
                        </div>
                        <div id="card" class=${this.isHide ? 'card-body' : 'card-body filter'}>
                            ${tasks.map(item => html`
                                <div class=${item.completed ? 'border-success d-flex align-items-center justify-content-between list-group-item-action mt-2 p-1 item task_animation' : 'border-danger d-flex align-items-center justify-content-between list-group-item-action mt-2 p-1 item task_animation'}>
                                    <strong @click=${() => this._completed(item)}
                                            class=${item.completed ? 'disabled d-flex align-items-center justify-content-center m-0 p-3' : 'd-flex align-items-center justify-content-center m-0 p-3'}>${item.title}</strong>
                                    <div class="d-flex align-items-center">
                                        <button @click=${() => this._deleteTask(item)}
                                                class="btn btn-danger btn-action text-center mr-2">
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>
                                    </div>
                                </div>
                            `)}
                        </div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <div>
                                <span class="mr-5 text-primary"> <i
                                        class="fa-solid fa-table-list"></i> <strong>All: ${this._allCount(this.listTasks)}</strong> </span>
                                <span class="mr-5 text-success"> <i class="fa-regular fa-circle-check"></i> <strong>Done: ${this._doneCount(this.listTasks)}</strong> </span>
                                <span class="mr-5 text-danger"> <i
                                        class="fa-solid fa-xmark"></i> <strong>UnDone: ${this._unDoneCount(this.listTasks)}</strong> </span>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" @click=${this._clickHandler} name="all"
                                       class="custom-control-input lg" id="check"/>
                                <label for="check" class="custom-control-label">Done</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return html`${listTasks}`;
    }

    _setLocalStorage() {
        window.localStorage.setItem('missions', JSON.stringify(this.listTasks));
    }

    _deleteTask(item) {
        this.listTasks = this.listTasks.filter(task => task.id !== item.id);
        this._setLocalStorage();
    }

    _completed(item) {
        item.completed = !item.completed;
        this.requestUpdate();

        this._setLocalStorage();
    }

    _clickHandler(e) {
        this.filter = !this.filter;
    }

    _hideHandler(e) {
        this.isHide = !this.isHide;
        window.localStorage.setItem('isHide', this.isHide);
    }

    _allCount(tasks) {
        let sum = tasks.length;
        return sum;
    }

    _doneCount(tasks) {
        let sum = 0;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].completed == true) {
                sum++;
            }
        }
        return sum;
    }

    _unDoneCount(tasks) {
        let sum = 0;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].completed == false) {
                sum++;
            }
        }
        return sum;
    }
}

customElements.define('list-tasks', ListTasks);