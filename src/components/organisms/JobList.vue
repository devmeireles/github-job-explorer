<template>
  <div class="job-list">
    <JobCard v-for="job in items" :key="job.id" :title="job.title" :stack="job.labels"
    :description="job.body" />
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

<style scoped>
.job-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
