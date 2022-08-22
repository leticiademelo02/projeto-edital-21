<template>
  <div>
    <div class="header fixed-top"><NavBar /></div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  name: "DashboardLayout",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped src="./styles.scss" />
