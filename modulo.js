import { contador, alerta } from "./contador.js";
import { promesa } from "./promesa.js";

const async=document.getElementById("async")
contador()
// alerta()

// las promesas no se leen directamente llamando a la funcion, ya que este daria una respuesta compleja que no es lo que buscamos

// para leer correctamente una promesa e ir directo a la respuesta de la misma debemos usar la palabra reservada await (esperar)  esta se encarga de esperar la respuesta de la promesa y leerla correctamente
await promesa(true)
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
;


