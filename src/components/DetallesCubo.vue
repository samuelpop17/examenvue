<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            class="card-img-top"
            :src="cubo.imagen"
            alt="Card image cap"
            style="max-height: 200px"
          />
          <div class="card-body">
            <h5 class="card-title">{{ cubo.nombre }}</h5>
            <p class="card-text">modelo: {{ cubo.modelo }}</p>
            <p class="card-text">marca: {{ cubo.marca }}</p>
            <p class="card-text">color: {{ cubo.color }}</p>
            <p class="card-text">precio: {{ cubo.precio }}</p>
            <p class="card-text">VALOR: {{ cubo.valoracion }}</p>
          </div>
        </div>
      </div>
    </div>

    <div>
        <h2>Comentarios</h2>
        <div v-for="comentario in comentarios" :key="comentario">
            <p>{{ comentario.comentario }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const serviceCubos = new ServiceCubos();
export default {
  name: "DetallesVue",
  data() {
    return {
      cubo: [],
      comentarios: [],
    };
  },
  mounted() {
    var id = this.$route.params.id;
    serviceCubos.getDetallesCubosMarcas(id).then((result) => {
      this.cubo = result;
    });
    serviceCubos.getComentarios(id).then((result)=>{
        this.comentarios=result
    })
  },
};
</script>

<style>
</style>