     document.addEventListener("DOMContentLoaded", function() {
        let enviar = document.getElementById("enviar");
        
            enviar.addEventListener("click", function(){
                let nombre = document.getElementById('nombre').value;
                let apellido = document.getElementById('apellido').value;
                let fechaNacimiento = document.getElementById('fechaNacimiento').value;

        fetch('https://jsonplaceholder.typicode.com/users', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
         method: 'POST',
         body: JSON.stringify({
         nombre,
         apellido,
         fechaNacimiento
        })
        })
        .then(response => response.json())
        .then(datos => {
            nombre = "";
            apellido = "";
            fechaNacimiento = "";
            });
        
    })
})