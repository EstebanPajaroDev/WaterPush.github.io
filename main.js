"use stric";

  function obtenerEdad() {
    const print = document.getElementById("caja");
    const inputEdad = document.getElementById("edad");
    const edad = inputEdad.value;
    
   if (edad <= 17) {
    print.innerHTML = `Eres menor de edad, No puedes pasar⚠️⚠️`;
    } else if(edad > 60){
        print.innerHTML = `A esta edad puede ser peligroso😨, Ten mucho cuidado!!`;
    } else {
        print.innerHTML = `Eres mayor de edad, Puedes pasar😁`;
    }
}

