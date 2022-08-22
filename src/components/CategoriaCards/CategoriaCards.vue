<template>
  <div>
    <div class="row">
      <div
        class="mb-3 col-lg-4 col-md-6"
        v-for="cursos in cursos"
        :key="cursos.id"
      >
        <div class="card h-100">
          <a href="#">
            <div class="card-header p-0">
              <router-link
                :to="{
                  path: `/modulos/${cursos.id}`,
                }"
                ><img :src="cursos.capa" :alt="cursos.titulo" class="img-fluid"
              /></router-link>
            </div>
          </a>
          <div class="card-body py-0">
            <div class="row">
              <h3 id="text-titulo">
                {{ cursos.titulo }}
              </h3>
            </div>

            <div class="row">
              <h4 id="text-parceiros">
                {{ cursos.parceiros }}
              </h4>
            </div>
            <div class="row">
              <div
                class="d-flex justify-content-between d-flex align-items-center"
              >
                <img
                  src="@/assets/images/icons/icon-person.svg"
                  class="mr-2"
                  alt=""
                />

                <p class="mb-0 mr-3 card-text">
                  {{ cursos.matriculados }}
                </p>

                <img
                  src="@/assets/images/icons/icon-clock.svg"
                  class="mr-2"
                  alt=""
                  width="18px"
                  height="18px"
                />
                <p id="custom-p" class="mb-0">
                  {{ cursos.duracao }}
                </p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <b-form-rating
                  v-model="cursos.avaliacao"
                  readonly
                  no-border
                  size="md"
                  class="mb-1 p-0 mr-1"
                  color=" #7dc143"
                ></b-form-rating>
                <p class="fw-semibold mb-0">
                  {{ cursos.avaliacao }}
                </p>
              </div>
            </div>

            <div class="row mt-1">
              <p id="text-resumo" class="card-text">
                {{ cursos.resumo }}
              </p>
            </div>
          </div>
          <div
            class="card-footer p-0 text-right justify-content-end flex-column"
          >
            <router-link
              :to="{
                path: `/modulos/${cursos.id}`,
              }"
              ><span class="card-text"> Ver curso </span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriaCards",

  props: {
    cursos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
