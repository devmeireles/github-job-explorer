<template>
  <a href="#" class="item" :class="[gray ? 'gray' : '', blue ? 'blue' : '']">{{ content }}</a>
</template>

<script lang="ts">
export default {
  props: {
    content: String,
    blue: {
      type: Boolean,
      default: false,
    },
    gray: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  background-color: black;
  border-radius: 10px;
  padding: 10px;
  width: 120px;
  text-align: center;
  text-decoration: none;
  color: white;

  .blue {
    background-color: #0062ff;
    color: white;
  }

  .gray {
    background-color: #292932;
    color: #60606b;
  }
}
</style>
