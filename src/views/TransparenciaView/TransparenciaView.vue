<template>
  <div>
    <div class="container w-100 pt-4">
      <div class="row">
        <div class="col mt-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-0">
              <li class="breadcrumb-item p-0 mr-2">
                <a href="/">Início</a>
              </li>
              <li class="breadcrumb-item p-0" active aria-current="page">
                Transparência
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-3 mb-4">
        <div class="col d-flex justify-content-center">
          <h1 class="text-green fw-extrabold font-size-40">Transparência</h1>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="card px-4">
            <div class="card-body px-5 py-4">
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <h2 class="fw-700 font-size-25 fw-extrabold text-green">
                    Dados Gerais
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div
                    class="row mb-4 d-flex flex-column flex-lg-row justify-content-lg-between align-items-center"
                  >
                    <div class="row">
                      <div class="col d-flex align-items-center flex-column">
                        <div class="row mb-2">
                          <img
                            src="@/assets/images/icons/icon-person.svg"
                            class="mr-2"
                            alt=""
                            width="25.26px"
                            height="20px"
                          />
                          <p>Total de usuários registrados</p>
                        </div>

                        <div class="row mt-2 mb-3">
                          <div class="col">
                            <h3>
                              {{
                                transparecia.dados_gerais.usuarios_registrados
                              }}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col d-flex align-items-center flex-column">
                        <div class="row mb-2">
                          <img
                            src="@/assets/images/icons/icon-inscricoes.svg"
                            class="mr-2"
                            alt=""
                            width="16.25px"
                            height="17.5px"
                          />
                          <p>Inscrições realizadas</p>
                        </div>
                        <div class="row mt-2 mb-3">
                          <div class="col">
                            <h3>
                              {{
                                transparecia.dados_gerais.incricoes_realizadas
                              }}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col d-flex align-items-center flex-column">
                        <div class="row mb-2">
                          <img
                            src="@/assets/images/icons/icon-cursos.svg"
                            class="mr-2"
                            alt=""
                            width="23.14px"
                            height="18px"
                          />
                          <p>Cursos ativos</p>
                        </div>
                        <div class="row mt-2 mb-3">
                          <div class="col">
                            <h3>
                              {{ transparecia.dados_gerais.cursos_ativos }}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col d-flex align-items-center flex-column">
                        <div class="row mb-2">
                          <img
                            src="@/assets/images/icons/icon-certificacao.svg"
                            class="mr-2"
                            alt=""
                            width="18.7px"
                            height="20px"
                          />
                          <p>Direito à Certificação</p>
                        </div>
                        <div class="row mt-2 mb-3">
                          <div class="col">
                            <h3>
                              {{
                                transparecia.dados_gerais.direito_certificacao
                              }}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="row d-flex flex-column flex-lg-row justify-content-lg-center align-items-center"
              >
                <div class="row mr-lg-5">
                  <div class="col d-flex align-items-center flex-column">
                    <div class="row mb-2">
                      <img
                        src="@/assets/images/icons/icon-investimento-curso.svg"
                        class="mr-2"
                        alt=""
                        width="26.27px"
                        height="25px"
                      />
                      <p>Investimento médio por curso</p>
                    </div>

                    <div class="row mt-2 mb-3">
                      <div class="col">
                        <h3>
                          {{
                            transparecia.dados_gerais.investimento_medio_curso
                          }}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col d-flex align-items-center flex-column">
                    <div class="row mb-2">
                      <img
                        src="@/assets/images/icons/icon-investimento-aluno.svg"
                        class="mr-2"
                        alt=""
                        width="18.7px"
                        height="20px"
                      />
                      <p>Investimento médio por aluno</p>
                    </div>

                    <div class="row mt-2 mb-3">
                      <div class="col">
                        <h3>
                          {{
                            transparecia.dados_gerais.investimento_medio_aluno
                          }}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col d-flex flex-column flex-lg-row justify-content-lg-between align-items-center pt-4 pb-5 mb-5"
        >
          <div class="card w-100 mr-lg-4 mr-md-0 mr-sm-0 mb-md-4 mb-4 mb-lg-0">
            <div class="card-body d-flex align-items-center flex-column">
              <div class="row mb-2">
                <div class="col d-flex justify-content-center">
                  <h2 class="fw-700 font-size-25 fw-extrabold text-green">
                    Usuários por curso
                  </h2>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col">
                  <img
                    src="@/assets/images/icons/icon-grafico.svg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-1">
                  <div class="circle-white rounded-circle mb-3"></div>
                  <div class="circle-green rounded-circle mb-3"></div>
                  <div class="circle-purple rounded-circle mb-3"></div>
                  <div class="circle-gray rounded-circle"></div>
                </div>
                <div class="col">
                  <div
                    v-for="transparecia in transparecia.usuarios_por_curso"
                    :key="transparecia.id"
                  >
                    <p id="div2" class="mb-3">
                      {{ transparecia.curso }}:
                      {{ transparecia.usuarios }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card w-100">
            <div class="card-body d-flex align-items-center flex-column">
              <div class="row mb-2">
                <div class="col d-flex justify-content-center">
                  <h2 class="fw-700 font-size-25 fw-extrabold text-green">
                    Usuários por Estado
                  </h2>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col d-flex">
                  <img
                    src="@/assets/images/icons/icon-map.svg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="row mt-0">
                <div class="col-1">
                  <div class="circle-white rounded-circle mb-3"></div>
                  <div class="circle-green rounded-circle mb-3"></div>
                  <div class="circle-purple rounded-circle mb-3"></div>
                  <div class="circle-gray rounded-circle"></div>
                </div>
                <div class="col">
                  <div
                    v-for="transparecia in transparecia.usuarios_por_curso"
                    :key="transparecia.id"
                  >
                    <p id="div2" class="mb-3">
                      {{ transparecia.curso }}:
                      {{ transparecia.usuarios }}
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
import BottomBar from "@/components/BottomBar/BottomBar.vue";
import Transparencia from "@/services/transparencia";
// import Cursos from "@/services/cursos";

export default {
  name: "TransparenciaView",
  components: {
    BottomBar,
  },
  data: function () {
    return {
      transparecia: {},
    };
  },

  mounted() {
    // Cursos.TodosCursos().then((response) => {
    //   console.log(response.data);
    //   this.cursos = response.data;
    // });
    Transparencia.DadosGerais().then((response) => {
      console.log(response.data);
      this.transparecia = response.data;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
