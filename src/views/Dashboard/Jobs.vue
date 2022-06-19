<template>
  <div class="jobs">
    <JobList :items="items" />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useJobStore from '@/store/job';

import JobList from '@/components/organisms/JobList.vue';

export default {
  setup() {
    const store = useJobStore();
    const jobs = ref([]);
    const { items, loading } = storeToRefs(store);
    onMounted(async () => {
      await store.fetchJobs();
    });
    return {
      items,
      loading,
    };
  },
  components: { JobList },
};
</script>

<style scoped>

</style>
