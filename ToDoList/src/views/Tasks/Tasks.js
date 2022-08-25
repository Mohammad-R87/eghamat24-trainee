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

