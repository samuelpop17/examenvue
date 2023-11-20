<template>
  <div class="container">
    <h1>Cubos de la marca {{ marca }}</h1>
  <div class="row">
    <div class="col-md-4 mb-4" v-for="cubo in cubos" :key="cubo">
      <div class="card">
        <img class="card-img-top" :src="cubo.imagen" alt="Card image cap" style="max-height: 200px;" />
        <div class="card-body">
          <h5 class="card-title">{{ cubo.nombre }}</h5>
          <p class="card-text">VALOR: {{ cubo.valor }}</p>
        </div>
        <router-link class="btn btn-success" :to="'/detalles/' + cubo.idCubo">Detalles</router-link>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const serviceCubos = new ServiceCubos();
export default {
    name:"MarcaCubo",
    data() {
    return {
      cubos: [],
      marca:""
    };
  },
  mounted() {
    var mar = this.$route.params.marca;
    serviceCubos.getCubosMarcas(mar).then((result) => {
      this.cubos = result;
      this.marca=mar
    });
    console.log(this.cubos);
  },
  watch: {
    "$route.params.marca": "fetchData",
  },
  methods:{
    fetchData(){
        var mar = this.$route.params.marca;
    serviceCubos.getCubosMarcas(mar).then((result) => {
      this.cubos = result;
    });
    
    }
  }
};
</script>

<style>
</style>