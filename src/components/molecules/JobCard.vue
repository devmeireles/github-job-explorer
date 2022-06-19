<template>
    <div class="job-card">
        <div class="title">{{ title }}</div>
        <div class="description">
            <p>{{ description.substring(0, 150) }}...</p>
        </div>
        <div class="stack">
            <Chip v-for="tech in stack" :key="tech.id" :content="tech.name" />
        </div>

        <div class="actions">
            <Button content="Details" blue/>
            <Button content="Save" gray />
        </div>
    </div>
</template>

<script lang="ts">
import Chip from '@/components/atoms/Chip.vue';
import Button from '../atoms/Button.vue';

export default {
  props: {
    title: String,
    stack: Array,
    description: String,
  },
  components: { Chip, Button },
};
</script>

<style scoped>
.job-card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #1c1c24;
    color: #B0A5A6;
    width: 20%;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
    text-align: left;
}

.title {
    font-weight: bold;
    color: #FFF;
    margin: 20px 0px;
}

.description p {
    word-break: break-word;
}

.stack {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 25px 0px;
}

.actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
