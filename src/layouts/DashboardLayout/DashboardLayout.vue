<template>
  <div>
    <NavBar />
    <FooterBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import FooterBar from "@/components/FooterBar/FooterBar.vue";

export default {
  name: "DashboardLayout",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style lang="scss" scoped src="./styles.scss" />
