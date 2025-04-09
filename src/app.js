import "bootstrap";
import "./style.css";

window.onload = function() {
  let encabezado = "No me lo vas a creer, pero...  ";
  let quien = ["Un mono de 3 cabezas ", "Un cocodrilo ", "Un pájaro carpintero ", "Mi tía "];
  let quehizo = ["se comió ", "destruyó ", "arruinó ", "hizo desaparecer "];
  let quecosa = ["mi premio Nobel ", "la vajilla nueva ", "mi souvenir de Vietnam ", "el último alfajor "];
  let cuando = ["ayer. ", "hace 2 semanas ", "el verano pasado. ", "hace una hora. "];
  
  let rdm1 = Math.floor(Math.random() * quien.length);
  let rdm2 = Math.floor(Math.random() * quehizo.length);
  let rdm3 = Math.floor(Math.random() * quecosa.length);
  let rdm4 = Math.floor(Math.random() * cuando.length);

  document.querySelector("#excuse").innerHTML = encabezado + quien[rdm1] + quehizo[rdm2] + quecosa[rdm3] + cuando[rdm4];
  
};
