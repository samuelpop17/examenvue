<template>
    <div class="container">
    <table class="table table-bordered table-striped text-center">
      <thead>
        <tr>
          <th>ID Cubo</th>
          <th>ID Pedido</th>
          <th>ID Usuario</th>
          <th>Fecha Pedido</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="compra in compras" :key="compra">
          <td>{{ compra.idCubo }}</td>
          <td>{{ compra.idPedido }}</td>
          <td>{{ compra.idUsuario }}</td>
          <td>{{ compra.fechaPedido }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const serviceCubos = new ServiceCubos();
export default {
name:"VerCompras",
data() {
    return {
      compras: [],
    };
  },
  mounted() {
    serviceCubos.getCompras().then((response) => {
      this.compras = response.data;
    });
  },
}
</script>

<style>

</style>