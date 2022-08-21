<template>
  <div class="container-fluid mt-5">
    <div class="col-12 col-sm-8 col-md-6 offset-md-3 col-lg-5 offset-lg-2 col-xl-6 offset-xl-3">
      <div class="card card-primary">
        <div class="card-header">
          <h4>Add New Task</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" class="form-control" ref="title"/>
          </div>
          <div class="form-group">
            <label for="due-date">Due Date</label>
            <input type="date" name="due-date" id="due-date" class="form-control" ref="date"/>
          </div>
          <div class="form-group mt-5">
            <button @click="Add" value="Add" class="btn btn-primary btn-lg btn-block">ADD</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Add.js"></script>
