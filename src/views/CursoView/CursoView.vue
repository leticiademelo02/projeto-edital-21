<template>
  <div>
    <div class="container pt-4">
      <div class="row">
        <div class="col mt-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-0">
              <li class="breadcrumb-item p-0 mr-2">
                <a href="/">Início</a>
              </li>
              <li class="breadcrumb-item p-0 mr-2">
                <a href="/">Cursos</a>
              </li>
              <li class="breadcrumb-item p-0" active aria-current="page">
                Módulos
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col text-lg-center text-sm-left">
          <h1 class="text-green fw-extrabold font-size-40 mt-4 mb-4">
            Módulos educacionais
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="mb-4">
          <div class="col">
            <b-tabs>
              <b-tab title="Covid 19" @click="fetchData('Covid 19')"></b-tab>
              <b-tab
                title="Sífilis e outras Ist’s"
                @click="fetchData('Síflis e outras ist')"
              ></b-tab>
              <b-tab
                title="Preceptoria"
                @click="fetchData('Preceptoria')"
              ></b-tab>
              <b-tab
                title="Doenças raras"
                @click="fetchData('Doenças raras')"
              ></b-tab>
              <b-tab
                title="Web Palestras"
                @click="fetchData('WebPalestras')"
              ></b-tab>
              <b-tab
                title="Sistemas prisional"
                @click="fetchData('Sistema prisional')"
              ></b-tab>

              <b-tab title="OPAS" @click="fetchData('OPAS')"></b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="row my-2">
        <div class="col">
          <p>{{ `${cursos.length}` }} de {{ `${totalItems}` }} resultados</p>
        </div>
      </div>
      <div class="row mb-5 pb-5">
        <div class="col">
          <CategoriaCards
            :cursos="cursos"
            :per-page="perPage"
            :current-page="currentPage"
          />
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <b-pagination
            size="md"
            :total-rows="totalItems"
            v-model="currentPage"
            :per-page="perPage"
          ></b-pagination>
        </div>
      </div>
    </div>
    <BottomBar />
  </div>
</template>

<script>
import CategoriaCards from "@/components/CategoriaCards/CategoriaCards.vue";
import BottomBar from "@/components/BottomBar/BottomBar.vue";

export default {
  name: "CursoView",
  data: function () {
    return {
      cursos: [],
      currentPage: 1,
      perPage: 6,
      totalItems: 0,
    };
  },
  components: {
    CategoriaCards,
    BottomBar,
  },

  async mounted() {
    await this.fetchData("Covid 19");
  },
  watch: {
    currentPage: {
      handler: function () {
        this.fetchData();
      },
    },
  },

  methods: {
    async fetchData(filtro) {
      this.cursos = await fetch(
        `http://localhost:3004/cursos?cateroria=${filtro}&_page=${this.currentPage}&_limit=${this.perPage}`
      )
        .then((res) => {
          this.totalItems = parseInt(res.headers.get("x-total-count"), 0);

          return res.json();
        })
        .then((cursos) => cursos);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
