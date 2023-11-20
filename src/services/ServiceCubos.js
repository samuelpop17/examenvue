import axios from 'axios';
import Global from '@/Global';
export default class ServiceCubos {


    getMarcas() {
        return new Promise(function (resolve) {

            var url = "https://apitiendacubos2023.azurewebsites.net/api/Cubos/Marcas"
            var marcas = []
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })

        })
    }
    getCubosMarcas(marca) {
        return new Promise(function (resolve) {

            var url = "https://apitiendacubos2023.azurewebsites.net/api/Cubos/CubosMarca/" + marca
            var cubos = []
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })

        })
    }

    getDetallesCubosMarcas(id) {
        return new Promise(function (resolve) {

            var url = "https://apitiendacubos2023.azurewebsites.net/api/Cubos/" + id
            var cubo = []
            axios.get(url).then(response => {
                cubo = response.data;
                resolve(cubo);
            })

        })
    }


    getCubos() {
        return new Promise(function (resolve) {

            var url = "https://apitiendacubos2023.azurewebsites.net/api/Cubos"
            var cubos = []
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })

        })
    }


    getComentarios(id) {
        return new Promise(function (resolve) {

            var url = "https://apitiendacubos2023.azurewebsites.net/api/ComentariosCubo/GetComentariosCubo/" + id
            var comentarios = []
            axios.get(url).then(response => {
                comentarios = response.data;
                resolve(comentarios);
            })

        })
    }


    Login(usuario) {
        return new Promise(function (resolve) {

            var url = "https://apitiendacubos2023.azurewebsites.net/api/Manage/Login"
            axios.post(url, usuario).then(response => {
                resolve(response);
            });
        });
    }

    Registro(usuario) {
        return new Promise(function (resolve) {

            var url = "https://apitiendacubos2023.azurewebsites.net/api/Manage/RegistroUsuario"
            axios.post(url, usuario).then(response => {
                resolve(response);
            });
        });
    }


    getPerfil () {
        return new Promise (function (resolve) {
          var url ="https://apitiendacubos2023.azurewebsites.net/api/Manage/PerfilUsuario"
          var token = Global.autoriza;
    
          axios.get(url, {headers:{'Authorization':'bearer '+token}}).then(response => {
            resolve(response);
          })
        });
      }

      getCompras () {
        return new Promise (function (resolve) {
          var url ="https://apitiendacubos2023.azurewebsites.net/api/Compra/ComprasUsuario"
          var token = Global.autoriza;
    
          axios.get(url, {headers:{'Authorization':'bearer '+token}}).then(response => {
            resolve(response);
          })
        });
      }

      RealizarCompras (id) {
        return new Promise (function (resolve) {
          var url ="https://apitiendacubos2023.azurewebsites.net/api/Compra/InsertarPedido/"+id
          var token = Global.autoriza;
    
          axios.post(url, {headers:{'Authorization':'bearer '+token}}).then(response => {
            resolve(response);
          })
        });
      }



    
}
