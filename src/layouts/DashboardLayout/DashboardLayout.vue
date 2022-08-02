<template>
  <div id="app">
    <div class="d-flex justify-content-between flex-column">
      <div class="header"><NavBar /></div>
      <!-- <div class="footer">
      <div><BottomBar /></div>
    </div> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";

// import BottomBar from "@/components/BottomBar/BottomBar.vue";

export default {
  name: "DashboardLayout",
  components: {
    NavBar,
    // BottomBar,
  },
};
</script>

<style lang="scss" scoped src="./styles.scss" />
