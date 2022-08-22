import api from "@/services/api";

export default {
  DadosTransparencia: () => {
    return api.get("/transparecia");
  },
  DadosGerais: () => {
    return api.get("/transparecia?dados_gerais");
  },
};
