<template>
  <div :class="Condition[1]" class="d-flex align-items-center justify-content-between list-group-item-action mt-2 p-1 border-success border-danger item">
    <p @click="$emit('changeCondition')" :class="Condition[0]" class="d-flex align-items-center justify-content-center m-0 p-3">
      {{ input }}
    </p>
    <div class="d-flex align-items-center">
      <button class="btn btn-danger btn-action text-center mr-2">
        <i @click="$emit('showFunc')" class="fa-solid fa-trash-can"></i>
      </button>
      <button class="btn btn-success btn-action text-center mr-2">
        <i @click="$emit('edit')" class="fa-solid fa-pen-to-square"></i>
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
