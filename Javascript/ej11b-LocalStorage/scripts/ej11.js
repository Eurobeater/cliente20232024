let nombre = prompt("Escribe tu nombre");
localStorage.setItem("nombreUsuario", nombre);

let edad = 18;
localStorage.setItem("edadUsuario", edad);

let vehiculos = {
    motor: "seat panda",
    pedales: "orbea 500x1"
};

localStorage.setItem("vehiculosUsuario", JSON.stringify(vehiculos));        //pasarlo el objeto a string

let hermanos = ["antonia", "faustino"];

localStorage.setItem("hermanosUsuario", JSON.stringify(hermanos));  // Convertido a JSON AKA pasado a string

document.querySelector("button").addEventListener("click", function(){
    console.log("Tu nombre es ", localStorage.getItem("nombreUsuario"));
    console.log("Tu edad es ", localStorage.getItem("edadUsuario"));
    console.log("Tus vehículos son ", JSON.parse(localStorage.getItem("vehiculosUsuario")));  // Convertido de JSON
    console.log("Tus hermanos son ", JSON.parse(localStorage.getItem("hermanosUsuario")));  // Convertido de JSON
    console.log(JSON.parse(localStorage.getItem("vehiculosUsuario")).pedales);
    console.log(JSON.parse(localStorage.getItem("hermanosUsuario"))[1]);

    console.log(typeof localStorage.getItem("edadUsuario"));
});
