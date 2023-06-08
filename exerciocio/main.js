const lista = document.querySelectorAll('ul')
document.querySelector('[botao]').addEventListener('click',() => {
    lista.setAttribute('data-lista', 'mostrar')
})
document.querySelector(".close").addEventListener("click", () => {
    lista.setAttribute("data-lista", "esconder");
  });