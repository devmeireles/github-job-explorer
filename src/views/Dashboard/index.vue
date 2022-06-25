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
    background-color: #13131a;
    min-width: 16%;
    padding: 0% 1%;
}

.container {
    padding: 0% 2%;
    width: 100%;
    min-height: 100vh;
}
</style>
