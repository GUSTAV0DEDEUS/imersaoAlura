var listaLivros = [
  "https://img.travessa.com.br/livro/BA/27/2731b60e-016c-4b03-9eba-a1a319d25334.jpg",
  "https://m.media-amazon.com/images/I/51oVUOULy0L.jpg",
  "https://www.bonslivrosparaler.com.br/uploads/posts/4c74cb30125248797583fef69289b785.jpg",
  "https://criticaconsciente.files.wordpress.com/2012/03/46150320_1.jpg",
  "https://m.media-amazon.com/images/I/518UWo1qbVL.jpg",
  "https://tocalivros.s3.amazonaws.com/images/audiolivros/200/a/-/a-revolucao-dos-bichos-george-orwell-1060657.jpg",
  "https://m.media-amazon.com/images/I/819js3EQwbL.jpg",
  "https://m.media-amazon.com/images/I/91TRcz0q+pL.jpg",
  "https://m.media-amazon.com/images/I/51re868J-lL.jpg",
];
var listaNomes = [
  "Admiravel Mundo Novo",
  "O estranho Misterioso",
  "A queda",
  "Quarto de Despejo",
  "Capitães da Areia",
  "Revolução dos bichos",
  "1984",
  "Memorias do subsolo",
  "Modernidade liquida",
];
var i = 0;
while (i < listaLivros.length && i < listaNomes.length) {
  if (listaLivros[i].endsWith("jpg") || listaLivros[i].endsWith("jpeg")) {
    document.write(
      "<div class='box'> <img src=" +
        listaLivros[i] +
        "> <h2>" +
        listaNomes[i] +
        "</h2></div>"
    );
  }
  i++;
}
