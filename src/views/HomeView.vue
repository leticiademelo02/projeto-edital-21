<template>
  <div class="home">
    <table>
      <tr v-for="cursos of cursos" :key="cursos.id">
        <td>{{ cursos.cateroria }}</td>
        <td>{{ cursos.parceiros }}</td>
      </tr>
    </table>
    <ButtonFill
      class="align-self-baseline"
      @click="$router.push({ name: 'about' })"
      >ola</ButtonFill
    >
  </div>
</template>

<script>
import Cursos from "@/services/cursos";
import ButtonFill from "@/components/ButtonFill/ButtonFill.vue";

export default {
  data() {
    return {
      cursos: [],
    };
  },
  components: {
    ButtonFill,
  },
  mounted() {
    Cursos.PageLimit().then((response) => {
      console.log(response.data);
      this.cursos = response.data;
    });
  },
};
</script>
