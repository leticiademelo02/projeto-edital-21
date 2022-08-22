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

              <li class="breadcrumb-item p-0" active aria-current="page">
                Parceiros
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h1 class="text-green fw-extrabold font-size-40">Nossos Parceiros</h1>
        </div>
      </div>
      <div class="row mt-3 mb-2">
        <div class="col">
          <p>{{ `${parceiros.length}` }} de {{ `${totalItems}` }} resultados</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ParceirosCards
            :parceiros="parceiros"
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
      <div class="row mb-5 pb-5">
        <div class="col d-flex justify-content-center">
          <h5 class="text-pagination">
            página {{ `${currentPage}` }} de
            {{ `${this.totalItems / this.perPage}` }}
          </h5>
        </div>
      </div>
    </div>
    <BottomBar />
  </div>
</template>

<script>
import ParceirosCards from "@/components/ParceirosCards/ParceirosCards.vue";
import BottomBar from "@/components/BottomBar/BottomBar.vue";

export default {
  name: "ParceirosView",
  components: {
    ParceirosCards,
    BottomBar,
  },
  data: function () {
    return {
      parceiros: [],
      currentPage: 1,
      perPage: 6,
      totalItems: 0,
    };
  },

  mounted() {
    this.fetchData().catch((error) => {
      console.error(error);
    });
  },
  watch: {
    currentPage: {
      handler: function (value) {
        this.fetchData().catch((error) => {
          console.error(error);
        });
      },
    },
  },

  methods: {
    async fetchData() {
      this.parceiros = await fetch(
        `http://localhost:3004/parceiros?&_page=${this.currentPage}&_limit=${this.perPage}`
      )
        .then((res) => {
          this.totalItems = parseInt(res.headers.get("x-total-count"), 0);

          return res.json();
        })
        .then((parceiros) => parceiros);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./styles.scss";
</style>
