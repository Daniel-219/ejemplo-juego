//document.addEventListener("MContentLoaded", function(){})

const nombre = document.getElementById("name");
const imail = document.getElementById("email");
const pass = document.getElementById("pass");
const envio = document.getElementById("enviar");

envio.addEventListener("click", function(e){
    
    
  
    if(!nombre.value.trim()){
        alert("Falta el nombre");
        return;
    }

    
    if(!imail.value.trim()) {
        alert("Falta el email");
        return;
    }
    
    if(!pass.value.trim()) {
        alert("y la contraseña");
        return;
    }

   alert('listo ya puedes "volver" disfruta');
   const usuariodatos= {
    nombre:nombre.value.trim(),
    imail:imail.value.trim(),
    pass:pass.value.trim()
   }
   console.log(usuariodatos);

   const UsuarioJson = JSON.stringify(usuariodatos);
console.log(UsuarioJson);
    localStorage.setItem("usuariodatos", UsuarioJson);
})
