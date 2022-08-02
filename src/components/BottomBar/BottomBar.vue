<template>
  <div>
    <div class="col">
      <div class="row">
        <div
          class="container-fluid bg-green d-flex align-items-center flex-column"
        >
          <div class="row">
            <div class="col-12">
              <p class="text-white fw-bold font-size-30 mt-4 mb-5">
                Realização
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex align-items-center flex-column mb-3">
              <div class="mb-3">
                <img
                  src="@/assets/images/logos/logo-lais.png"
                  class="mr-5 pr-3"
                  alt=""
                />
                <img
                  src="@/assets/images/logos/logo-ufrn.png"
                  class=""
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container-fluid text-white bg-gray pt-5">
          <div class="row">
            <section
              class="col-lg-4 d-flex align-items-center flex-column mt-5"
            >
              <div class="d-flex align-items-center flex-column">
                <div class="d-flex align-items-center mb-3">
                  <img
                    src="@/assets/images/logos/logo-lais-small.png"
                    class="mr-2"
                    alt=""
                  />
                </div>
                <div class="row">
                  <p class="fw-semibold">
                    Laboratório de Inovação Tecnológica em Saúde.
                  </p>
                </div>
              </div>
            </section>
            <section
              class="col-lg-4 d-flex align-items-center flex-column mt-5"
            >
              <h5>Links Úteis</h5>
              <div>
                <ul
                  class="nav flex-column d-flex align-items-center flex-column mt-1 fw-low"
                >
                  <li class="nav-item">Início</li>
                  <li class="nav-item">Sobre Nós</li>
                  <li class="nav-item">Módulos</li>
                  <li class="nav-item">Parceiros</li>
                  <li class="nav-item">Transparência</li>
                </ul>
              </div>
            </section>
            <section
              class="col-lg-4 d-flex align-items-center flex-column mt-5"
            >
              <h5>Redes sociais</h5>

              <div class="d-flex align-items-center flex-column mt-1 fw-low">
                <div>
                  <i class="icone-redes bi bi-facebook mr-3"></i>
                  <i class="icone-redes bi bi-twitter mr-3"></i>
                  <i class="icone-redes bi bi-instagram"></i>
                </div>
              </div>
            </section>
          </div>

          <div class="footer-copy mt-4">
            <div class="row">
              <div class="col-lg-12">
                <div class="text-center">
                  <p class="mb-3 mt-5">
                    2022 © LAIS (HUOL). Todos os direitos reservados
                  </p>
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
  name: "BottomBar",
};
</script>

<style lang="scss" scoped src="./styles.scss" />
