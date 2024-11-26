//SLIDER

let count = 1;
document.getElementById("radio1").checked = true;
const slidesContainer = document.querySelector(".slide");
// Intervalo automático do carrossel
setInterval(function () {
  nextImage();
}, 4000);

function nextImage() {
  if (count == 5) {
    // Exibe o slide 6 por apenas 1 segundo
    document.getElementById("radio6").checked = true;
    document.getElementById("Artista").innerHTML = "Artista Destacado: Taylor Swift";
    setTimeout(() => {count = 1;
      slidesContainer.style.transition = "none"; // Remove transição temporariamente
      document.getElementById("radio1" ).checked = true;

      // Restaura a transição para os próximos slides
      setTimeout(() => {
        slidesContainer.style.transition = ""; // Retorna à transição padrão
      }, 50); // Tempo curto para o slide 6 (1 segundo)
    }, 1000);

  } 
  else {
    // Lógica normal para os outros slides
    count++;
    document.getElementById("radio" + count).checked = true;

    switch (count) {
      case 1:
        document.getElementById("Artista").innerHTML = "Artista Destacado: Taylor Swift";
        break;
      case 2:
        document.getElementById("Artista").innerHTML = "Artista Destacado: Noah Kahan";
        break;
      case 3:
        document.getElementById("Artista").innerHTML = "Artista Destacado: Phoebe Bridgers";
        break;
      case 4:
        document.getElementById("Artista").innerHTML = "Artista Destacado: Adam Melchor";
        break;
      case 5:
        document.getElementById("Artista").innerHTML = "Artista Destacado: Gracie Abrams";
        break;
    }
  }
}


// Função para selecionar manualmente um slide
function setManualSelection(index) {
  count = index;
  document.getElementById("radio" + count).checked = true;
  switch (count) {
    case 1:
      document.getElementById("Artista").innerHTML = "Artista Destacado: Taylor Swift";
      break;
    case 2:
      document.getElementById("Artista").innerHTML = "Artista Destacado: Noah Kahan";
      break;
    case 3:
      document.getElementById("Artista").innerHTML = "Artista Destacado: Phoebe Bridgers";
      break;
    case 4:
      document.getElementById("Artista").innerHTML = "Artista Destacado: Adam Melchor";
      break;
    case 5:
      document.getElementById("Artista").innerHTML = "Artista Destacado: Gracie Abrams";
      break;
  }
}

// Adiciona evento aos botões de rádio
for (let i = 1; i <= 6; i++) {
  document.getElementById("radio" + i).addEventListener("click", function () {
    setManualSelection(i);
  });
}
