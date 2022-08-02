<template>
  <div>
    <div class="footer">
      <div class="container-fluid text-white bg-gray">
        <div class="row">
          <section class="col-lg-4 d-flex align-items-center flex-column my-2">
            <div class="d-flex align-items-center flex-column">
              <div class="d-flex justify-content-center">
                <img
                  src="@/assets/images/logos/logo-lais-small.png"
                  class="mr-2"
                  alt=""
                />
              </div>
              <row>
                <p class="fw-semibold">
                  Laboratório de Inovação Tecnológica em Saúde.
                </p></row
              >
            </div>
          </section>

          <section class="col-lg-4 d-flex align-items-center flex-column my-2">
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
          <section class="col-lg-4 d-flex align-items-center flex-column my-2">
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
</template>

<script>
export default {
  name: "FooterBar",
};
</script>
