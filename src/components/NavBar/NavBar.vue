<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="info"
      class="py-3 bg-white w-100 pl-lg-0"
    >
      <b-navbar-brand href="#"
        ><img src="@/assets/images/logos/icon-header.svg" alt=""
      /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto ml-auto">
          <b-nav-item
            ><router-link to="/" class="nav-link" aria-current="page"
              >Início</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="#" class="nav-link"
              >Sobre Nós</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/cursos" class="nav-link"
              >Cursos</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/parceiros" class="nav-link"
              >Parceiros</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/transparencia" class="nav-link"
              >Transparência</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="#" class="nav-link pr-0"
              >Contato</router-link
            ></b-nav-item
          >
          <b-nav-form>
            <div class="input-group ml-2">
              <div class="input-group-prepend">
                <div class="input-group-text bg-transparent border-right-0">
                  <img
                    src="@/assets/images/icons/icon-search.svg"
                    class="img-fluid"
                  />
                </div>
                <input
                  class="py-2 border-left-0 form-control"
                  type="text"
                  v-model="search"
                  @click="filteredCursos"
                />
              </div>
            </div>
          </b-nav-form>
        </b-navbar-nav>
        <b-nav-form>
          <button class="btn btn-outline-purple1 mt-md-3 mt-lg-0 mt-3">
            Entrar
          </button>

          <button
            class="btn btn-purple1 ml-4 ml-lg-2 ml-md-2 mt-md-3 mt-lg-0 mt-3"
          >
            Cadastrar
          </button>
        </b-nav-form>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      search: "",
      cursos: [],
    };
  },
  // computed: {
  //   filteredCursos() {
  //     return this.cursos.filter((cursos) => {
  //       return (
  //         cursos.title.toLowerCase().includes(this.search.toLowerCase()) ||
  //         cursos.cateroria.toLowerCase().includes(this.search.toLowerCase())
  //       );
  //     });
  //   },
  // },
  methods: {
    filteredCursos() {
      fetch(`http://localhost:3004/cursos?`)
        .then((response) => response.json())
        .then((res) => {
          if (this.search) {
            this.cursos = res.cursos.filter((cursos) =>
              cursos.titulo.toLowerCase().includes(this.search.toLowerCase())
            );
            console.log(this.search);
          } else {
            this.cursos = res.cursos;
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped src="./styles.scss" />
