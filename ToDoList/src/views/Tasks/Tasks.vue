<template>
  <div class="container-fluid mt-5">
    <div class="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-8 offset-xl-3 d-flex">
      <div class="card card-primary col-xl-9">
        <div class="card-header justify-content-between">
          <h4>{{ filter }} Tasks</h4>
          <div class="d-flex align-items-center">
            <ul class="d-flex align-items-center m-0">
              <li class="text-primary mr-4 pointer"><i class="fa-solid fa-angle-left"></i></li>
              <li class="text-primary">2022/08/19</li>
              <li class="text-primary ml-4 pointer"><i class="fa-solid fa-angle-right"></i></li>
            </ul>
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
      <div class="card card-primary col-xl-2 mx-3">
        <div class="card-header text-center"><h4>Options</h4></div>
        <div class="card-body py-3">
          <ul :class="{'All' : filter === 'All', 'Done' : filter === 'Done', 'UnDone' : filter === 'UnDone'}"
              class="position-relative">
            <li id="btn" @click="action" class="w-100 btn btn-outline-info my-2"><i class="fa-solid fa-eye-slash"></i> <span>Hide</span></li>
            <li @click="filter = 'All'" class="w-100 btn btn-outline-dark my-2"><i class="fa-solid fa-table-list"></i>
              All
            </li>
            <li @click="filter = 'Done'" class="w-100 btn btn-outline-success my-2"><i
                class="fa-regular fa-circle-check"></i> Done
            </li>
            <li @click="filter = 'UnDone'" class="w-100 btn btn-outline-danger my-2"><i class="fa-solid fa-xmark"></i>
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
      tasks: null,
      filter: null,
    };
  },

  components: {
    Task,
  },

  mounted() {
    moment.locale('en');
    const filter = ref("All");
    let tasks = [];
    let data = localStorage.getItem("missions")
        ? JSON.parse(localStorage.getItem("missions"))
        : {
          Tasks: [],
        };

    getToDay(data.Tasks);

    function getToDay(Record) {
      let toDay = new moment().format('YYYY-MM-DD');
      for (let i = 0; i < Record.length; i++) {
        if (Record[i].date == toDay) {
          tasks.push(Record[i]);
        }
      }
    }

    onUpdated(() => {
      localStorage.setItem("missions", JSON.stringify(data));
    });

    this.tasks = tasks;
    this.filter = filter;
  },

  setup() {
    let hidden = false;

    function action() {
      let card = document.getElementById('card');
      let btn = document.getElementById('btn');

      hidden = !hidden;
      if (hidden) {
        card.classList.add('filter');
        btn.classList.add('active');
        btn.querySelector('i.fa-solid').classList.remove('fa-eye-slash');
        btn.querySelector('i.fa-solid').classList.add('fa-eye');
        btn.querySelector('span').innerText = "Show";
      } else {
        card.classList.remove('filter');
        btn.classList.remove('active');
        btn.querySelector('i.fa-solid').classList.remove('fa-eye');
        btn.querySelector('i.fa-solid').classList.add('fa-eye-slash');
        btn.querySelector('span').innerText = "Hide";
      }
    };

    return {
      action
    }
  }
};
</script>
