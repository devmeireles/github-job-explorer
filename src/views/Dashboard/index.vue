<template>
    <div class="dashboard">
        <div class="fluid-container">
            <div class="sidebar">
                <Sidebar />
            </div>
            <div class="container">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Sidebar from '@/components/organisms/Sidebar.vue';

export default {
  components: { Sidebar },
};
</script>

<style scoped>
.sidebar {
    background-color: #facada;
    min-width: 20%;
}
</style>
