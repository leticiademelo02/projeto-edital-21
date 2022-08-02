<template>
  <div class="home">
    <div>
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="0"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=58"
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
  <!-- <div class="home">
    <table>
      <tr v-for="cursos of cursos" :key="cursos.id">
        <td>{{ cursos.cateroria }}</td>
        <td>{{ cursos.parceiros }}</td>
      </tr>
    </table>
  </div> -->
</template>

<script>
import Cursos from "@/services/cursos";

export default {
  data() {
    return {
      cursos: [],
      slide: 0,
      sliding: null,
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
