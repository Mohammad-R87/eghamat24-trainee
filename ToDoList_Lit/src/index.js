// Import Package
import {LitElement, html} from "lit";
import {router} from "lit-element-router"
// Import Style
import {bootstrap} from './assets/js/bootstrap';
import {style} from './assets/js/style';
import {custom} from './assets/js/custom';
// Import Components
import './components/list-tasks.js';
import './components/add-form.js'
import "./router/app-link";
import "./router/app-main";

export class TodoApp extends router(LitElement) {
    static properties = {
        listTasks: {},
        isHide: {},
        filter: {},
        route: {type: String},
    };

    static get routes() {
        return [
            {
                name: "home",
                pattern: "",
            },
            {
                name: "new",
                pattern: "new"
            },
        ];
    }

    static styles = [bootstrap, style, custom];

    constructor() {
        super();
        this.listTasks = JSON.parse(localStorage.getItem('missions')) || [];
        this.isHide = localStorage.getItem('isHide') === 'true' ? true : false;
        this.filter = false;
        this.route = "";
    };

    router(route) {
        this.route = route;
    }

    render() {
        return html`
            <nav class="w-100 col-md-12 d-flex justify-content-center align-items-center">
                <div class="d-flex align-items-center justify-content-between col-md-6">
                    <div class="d-flex align-items-center text-primary">
                        <h2 class="m-0">ToDo List</h2>
                    </div>
                    <div class="d-flex align-items-center router">
                        <app-link href="/">Tasks</app-link>
                        <app-link href="/new">Add</app-link>
                    </div>
                </div>
            </nav>
            <app-main active-route=${this.route}>
                <list-tasks route="home" .filter=${this.filter} .isHide=${this.isHide}></list-tasks>
                <add-form route="new"></add-form>
            </app-main>
        `;
    }
}

customElements.define('todo-app', TodoApp);