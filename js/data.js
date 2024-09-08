document.addEventListener("DOMContentLoaded", () => {

    const extraer = localStorage.getItem("input");
    document.getElementById("data").innerHTML = extraer;
});