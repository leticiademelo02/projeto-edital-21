<template>
  <div id="app">
    <div class="d-flex justify-content-between flex-column">
      <div><NavBar /></div>
      <div><BottomBar /> <FooterBar /></div>
    </div>

    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import FooterBar from "@/components/FooterBar/FooterBar.vue";
import BottomBar from "@/components/BottomBar/BottomBar.vue";

export default {
  name: "DashboardLayout",
  components: {
    NavBar,
    FooterBar,
    BottomBar,
  },
};
</script>

<style lang="scss" scoped src="./styles.scss" />
