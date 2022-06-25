<template>
  <div class="sidebar-content">
    <FilterBox title="Category" :items="categories" />
    <FilterBox title="Type of Employment" :items="employmentType" />
    <FilterBox title="Technologies" />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useJobStore from '@/store/job';
import FilterBox from '../molecules/FilterBox.vue';

export default {
  setup() {
    const store = useJobStore();
    const { labels, loading } = storeToRefs(store);

    const categories = [
      {
        id: 'backend',
        name: 'Backend',
      },
      {
        id: 'frontend',
        name: 'Frontend',
      },
      {
        id: 'fullstack',
        name: 'Fullstack',
      },
    ];

    const employmentType = [
      {
        id: 'remote',
        name: 'Remote',
      },
      {
        id: 'hybrid',
        name: 'Hybrid',
      },
      {
        id: 'onsite',
        name: 'Onsite',
      },
    ];

    onMounted(async () => {
      await store.fetchJobs();
    });
    return {
      labels,
      loading,
      categories,
      employmentType,
    };
  },
  components: { FilterBox },
};
</script>
