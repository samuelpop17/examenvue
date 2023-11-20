<template>
  <div class="fixed-top text-start" style="max-width: inherit; margin: auto">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">examenCubos</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Cubos</router-link
              >
            </li>
            
            <li class="nav-item dropdown">
              <a
              class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="fetchMarcas"
              >
                Modelos
            </a>
              <ul class="dropdown-menu">
                <li v-for="marca of marcas" :key="marca">
                  <router-link class="dropdown-item" :to="'/marca/'+marca" >{{marca}}</router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
              class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              
              >
                Inicio de sesion
            </a>
              <ul class="dropdown-menu">
                <li >
                  <router-link class="dropdown-item" :to="'/login/'" >Login</router-link>
                </li>
                <li >
                  <router-link class="dropdown-item" :to="'/registro/'" >Registro</router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
              class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              
              >
               Opciones al Inicio de sesion
            </a>
              <ul class="dropdown-menu">
                <li >
                  <router-link class="dropdown-item" :to="'/verperfil/'" >Ver Perfil</router-link>
                </li>
                <li >
                  <router-link class="dropdown-item" :to="'/vercompras/'" >Ver Compras</router-link>
                </li>
                <li >
                  <router-link class="dropdown-item" :to="'/realizarcompra/'" >Realizar Compras</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const serviceCubos = new ServiceCubos();
export default {
name: "MenuCubo",
data(){
return{
  marcas:[]
}
},
mounted(){
    
},
methods:{
  
    fetchMarcas() {
    serviceCubos.getMarcas().then((result)=>{
    this.marcas=result
  })
  }
}

}
</script>

<style>

</style>