<template>
  <div class="teste">
    <footer class="container-fluid text-white bg-gray">
      <div class="row">
        <section class="col-lg-4 d-flex align-items-center flex-column my-2">
          <img src="@/assets/images/icons/icon-logo.png" class="" alt="" />
          <div>
            <ul
              class="nav flex-column d-flex align-items-center flex-column mt-1 fw-low"
            >
              <li>
                <img src="@/assets/images/icons/icon-l.png" class="" alt="" />
              </li>
              <li>
                <img src="@/assets/images/icons/icon-a.png" class="" alt="" />
              </li>
              <li>
                <img src="@/assets/images/icons/icon-i.png" class="" alt="" />
              </li>
              <li>
                <img src="@/assets/images/icons/icon-s.png" class="" alt="" />
              </li>
            </ul>
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
    </footer>
  </div>
</template>

<!-- <footer class="container">
      <div class="container-footer">
        <div class="row">
          <div class="col-lg-4">
            <div class="footer-menu bg-gray">
              <div class="footer-logo justify-content-center">
                <img
                  src="@/assets/images/icons/icon-logo.png"
                  class="fluid"
                  alt=""
                />
                <h5>LAIS</h5>
                <div class="align-items-between text-white">
                  <p class="text-white text-center">
                    Laboratório de Inovação Tecnológica em Saúde.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="footer-menu">
              <h5>Links Úteis</h5>
              <div class="menu-info-container">
                <ul id="menu-info" class="nav-class-item">
                  <li>Início</li>
                  <li>Sobre Nós</li>
                  <li>Módulos</li>
                  <li>Parceiros</li>
                  <li>Transparência</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="footer-menu">
              <h5>Contanto</h5>
              <div class="menu-info-container">
                <ul id="menu-info" class="menu-info">
                  <li><a href="http://"></a>Telefone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer> -->

<script>
export default {
  name: "FooterBar",
};
</script>
