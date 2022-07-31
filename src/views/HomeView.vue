<template>
  <div class="home">
    <table>
      <tr v-for="cursos of cursos" :key="cursos.id">
        <td>{{ cursos.cateroria }}</td>
        <td>{{ cursos.parceiros }}</td>
      </tr>
    </table>
    <b-button>as</b-button>
  </div>
</template>

<script>
import Cursos from "@/services/cursos";

export default {
  data() {
    return {
      cursos: [],
    };
  },
  mounted() {
    Cursos.PageLimit().then((response) => {
      console.log(response.data);
      this.cursos = response.data;
    });
  },
};
</script>
