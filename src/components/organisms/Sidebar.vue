<template>
  <div class="sidebar-content">
    <!-- {{labels}} -->

    <div class="filter-box">
      <div class="title">Category</div>
      <div class="body">
        <label for="1">
          <input type="checkbox" id="1"> Frontend
        </label>

        <label for="2">
          <input type="checkbox" id="2"> Backend
        </label>

        <label for="3">
          <input type="checkbox" id="3"> Fullstack
        </label>
      </div>
    </div>

    <div class="filter-box">
      <div class="title">Type of Employment</div>
      <div class="body">
        <label for="1">
          <input type="checkbox" id="1"> Remote
        </label>

        <label for="2">
          <input type="checkbox" id="2"> Onsite
        </label>

        <label for="3">
          <input type="checkbox" id="3"> Hybrid
        </label>
      </div>
    </div>

    <div class="filter-box">
      <div class="title">Type of Employment</div>
      <div class="body">
        <label for="1">
          <input type="checkbox" id="1"> Remote
        </label>

        <label for="2">
          <input type="checkbox" id="2"> Remote
        </label>

        <label for="3">
          <input type="checkbox" id="3"> Remote
        </label>
      </div>
    </div>

    <div class="filter-box">
      <div class="title">Technologies</div>
      <div class="body">
        <label for="1">
          <input type="checkbox" id="1"> Remote
        </label>

        <label for="2">
          <input type="checkbox" id="2"> Remote
        </label>

        <label for="3">
          <input type="checkbox" id="3"> Remote
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useJobStore from '@/store/job';

export default {
  setup() {
    const store = useJobStore();
    const { labels, loading } = storeToRefs(store);
    onMounted(async () => {
      await store.fetchJobs();
    });
    return {
      labels,
      loading,
    };
  },
};
</script>

<style scoped>
.filter-box {
  color: #B0A5A6;
  display: flex;
  padding: 5%;
  flex-direction: column;
  align-items: flex-start;
}

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
</style>
