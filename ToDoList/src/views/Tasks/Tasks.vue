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
        <div class="card-body">
          <Task
              v-for="(task , index) in tasks"
              :key="task.id"
              :input="task.text[1]"
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
            <li @click="filter = 'All'" class="w-100 btn btn-outline-dark my-2">All</li>
            <li @click="filter = 'Done'" class="w-100 btn btn-outline-success my-2">Done</li>
            <li @click="filter = 'UnDone'" class="w-100 btn btn-outline-danger my-2">UnDone</li>
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

  components: {Task},
  mounted() {
    const filter = ref("All");

    let data = (localStorage.getItem('missions')) ? JSON.parse(localStorage.getItem('missions')) : {
      Tasks: [],
    }
    const tasks = [];
    if (data !== null) {
      data.Tasks.forEach((task) => {
        tasks.push(task);
      });
    }

    onUpdated(() => {
      localStorage.setItem('missions', JSON.stringify(data));
    })

    this.tasks = tasks;
    this.filter = filter;
  },
  emits: ['change-condition']
};
</script>
