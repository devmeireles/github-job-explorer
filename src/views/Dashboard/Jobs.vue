<template>
  <div class="jobs">
    <JobList v-if="items" :items="items" />
    {{loading}}
    <Loading v-if="!!loading" />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useJobStore from '@/store/job';

import JobList from '@/components/organisms/JobList.vue';
import Loading from '@/components/organisms/Loading.vue';

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
  components: { JobList, Loading },
};
</script>

<style scoped>

</style>
