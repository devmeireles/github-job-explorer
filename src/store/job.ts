import axios from 'axios';
import { defineStore } from 'pinia';
import { IJobState } from '@/types/Job';

const useJobStore = defineStore('job', {
  state: () => ({
    items: [],
    loading: false,
  } as IJobState),
  getters: {
    getJobs: (state) => state.items,
  },
  actions: {
    async fetchJobs() {
      try {
        this.loading = true;
        const request = await axios.get('https://api.github.com/repos/backend-br/vagas/issues');

        if (request.status === 200) {
          const { data } = request;
          this.items = data;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
});

export default useJobStore;
