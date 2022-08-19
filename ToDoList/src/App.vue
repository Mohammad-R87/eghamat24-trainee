<template>
  <nav class="w-100 col-md-12 d-flex justify-content-center align-items-center">
    <div class="d-flex align-items-center justify-content-between col-md-6">
      <div class="d-flex align-items-center text-primary">
        <i class="fa-solid fa-list mr-4"></i>
        <h2 class="m-0">ToDo List</h2>
      </div>
      <div class="d-flex align-items-center router">
        <router-link to="/">Tasks</router-link>
        <router-link to="/new">Add</router-link>
      </div>
    </div>
  </nav>
  <router-view/>
</template>