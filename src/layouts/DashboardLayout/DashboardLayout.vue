<template>
  <div>
    <NavBar />
    <FooterBar />
    <BottomBar />
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
