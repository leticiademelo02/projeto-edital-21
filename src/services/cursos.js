import api from "@/services/api";

export default {
  listar: () => {
    return api.get("cursos");
  },

  filtrar: () => {
    return api.get("cursos?cateroria=Acessibilidade");
  },

  PageLimit: () => {
    return api.get("/cursos?_page=2&_limit=10?");
  },
};
