<template>
  <div class="mt-5 text-center">
    <h1 class="text-primary">404</h1>
    <h3>Not Found Page</h3>
    <router-link to="/">Tasks</router-link>
    |
    <router-link to="/new">Add</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
h1 {
  font-size: 60px;
}
</style>