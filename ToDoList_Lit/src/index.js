// Import Package
import {LitElement, html} from "lit";
// Import Style
import {bootstrap} from './assets/js/bootstrap';
import {style} from './assets/js/style';
import {custom} from './assets/js/custom';
// Import Components
import './components/list-tasks.js';
import './components/add-form.js'

export class TodoApp extends LitElement {
    static properties = {
        listTasks: {},
        isHide: {},
        filter: {},
    };

    static styles = [bootstrap, style, custom];

    constructor() {
        super();
        this.listTasks = JSON.parse(localStorage.getItem('missions')) || [];
        this.isHide = localStorage.getItem('isHide') === 'true' ? true : false;
        this.filter = 'all';
    };

    render() {
        return html`
            <nav class="w-100 col-md-12 d-flex justify-content-center align-items-center">
                <div class="d-flex align-items-center justify-content-between col-md-6">
                    <div class="d-flex align-items-center text-primary">
                        <h2 class="m-0">ToDo List</h2>
                    </div>
                    <div class="d-flex align-items-center router">
                        <a href="/">Tasks</a>
                        <a href="/new">Add</a>
                    </div>
                </div>
            </nav>
            <list-tasks .listTasks=${this.listTasks} .filter=${this.filter} .isHide=${this.isHide}></list-tasks>
            <add-form></add-form>
        `;
    }
}

customElements.define('todo-app', TodoApp);