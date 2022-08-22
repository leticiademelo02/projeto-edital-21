<template>
  <div>
    <div class="container-fluid bg-green d-flex justify-content-center">
      <div class="col pt-5 pb-3">
        <div class="row">
          <div class="col d-flex justify-content-center">
            <h2 class="fw-extrabold text-white font-size-30">Realização</h2>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col d-flex justify-content-center">
            <div class="row text-center">
              <div class="col mr-lg-3 mb-4">
                <img src="@/assets/images/logos/logo-lais.svg" />
              </div>
              <div class="col ml-lg-3 mb-4">
                <img src="@/assets/images/logos/logo-ufrn.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-gray pt-5 pb-1">
      <div class="row">
        <div class="col-lg-4 d-flex align-items-center flex-column mt-5">
          <img
            src="@/assets/images/logos/logo-lais.svg"
            class="mr-2"
            alt=""
            width="121px"
            height="37.53px"
          />

          <div class="row mt-3">
            <div id="divp" class="col">
              <p class="fw-semibold text-white text-center">
                Laboratório de Inovação Tecnológica em Saúde.
              </p>
            </div>
          </div>
        </div>
        <section class="col-lg-4 d-flex align-items-center flex-column mt-5">
          <h5 class="text-white font-size-30">Links Úteis</h5>
          <div>
            <ul
              class="nav flex-column d-flex align-items-center flex-column mt-1 fw-low text-white"
            >
              <li class="nav-item">
                <router-link to="/" class="nav-link">Início</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">Sobre nós </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cursos" class="nav-link"
                  >Módulos
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/parceiros" class="nav-link"
                  >Parceiros
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/transparencia" class="nav-link"
                  >Transparência
                </router-link>
              </li>
            </ul>
          </div>
        </section>
        <section class="col-lg-4 d-flex align-items-center flex-column mt-5">
          <h5 class="text-white font-size-30">Redes sociais</h5>

          <div class="d-flex align-items-center flex-column mt-1 text-white">
            <div>
              <i class="icone-redes bi bi-facebook mr-4"></i>
              <i class="icone-redes bi bi-twitter mr-4"></i>
              <i class="icone-redes bi bi-instagram"></i>
            </div>
          </div>
        </section>
      </div>

      <div class="row mt-5 pt-3">
        <div class="col-lg-12">
          <div class="text-center text-white">
            <p>2022 © LAIS (HUOL). Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
};
</script>

<style lang="scss" scoped src="./styles.scss" />
