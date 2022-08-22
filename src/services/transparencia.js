import api from "@/services/api";

export default {
  DadosTransparencia: () => {
    return api.get("/transparecia");
  },
};
