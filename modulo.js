import { contador, alerta } from "./contador.js";
import { promesa } from "./promesa.js";
import { asincrono } from "./async.js";
const async=document.getElementById("async")
contador()
// alerta()

// las promesas no se leen directamente llamando a la funcion, ya que este daria una respuesta compleja que no es lo que buscamos


 promesa(false)
.then((response)=>{//con la promesa usamos el then para controlar las respuestas correctas y poder hacer uso de ellas segun lo que nos plazca
    // el then funciona con una funcion de flecha que se encarga de leer las respuestas para luego poder hacer con eso lo que queramos
    async.textContent=response
    console.log(response)
})
.catch((e)=>{
    // el .catch se encarga de leer los errores para asi poder controlarlo y hacer lo que necesitemos con dicho error
    async.textContent=e
    console.log(e)
})
.finally(()=>{
    console.log("finalmente")
})
;


lectura()

async function lectura(){

    // para leer correctamente una promesa e ir directo a la respuesta de la misma debemos usar la palabra reservada await (esperar)  esta se encarga de esperar la respuesta de la promesa y leerla correctamente

    // el await solo se puede usar bajo 2 condiciones
    // 1) que este dentro de una funcion que tenga la palabra reservada "async", es decir que sea una funcion asincrona
    // 2) que se lea la promesa fuera de las funciones/clases/metodos
   const respuesta=await asincrono(5);
   console.log(respuesta)
}
