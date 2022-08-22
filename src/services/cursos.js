import api from "@/services/api";

export default {
  MaisPopulares: () => {
    return api.get("/cursos?_sort=matriculados&_order=desc&_limit=3");
  },
  BemAvaliados: () => {
    return api.get("/cursos?_sort=avaliacao&_order=desc&_limit=3");
  },
  MaisRecentes: () => {
    return api.get("/cursos?_sort=criado_em&_order=asc&_limit=3");
  },
  ModuloInfo: (id) => {
    return api.get(`/cursos?id=${id}`);
  },
};
