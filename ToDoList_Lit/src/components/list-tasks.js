import {LitElement, html} from "lit";

import {bootstrap} from '../assets/js/bootstrap';
import {style} from '../assets/js/style.js';
import {custom} from '../assets/js/custom.js';

class ListTasks extends LitElement {
    static properties = {
        listTasks: {type: Array},
        filter: {type: String},
        isHide: {type: Boolean},
    };

    static styles = [bootstrap, style, custom];

    constructor() {
        super();
        this.listTasks = [];
        this.filter = 'all';
        this.isHide = false;
    };

    render() {
        const TODO_CASES = {
            undone: this.listTasks.filter(item => !item.completed), done: this.listTasks.filter(item => item.completed),
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
                                        class="fa-solid fa-eye-slash"></i> <span>Hide</span></button>
                            </div>
                        </div>
                        <div id="card" class=${this.isHide ? 'cord-body' : 'cord-body filter'}>
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
                    </div>
                    <div class="card card-primary h-100 col-xl-2 mx-3">
                        <div class="card-header text-center"><h4>Filtering</h4></div>
                        <div class="card-body py-3">
                            <ul @click=${this._clickHandler} class="position-relative">
                                <button name="all" class="w-100 btn btn-outline-dark my-2 active">
                                    <i class="fa-solid fa-table-list"></i>
                                    All
                                </button>
                                <button name="done" class="w-100 btn btn-outline-success my-2">
                                    <i class="fa-regular fa-circle-check"></i>
                                    Done
                                </button>
                                <button name="undone" class="w-100 btn btn-outline-danger my-2">
                                    <i class="fa-solid fa-xmark"></i>
                                    UnDone
                                </button>
                            </ul>
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
        if (e.target !== e.currentTarget) {
            this.filter = e.target.name;

            const buttons = this.renderRoot.querySelectorAll('button[name]');
            buttons.forEach(button => button.classList.remove('active'));
            e.target.classList.add('active');
        }
    }

    _hideHandler(e) {
        this.isHide = !this.isHide;
        window.localStorage.setItem('isHide', this.isHide);
    }
}

customElements.define('list-tasks', ListTasks);