var numberSecret = parseInt(Math.random() * (1001 - 1) + 1);
for (var i = 1; i < 11; i++) {
  var tent = prompt(
    "Digite um Número entre 1 e 1000 (lembrete você tem 10 tentativas)"
  );
  if (tent != numberSecret) {
    if (tent < numberSecret) {
      alert(`O número secreto e maior! tentativas ${i}`);
    } else if (tent > numberSecret) {
      alert(`O número secreto e menor! tentativas ${i}`);
    }
  } else {
    alert("Acertou!");
    break;
  }
}
