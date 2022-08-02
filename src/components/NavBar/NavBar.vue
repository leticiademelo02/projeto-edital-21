<template>
  <!-- <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div> -->
  <div>
    <b-navbar
      class="shadow-sm p-3 mb-5 bg-white"
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand href="#">
        <div class="d-flex justify-content-center">
          <img
            src="@/assets/images/icons/icon-elderbook.png"
            alt=""
            class="img-fluid"
            width="30"
            height="24"
          />
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="d-flex justify-content-end" id="nav-collapse" is-nav>
        <b-navbar-nav class="font-size-20 fw-extrabold">
          <b-nav-item
            ><router-link to="/" class="nav-link" aria-current="page"
              >Inicio</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/sobrenos" class="nav-link"
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
            ><router-link to="/contato" class="nav-link"
              >Contato</router-link
            ></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <div class="card d-flex justify-content-center">
          <div class="card-body d-flex align-items-center ml-1">
            <img
              src="@/assets/images/icons/icon-search.png"
              class="img-fluid"
              alt=""
            />

            <div class="col-12">
              <b-input-group size="sm" class="ml-3">
                <b-form-input type="search"></b-form-input>
              </b-input-group>
            </div>
          </div>
        </div>
        <b-button class="btn btn-outline-green1 mr-2 mb-2 mb-md-0" size="sm">
          Entrar
        </b-button>
        <b-button class="btn btn-purple" size="sm"> Cadastrar </b-button>
      </b-collapse>
    </b-navbar>
  </div>

  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <nav class="navbar-header mr-0">
          <a class="navbar-brand" href="#">
            <img
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt="Teste"
              class="img-fluid"
              width="30"
              height="24"
            />
          </a>
        </nav>
        <b-button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </b-button>
        <div
          class="collapse-show navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav> -->
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped src="./styles.scss" />
