import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import Marca from './components/Marca.vue';
import DetallesCubo from './components/DetallesCubo.vue';
import Registro from './components/Registro.vue';
import Login from './components/Login.vue';
import VerPerfil from './components/VerPerfil.vue';
import VerCompras from './components/VerCompras.vue';
import RealizarCompra from './components/RealizarCompra.vue';
const myRoutes = [
    {
        path: "/", component: Home,
        
    },
    {
        
        path: "/marca/:marca", component: Marca,
    },
    {
        
        path: "/detalles/:id", component: DetallesCubo,
    },
    {
        
        path: "/registro", component: Registro,
    },
    {
        
        path: "/login", component: Login,
    },
    {
        
        path: "/verperfil", component: VerPerfil,
    },
    {
        
        path: "/vercompras", component: VerCompras,
    },
    {
        
        path: "/realizarcompra", component: RealizarCompra,
    },
        
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;