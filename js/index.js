document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("buttonText")

    function guardar() {
        const input = document.getElementById("inputText"); //Tomo el elemento inputText para poder manipularlo
        const valorInput = input.value; //Tomo el valor que se ingrese dentro del input que tome antes
        localStorage.setItem("input", valorInput); //Con el metodo setItem guardo en localStorage el valor que este en valorInput, y le dara el nombre de "input"
    }

    boton.addEventListener("click", guardar);

});