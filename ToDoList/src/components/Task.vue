<template>
  <div @click="$emit('change-condition')" :class="Condition[1]"
       class="border-danger d-flex align-items-center justify-content-between list-group-item-action mt-2 p-1 item task_animation">
    <p :class="Condition[0]"
       class="d-flex align-items-center justify-content-center m-0 p-3">
      {{ input }}
    </p>
    <div class="d-flex align-items-center">
      <button @click="$emit('showFunc')" class="btn btn-danger btn-action text-center mr-2">
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <button @click="$emit('edit')" class="btn btn-success btn-action text-center mr-2">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    input: String,
    Condition: Array,
  },
};
</script>
