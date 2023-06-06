var container = document.querySelector(".container");
var disposicao = document.querySelector("#disposicao");
var curClass = container.classList.contains("lista") ? "lista" : "grid";

var botoesView = document.querySelector("#botoes-view");
var span = document.querySelector("span");

disposicao.addEventListener("change", function (event) {
  container.classList.remove(curClass);
  curClass = disposicao.value;
  container.classList.add(curClass);
});

botoesView.addEventListener("click", function (event) {
  container.classList.remove(curClass);
  container.classList.add(curClass);

});
