<template>
  <!-- <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div> -->

  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#"
          ><img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt="Teste"
            class="img-fluid"
            width="30"
            height="24"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              ><router-link to="/" class="nav-link active" aria-current="page"
                >Inicio</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link to="/about" class="nav-link"
                >About</router-link
              ></b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
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
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped src="./styles.scss" />
