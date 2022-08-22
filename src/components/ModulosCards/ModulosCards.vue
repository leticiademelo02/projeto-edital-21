<template>
  <div>
    <div class="row">
      <div class="col">
        <div v-for="curso in cursos" :key="curso.id">
          <div class="card mb-4 w-100">
            <div class="card-body bg-gray3">
              <div class="row d-flex align-items-center px-3">
                <router-link
                  :to="{
                    path: `/modulos/${curso.id}`,
                  }"
                  ><img
                    :src="curso.capa"
                    :alt="curso.titulo"
                    class="img-custom"
                /></router-link>

                <div
                  class="col-lg-3 col-md-12 col-sm-12 d-flex flex-column align-items-start ml-lg-3 ml-sm-0 mr-lg-4 mr-0"
                >
                  <div class="row">
                    <h1 id="div-h1" class="fw-extrabold font-size-20 mb-3">
                      {{ curso.titulo }}
                    </h1>
                  </div>
                  <div class="row">
                    <h2 id="div-h2" class="fw-extrabold parceiros-text mb-lg-0">
                      {{ curso.parceiros }}
                    </h2>
                  </div>
                </div>
                <div
                  class="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-sm-start pr-lg-0"
                >
                  <div class="row">
                    <div class="col p-0">
                      <img
                        src="@/assets/images/icons/icon-person.svg"
                        class="mr-2"
                        alt=""
                      />
                    </div>
                    <div class="col pl-0 mr-4">
                      <p id="div-p" class="mb-0">
                        {{ curso.matriculados }}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col pr-0">
                      <img
                        src="@/assets/images/icons/icon-clock.svg"
                        class="mr-2"
                        alt=""
                      />
                    </div>
                    <div class="col px-0">
                      <p class="mb-0">
                        {{ curso.duracao }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center ml-md-0 justify-content-sm-end"
                >
                  <div class="row">
                    <div class="col p-0 d-flex align-items-center">
                      <b-form-rating
                        v-model="curso.avaliacao"
                        readonly
                        no-border
                        size="lg"
                        class="mt-1 p-0 mr-2"
                        color=" #7dc143"
                      ></b-form-rating>
                    </div>
                    <div class="col p-0 d-flex align-items-center">
                      <p class="mb-0 mt-2 fw-semibold cursos-avaliacao">
                        {{ curso.avaliacao }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-2 col-md-4 col-sm-12 pl-md-3 pr-md-0 px-sm-0 custom-col"
                >
                  <button
                    @click="moduloInfo(curso.id)"
                    class="btn btn-purple1 mt-sm-2 mt-lg-0 w-100"
                  >
                    Ver módulo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModulosCards",
  props: {
    cursos: {
      type: Array,
      required: true,
    },
  },

  methods: {
    moduloInfo(id) {
      this.$router.push({
        name: "modulos",
        params: { id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
