<template>
    <div>

        <form
      v-on:submit.prevent="realizarForm()">
      <select v-model="idCubo" name="" id="">
        <option :value="cubo.idCubo" v-for="cubo in cubos" :key="cubo">{{ cubo.nombre }}</option>
      </select>
      <button>Comprar</button>
      </form>
    </div>
  </template>
  
  <script>
  import ServiceCubos from "@/services/ServiceCubos";
  const serviceCubos = new ServiceCubos();
  
  export default {
    name: "RealizarCompra",
    data() {
      return {
        cubos: [],
        idCubo: null, // Propiedad para almacenar el valor seleccionado
      };
    },
    mounted() {
      serviceCubos.getCubos().then((result) => {
        this.cubos = result;
      });
    },
    methods:{
        realizarForm(){
            serviceCubos.RealizarCompras(this.idCubo).then((result)=>{
                console.log(result)
                this.$router.push('/vercompras');
            })
        }
    }
  };
  </script>
  
  <style>
  </style>
  