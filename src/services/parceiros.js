import api from "@/services/api";

export default {
  TodosParceiros: () => {
    return api.get(
      "/parceiros?&_page=${this.currentPage}&_limit=${this.perPage}"
    );
  },
};
