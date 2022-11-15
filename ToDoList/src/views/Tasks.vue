<template>
    <div class="container-fluid mt-5">
        <div class="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-8 offset-xl-3 d-flex">
            <div class="card card-primary col-xl-9">
                <div class="card-header justify-content-between">
                    <h4>{{ filter }} Tasks</h4>
                    <div class="d-flex align-items-center">
                        <ul class="d-flex align-items-center m-0 sp-cal-title">
                            <li class="text-primary mr-4 pointer"><i class="fa-solid fa-angle-left"></i></li>
                            <span class="text-primary cap"></span>
                            <li class="text-primary ml-4 pointer"><i class="fa-solid fa-angle-right"></i></li>
                        </ul>
                        <button id="btn" @click="action" class="btn btn-outline-primary ml-4"><i
                            class="fa-solid fa-eye-slash"></i> <span>Hide</span></button>
                    </div>
                </div>
                <div id="card" class="card-body">
                    <Task
                        v-for="(task , index) in tasks"
                        :key="task.id"
                        :input="task.title"
                        @showFunc="tasks.splice(index , 1)"
                        @change-condition="task.condition = !task.condition"
                        :Condition="[{'disabled': !task.condition} , {'border-success': !task.condition}]"
                        v-show="filter === 'All' ? true : (filter === 'Done' ? !task.condition : task.condition)"
                    />
                </div>
            </div>
            <div class="card card-primary h-100 col-xl-2 mx-3">
                <div class="card-header text-center"><h4>Filtering</h4></div>
                <div class="card-body py-3">
                    <ul :class="{'All' : filter === 'All', 'Done' : filter === 'Done', 'UnDone' : filter === 'UnDone'}"
                        class="position-relative">
                        <li @click="filter = 'All'" class="w-100 btn btn-outline-dark my-2"><i
                            class="fa-solid fa-table-list"></i>
                            All
                        </li>
                        <li @click="filter = 'Done'" class="w-100 btn btn-outline-success my-2"><i
                            class="fa-regular fa-circle-check"></i> Done
                        </li>
                        <li @click="filter = 'UnDone'" class="w-100 btn btn-outline-danger my-2"><i
                            class="fa-solid fa-xmark"></i>
                            UnDone
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Task from "@/components/Task";
import {ref} from "@vue/reactivity";
import {onUpdated} from "vue";

export default {

    data() {
        return {
            tasks: null, filter: null,
        };
    },

    components: {
        Task,
    },

    mounted() {
        moment.locale('en');
        let date = new moment();
        let year = date.year();
        let month = date.month();
        let day = date.date();
        const filter = ref("All");
        let nowSFC = this;
        let tasks = [];
        let data = localStorage.getItem("missions") ? JSON.parse(localStorage.getItem("missions")) : {
            Tasks: [],
        };


        let capBtns = document.getElementsByClassName('sp-cal-title')[0];
        capBtns = capBtns.getElementsByTagName('li');
        render(data.Tasks);

        capBtns[0].addEventListener('click', e => {
            day++;
            if (day > 31) {
                day = 1;
                month++;
            }
            render(data.Tasks);
        });
        capBtns[1].addEventListener('click', e => {
            day--;
            if (day < 0) {
                day = 31;
                month--
            }
            render(data.Tasks);
        })

        function render(Record) {
            let cap = document.getElementsByClassName('cap')[0];
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let d = String(day);
            let m = String(month + 1);
            let y = String(year);
            let toDay = `${y}-0${m}-${d}`;
            for (let i = 0; i < Record.length; i++) {
                if (Record[i].date == toDay) {
                    nowSFC.tasks.push(Record[i]);
                }
            }
        }

        this.tasks = tasks;
        this.filter = filter;

        onUpdated(() => {
            localStorage.setItem("missions", JSON.stringify(data));
        });
    },

    setup() {
        let hidden = false;

        function action() {
            let card = document.getElementById('card');
            let btn = document.getElementById('btn');

            hidden = !hidden;
            if (hidden) {
                card.classList.add('filter');
                btn.querySelector('i.fa-solid').classList.remove('fa-eye-slash');
                btn.querySelector('i.fa-solid').classList.add('fa-eye');
                btn.querySelector('span').innerText = "Show";
            } else {
                card.classList.remove('filter');
                btn.querySelector('i.fa-solid').classList.remove('fa-eye');
                btn.querySelector('i.fa-solid').classList.add('fa-eye-slash');
                btn.querySelector('span').innerText = "Hide";
            }
        };

        return {
            action
        }
    },
};


</script>