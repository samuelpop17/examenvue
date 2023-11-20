<template>
  <div>
    <h1>Login</h1>
    <form
      v-on:submit.prevent="realizarForm()"
      style="width: 500px; margin: 0 auto"
    >
      <label class="form-label">User</label>
      <input type="text" class="form-control" v-model="name" />
      <label class="form-label">Email</label>
      <input type="text" class="form-control" v-model="ema" />
      <label class="form-label">Password</label>
      <input type="text" class="form-control" v-model="passwd" />
      <button class="btn btn-success">Login</button>
    </form>
    
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const serviceCubos = new ServiceCubos();
export default {
name:"RegistroCubos",
data() {
    return {
      ema: "",
      passwd: "",
      name:"",
      usuario: {idUsuario:0,nombre:"", email: "", pass: "" },
    };
  },
  methods: {
    realizarForm() {
      this.usuario = {idUsuario:0,nombre:this.name, email: this.ema, pass: this.passwd };
      console.log(this.usuario);
      serviceCubos.Registro(this.usuario).then((response) => {
        
        console.log(response);
        this.$router.push('/login');
      });
    },
  },
};
</script>

<style>
</style>