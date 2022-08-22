<template>
  <div>
    <div class="row">
      <div
        class="col-lg-4 col-md-6 mb-5 card-custom"
        v-for="parceiros in parceiros"
        :key="parceiros.id"
      >
        <div class="card">
          <div class="card-header d-flex justify-content-center flex-column">
            <img
              :src="parceiros.capa"
              :alt="parceiros.titulo"
              class="img-fluid card-custom"
            />
          </div>
          <div class="divider mb-2"></div>
          <div class="card-body pb-2 pt-0">
            <p class="text-center">
              {{ parceiros.titulo }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParceirosCards",
  props: {
    parceiros: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
