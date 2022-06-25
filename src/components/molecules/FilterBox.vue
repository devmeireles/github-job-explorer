<template>
    <div class="filter-box">
        <div class="title">{{ title }}</div>
        <div class="body">
            <label v-for="item in items" :for="item.id" :key="item.id">
                <input type="checkbox" :id="item.id"> {{ item.name }}
            </label>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    type: {
      type: String,
      default: 'checkbox',
    },
    items: Object,
  },
};
</script>

<style scoped lang="scss">
.filter-box {
    color: #B0A5A6;
    display: flex;
    padding: 5%;
    flex-direction: column;
    align-items: flex-start;

    .title {
        font-weight: bold;
        color: white;
        padding: 5% 0%;
    }

    .body {
        display: flex;
        flex-direction: column;
    }

    label {
        padding: 2% 0%;
    }
}
</style>
