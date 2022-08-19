<template>
  <div class="container-fluid mt-5">
    <div class="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-6 offset-xl-3">
      <div class="card card-primary">
        <div class="card-header justify-content-between">
          <h4>List Tasks</h4>
          <div class="d-flex align-items-center">
            <ul class="d-flex align-items-center m-0">
              <li class="badge badge-primary mr-2 pointer"><i class="fa-solid fa-angle-left"></i></li>
              <li class="text-primary">2022/08/19</li>
              <li class="badge badge-primary ml-2 pointer"><i class="fa-solid fa-angle-right"></i></li>
            </ul>
            <div class="custom-control custom-checkbox mx-3">
              <input type="checkbox" class="custom-control-input" id="checkbox" />
              <label class="custom-control-label" for="checkbox">Done</label>
            </div>
          </div>
        </div>
        <div class="card-body">
          <Task
              v-for="(Task , index) in tasks"
              :key="Task.id"
              :input="Task.text[1]"
              @showFunc="tasks.splice(index , 1)"
              @changeCondition="Task.condition = !Task.condition"
              @edit="task_edit.index = Task.id , task_edit.select_task_for_edit = true , input.value = Task.text"
              :Condition="[{'line-through': !Task.condition} , {'border-green-500': !Task.condition}]"
              v-show="filter === 'all' ? true : (filter === 'done' ? !Task.condition : Task.condition)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Task from "@/components/Task";

export default {
  components: { Task },
  setup() {
    const Tasks = [];
    const tasks = JSON.parse(localStorage.getItem("missions"));
    console.log(tasks);

    if (tasks !== null) {
      tasks.forEach((task) => {
        Tasks.push(task);
      });
    }

    return {
      tasks,
    };
  },
};
</script>
