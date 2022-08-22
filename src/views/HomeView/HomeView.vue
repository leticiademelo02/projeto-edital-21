<template>
  <div>
    <div
      class="container-fluid bg-gray2 d-flex justify-content-center flex-column pb-5"
    >
      <!-- <div class="row d-flex justify-content-center">
        <h1 class="text-green fw-extrabold mb-3 text-center">
          Especialização PEPSUS
        </h1>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col">
          <p class="text-gray2 font-size-30 fw-extrabold text-center">
            Conheça o curso de Especialização em Saúde da Família
          </p>
        </div>
      </div>
      <div class="row d-flex justify-content-center text-center">
        <button class="btn btn-purple1 mt-3 mb-5">Acesse</button>
      </div> -->

      <div class="container-fluid mt-3 mb-2 d-flex justify-content-center">
        <b-carousel
          v-model="slide"
          :interval="0"
          controls
          indicators
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide img-src="~@/assets/images/logos/vector.png">
            <div class="col d-flex align-items-center flex-column">
              <h1 class="text-green fw-extrabold mb-3">
                Especialização PEPSUS
              </h1>
              <p class="text-gray2 font-size-30 fw-extrabold mb-0">
                Conheça o curso de Especialização em Saúde da Família
              </p>
              <router-link to="/modulos/1" class="nav-link">
                <button class="btn btn-purple1 mt-3">
                  Acesse
                </button></router-link
              >
            </div>
          </b-carousel-slide>
          <b-carousel-slide img-src="~@/assets/images/logos/vector.png">
            <div class="col d-flex align-items-center flex-column">
              <h1 class="text-green fw-extrabold mb-3">
                Especialização PEPSUS
              </h1>
              <p class="text-gray2 font-size-30 fw-extrabold mb-0">
                Conheça o curso de Especialização em Saúde da Família
              </p>
              <router-link to="/modulos/1" class="nav-link">
                <button class="btn btn-purple1 mt-3">
                  Acesse
                </button></router-link
              >
            </div>
          </b-carousel-slide>
          <b-carousel-slide img-src="~@/assets/images/logos/vector.png">
            <div class="col d-flex align-items-center flex-column">
              <h1 class="text-green fw-extrabold mb-3">
                Especialização PEPSUS
              </h1>
              <p class="text-gray2 font-size-30 fw-extrabold mb-0">
                Conheça o curso de Especialização em Saúde da Família
              </p>
              <router-link to="/modulos/1" class="nav-link">
                <button class="btn btn-purple1 mt-3">
                  Acesse
                </button></router-link
              >
            </div>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-center mt-5">
          <h2 class="text-green fw-extrabold font-size-30 mb-4">
            Módulos Educacionais
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-tabs>
            <b-tab title="Mais populares" active @click="maisPopulares">
            </b-tab>
            <b-tab title="Mais bem avaliados" @click="bemAvaliados"></b-tab>
            <b-tab title="Mais recentes" @click="maisRecentes"></b-tab>
          </b-tabs>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <ModulosCards :cursos="cursos" />
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <router-link :to="{ name: 'cursos' }">
          <button class="btn btn-purple2 mt-5 mb-5">
            Ver módulo
          </button></router-link
        >
      </div>
      <div class="row d-flex justify-content-center">
        <router-link to="/parceiros" class="nav-link">
          <h2 class="text-green fw-extrabold font-size-30 mt-5">Parceiros</h2>
        </router-link>
      </div>

      <div class="row mb-5 mt-3">
        <div class="col">
          <div class="card pl-4">
            <div class="card-body">
              <div class="row mb-1 text-center text-md-center text-lg-left">
                <div
                  class="col-sm-4 col-lg-3 col-md-6 d-flex align-items-center flex-column"
                >
                  <div class="row">
                    <h4>Governo do RN</h4>
                  </div>
                  <div class="row">
                    <p class="pr-3 pb-2">
                      Governo do Estado do Rio Grande do Norte.
                    </p>
                  </div>
                </div>
                <div
                  class="col-sm-4 col-lg-3 col-md-6 d-flex align-items-center flex-column"
                >
                  <div class="row">
                    <h4>SESAP</h4>
                  </div>
                  <div class="row">
                    <p class="pr-4 pb-2">
                      Secretaria de Saúde Pública do Estado do Rio Grande do
                      Norte.
                    </p>
                  </div>
                </div>

                <div
                  class="col-sm-4 col-lg-3 col-md-6 d-flex align-items-center flex-column"
                >
                  <div class="row">
                    <h4>UFRN</h4>
                  </div>
                  <div class="row">
                    <p class="pr-3 pb-2">
                      Universidade Federal do Rio Grande do Norte.
                    </p>
                  </div>
                </div>
                <div
                  class="col-sm-4 col-lg-3 col-md-6 d-flex align-items-center flex-column"
                >
                  <div class="row">
                    <h4>HUOL</h4>
                  </div>
                  <div class="row">
                    <p class="pr-3 pb-2">
                      Hospital Onofre Lopes: Hospital Universitário da UFRN
                      (Universidade Federal do Rio Grande do Norte).
                    </p>
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
import image from "@/assets/images/logos/vector.png";
import Cursos from "@/services/cursos";
import ModulosCards from "@/components/ModulosCards/ModulosCards.vue";
import BottomBar from "@/components/BottomBar/BottomBar.vue";

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      image,
      cursos: [],
    };
  },
  components: {
    ModulosCards,
    BottomBar,
  },
  mounted: function () {
    this.maisPopulares();
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    maisPopulares() {
      Cursos.MaisPopulares().then((response) => {
        console.log(response.data);
        this.cursos = response.data;
      });
    },
    bemAvaliados() {
      Cursos.BemAvaliados().then((response) => {
        console.log(response.data);
        this.cursos = response.data;
      });
    },
    maisRecentes() {
      Cursos.MaisRecentes().then((response) => {
        console.log(response.data);
        this.cursos = response.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped src="./styles.scss" />
