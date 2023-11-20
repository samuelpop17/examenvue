<template>
  <div>
    <p>nombre: {{ perfil.nombre }}</p>
    <p>email: {{ perfil.email }}</p>
    <p>contraseña: {{ perfil.pass }}</p>
    <p>id: {{ perfil.idUsuario }}</p>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const serviceCubos = new ServiceCubos();
export default {
name:"VerPefil",
data() {
    return {
      perfil: [],
    };
  },
  mounted() {
    serviceCubos.getPerfil().then((response) => {
      this.perfil = response.data;
    });
  },
}
</script>

<style>

</style>