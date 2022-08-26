import { LitElement, html } from "lit";

import { bootstrap } from "../assets/js/bootstrap.js";
import { style } from "../assets/js/style.js";
import { custom } from "../assets/js/custom.js";

class AddForm extends LitElement {
    static properties = {
        listTasks: {
            type: Array,
        },
    };

    static styles = [bootstrap, style, custom];

    constructor() {
        super();
        this.listTasks = [];
    }

    render() {
        const addTaskToDOM = html`
            <div class="container-fluid mt-5">
                <div class="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-6 offset-xl-3">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h4>Add New Task</h4>
                        </div>
                        <form @submit=${this._addTask}>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" name="title" id="title" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="date">Due Date</label>
                                    <input type="date" name="due-date" id="date" class="form-control" />
                                </div>
                                <div class="form-group mt-5">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">ADD</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
        return html`${addTaskToDOM}`;
    }

    get title() {
        return this.renderRoot?.querySelector("#title") ?? null;
    }

    get date() {
        return this.renderRoot?.querySelector("#date") ?? null;
    }

    _setLocalStorage() {
        window.localStorage.setItem("missions", JSON.stringify(this.listTasks));
    }

    _addTask(e) {
        e.preventDefault();

        if (this.title.value == "" || this.date.value == "") {
            return undefined;
        } else {
            this.listTasks = [
                ...this.listTasks,
                {
                    id: Date.now(),
                    title: this.title.value,
                    date: this.date.value,
                    completed: false,
                },
            ];
            this.title.value = "";
            this.date.value = "";
            this._setLocalStorage();
        }
    }
}

customElements.define("add-form", AddForm);
