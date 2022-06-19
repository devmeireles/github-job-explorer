<template>
  <div class="item">
    {{ content }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    content: String,
  },
};
</script>

<style scoped>
.item {
  background-color: #292932;
  color: white;
  font-size: 12px;
  border-radius: 10px;
  margin: 2px;
  padding: 8px;
}
</style>
