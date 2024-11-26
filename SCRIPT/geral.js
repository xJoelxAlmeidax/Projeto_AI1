// Seleciona o link do logo e os elementos h1 e h5
const logo = document.querySelector(".home");
const title = document.querySelector(".home h1");
const subtitle = document.querySelector(".home h5");

// Adiciona evento para quando o rato entra no logo
logo.addEventListener("mouseenter", () => {
    title.classList.remove("hidden");
    subtitle.classList.remove("hidden");
});

// Adiciona evento para quando o rato sai do logo
logo.addEventListener("mouseleave", () => {
    title.classList.add("hidden");
    subtitle.classList.add("hidden");
});


//DATA E HORA

function data_horaF(){
    const dateTimeElement = document.getElementById('data_hora');
    const now = new Date();

    // Formatar a data e hora
    const options = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
    };
    const formattedDateTime = now.toLocaleDateString('pt-PT', options);

    // Atualizar o elemento com a data e hora formatada
    dateTimeElement.textContent = formattedDateTime;
}

setInterval(data_horaF, 1000);

data_horaF();

function abrirSidebar() {
    document.getElementById("mySidebar").classList.add("open");
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden"; 
  }

function fecharSidebar() {
    document.getElementById("mySidebar").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = ""; 
}

