<template>
  <router-view/>
</template>

<style>
@import url('https://unpkg.com/sanitize.css');

.fluid-container {
  display: flex;
  flex-direction: row;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #13131a;
  padding: 0;
  margin: 0;
  min-height: 100vh;
}
</style>
