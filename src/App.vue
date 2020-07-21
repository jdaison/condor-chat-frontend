<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400,400i,700,700i,900,900i&display=swap");
html,
body {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  background: url("./assets/login-background.jpg"), #44b3fa;
  background-repeat: repeat;
}

#app {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}
body {
  margin: 0;
}

.cell {
  word-break: break-word !important;
}
</style>
