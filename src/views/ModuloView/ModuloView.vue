<template>
  <div>
    <div v-if="curso">
      <div
        class="header-pages w-100 mt-2"
        :style="{
          backgroundImage: `url(${curso.capa})`,
        }"
      >
        <div class="container pt-5">
          <div class="row">
            <div class="col mt-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb p-0">
                  <li class="breadcrumb-item p-0 mr-2">
                    <a href="/">Início</a>
                  </li>
                  <li class="breadcrumb-item p-0 mr-2">
                    <a href="/">Cursos</a>
                  </li>
                  <li class="breadcrumb-item p-0 mr-2">
                    <a href="/">Módulos</a>
                  </li>
                  <li class="breadcrumb-item active p-0" aria-current="page">
                    {{ curso.titulo }}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h1>{{ curso.titulo }}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="header-pages-subtitle">
                <h1>{{ curso.parceiros }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col text-lg-center text-sm-left">
                <h2 class="font-size-40 fw-extrabold text-green mt-4 mb-5">
                  Informações Gerais do Curso
                </h2>
              </div>
            </div>
            <div class="col">
              <div
                class="row d-flex justify-content-lg-between flex-lg-row flex-sm-column mb-3"
              >
                <div class="d-flex align-items-center">
                  <div class="col d-flex align-items-center">
                    <div
                      class="row mb-lg-0 mb-md-3 mb-3 d-flex align-items-center"
                    >
                      <img
                        src="@/assets/images/icons/icon-clock.svg"
                        class="mr-2"
                        alt=""
                        width="25.81px"
                        height="25.81px"
                      />

                      <p class="mb-0 fw-700 text-modulo mr-3">
                        {{ curso.duracao }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="d-flex align-items-center">
                  <div class="col">
                    <div class="row mb-lg-0 mb-md-3 mb-3">
                      <img
                        src="@/assets/images/icons/icon-calendar.svg"
                        class="mr-2"
                        alt=""
                      />
                      <p class="mb-0 fw-700 text-modulo">
                        Desde {{ curso.criado_em }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="d-flex align-items-center">
                  <div class="col">
                    <div class="row">
                      <img
                        src="@/assets/images/icons/icon-person.svg"
                        class="mr-2"
                        width="29.34px"
                        height="23.23px"
                        alt=""
                      />
                      <p class="mb-0 fw-700 text-modulo">
                        {{ curso.matriculados }} alunos matriculados
                      </p>
                    </div>
                  </div>
                </div>
                <!-- <div class="row">
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
                      <p class="mb-0 mt-2 text-modulo">
                        {{ curso.avaliacao }}
                      </p>
                      <p class="text-modulo mb-0">
                        ({{ curso.numero_avaliacoes }} avaliações)
                      </p>
                    </div>
                  </div> -->
                <div class="d-flex align-items-center">
                  <div class="row mr-2">
                    <div class="col">
                      <b-form-rating
                        v-model="curso.avaliacao"
                        readonly
                        no-border
                        size="lg"
                        class="mb-1 pl-0 pr-0"
                        color=" #7dc143"
                      ></b-form-rating>
                    </div>
                  </div>
                  <div class="row">
                    <div class="d-flex align-items-center">
                      <p class="text-modulo mb-0 mr-1">
                        {{ curso.avaliacao }}
                      </p>
                      <p class="text-modulo mb-0">
                        ({{ curso.numero_avaliacoes }} avaliações)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col text-lg-center text-sm-left mt-3 mb-4">
                <h3>Sobre o curso</h3>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>
                  {{ curso.sobre }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col text-lg-center text-sm-left my-4">
                <h3>Objetivos</h3>
              </div>
            </div>
            <div class="row">
              <div class="col text-sm-left mb-1">
                <h4>Objetivo Geral</h4>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <p>
                  {{ curso.objetivo_geral }}
                </p>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col text-sm-left mb-1">
                  <h4>Objetivos Específicos</h4>
                </div>
              </div>
              <div class="row">
                <div class="col aling-items-center">
                  <p class="m-0">
                    {{ curso.objetivo_especifico }}
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col text-lg-center text-sm-left mb-4 mt-5">
                <h3>Recursos educacionais</h3>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p class="text-lg-center text-sm-left">
                  Serão utilizados textos no formato de PDF, vídeos,
                  ilustrações, infográficos, dentre outros recursos.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col text-lg-center text-sm-left my-4">
                <h3>Créditos</h3>
              </div>
            </div>
            <div class="row mb-5 pb-5">
              <div
                v-for="curso in curso.creditos"
                :key="curso.id"
                class="col-md-3 d-flex justify-content-center flex-column mb-5"
              >
                <div class="card border-0">
                  <div class="card-body">
                    <img :src="curso.capa" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomBar />
  </div>
</template>

<script>
import BottomBar from "@/components/BottomBar/BottomBar.vue";
import Cursos from "@/services/cursos";

export default {
  name: "ModuloView",
  components: {
    BottomBar,
  },
  data: function () {
    return {
      curso: {},
    };
  },
  created() {
    Cursos.ModuloInfo(this.$route.params.id).then((response) => {
      this.curso = response.data.shift();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
