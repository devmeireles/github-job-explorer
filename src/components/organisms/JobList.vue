<template>
  <div class="job-list">
    <div class="header" v-if="items.length > 0">
      <div>Showing {{ items.length }} Jobs</div>
      <div class="sort">Sort by: Newest</div>
    </div>
    <div class="body">
      <JobCard v-for="job in items" :key="job.id" :title="job.title" :stack="job.labels"
      :description="job.body" />
    </div>
  </div>
</template>

<script lang="ts">
import JobCard from '../molecules/JobCard.vue';

export default {
  props: {
    items: Object,
  },
  components: { JobCard },
};
</script>

<style scoped lang="scss">
.job-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  .header {
    font-size: 30px;
    font-weight: bold;
    color: white;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1%;

    .sort {
      font-size: 15px;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
</style>
