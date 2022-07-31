<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped src="./styles.scss" />
