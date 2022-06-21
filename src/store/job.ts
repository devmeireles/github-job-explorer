/* eslint no-param-reassign: ["error", { "props": false }] */

import axios from 'axios';
import { defineStore } from 'pinia';
import { IJobState } from '@/types/Job';

const useJobStore = defineStore('job', {
  state: () => ({
    items: [],
    loading: false,
    labels: [],
  } as IJobState),
  getters: {
    getJobs: (state) => state.items,
  },
  actions: {
    async fetchJobs() {
      try {
        this.loading = true;
        const requestBack = await axios.get('https://api.github.com/repos/backend-br/vagas/issues');

        if (requestBack.status === 200) {
          const { data } = requestBack;
          this.items = data;

          const labelsArr: any[] = [];
          data.every((item: { labels: any; }, index: any) => labelsArr.push(...item.labels));

          this.labels = labelsArr;
        }

        const requestFront = await axios.get('https://api.github.com/repos/frontendbr/vagas/issues');
        if (requestFront.status === 200) {
          const { data } = requestFront;
          this.items.push(...data);
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
