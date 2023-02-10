arrayFilm = [];
arrayTrailer = [];
function adicionarFilme() {
  film = document.getElementById("filme").value;
  trailer = document.getElementById("trailer").value;
  if (film != "" && trailer != "") {
    arrayFilm.push(film);
    arrayTrailer.push(trailer);
    if (film.endsWith("jpeg") || film.endsWith("png") || film.endsWith("jpg")) {
      loadFilm();
      clean();
    }else{
      alert("Preencha o campo com imagens no formato .png, .jpg ou .jpeg");
    }
  } else {
    alert("Preencha os campos");
  }
}

function loadFilm() {
  list = document.getElementById("listaFilmes");
  list.innerHTML = "";
  for (var i = 0; i < arrayFilm.length && i < arrayTrailer.length; i++) {
    list.innerHTML =
      list.innerHTML +
      `<div class="box">
      <a href="${arrayTrailer[i]}" target="_blank">
      <img src="${arrayFilm[i]}">
      </a>
      </div>`;
  }
}
function clean(){
  document.getElementById('filme').value = '';
  document.getElementById('trailer').value = '';
}