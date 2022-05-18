const elementoDOM = document.getElementById('contactoScreen');
const abrirContacto = () => {
    elementoDOM.classList.add("contactoScreen");
}
const cerrarContacto = () => {
    elementoDOM.classList.remove("contactoScreen");
}