//Header e footer
const cabeçalho = document.getElementsByTagName('header')[0];
cabeçalho.innerHTML = `
    <a href="index.html" class="home">
            <img src="IMG/Logo.svg" alt="Logo">
        </a>
        <!--NAVBAR NORMAL-->
        <nav>
            <ul class="menu">
                <li>
                    <a href="#"><h3><i class="fa-solid fa-microphone"></i>&emsp;Artistas</h3></a>
                    <ul class="submenu">
                        <li><a href="Taylor Swift.html">Taylor Swift</a></li>
                        <li><a href="Noah Kahan.html">Noah Kahan</a></li>
                        <li><a href="Phoebe Bridgers.html">Phoebe Bridgers</a></li>
                        <li><a href="Adam Melchor.html">Adam Melchor</a></li>
                        <li><a href="Gracie Abrams.html">Gracie Abrams</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><h3><i class="fa-solid fa-guitar"></i>&emsp;Extras</h3></a>
                    <ul class="submenu">
                        <li><a href="extras.html?idextra=0">Quiz Taylor Swift</a></li>
                        <li><a href="extras.html?idextra=1">Quiz Geral</a></li>
                        <li><a href="extras.html?idextra=2">Palavras Cruzadas</a></li>
                        <li><a href="extras.html?idextra=3">Letras enviadas</a></li>
                    </ul>
                </li>
                <li>
                    <a href="Enviar Letra.html"><h3><i class="fa-solid fa-envelope"></i>&emsp;Enviar letras</h3></a>
                </li>
            </ul>
        </nav>
        <!--NAVBAR SIDEBAR-->
        <button class="menu-toggle" id="menuToggle" onclick="abrirSidebar()"><i class="fa-solid fa-bars"></i></button>
        <div class="overlay" id="overlay" onclick="fecharSidebar()"></div>
        <div class="sidebar" id="mySidebar">
            <button class="button-close" onclick="fecharSidebar()"><i class="fa-solid fa-xmark"></i></button>
            <ul class="menu side">
                <li>
                    <a href="#"><h3><i class="fa-solid fa-microphone"></i>&emsp;Artistas</h3></a>
                        <li><a href="Taylor Swift.html">Taylor Swift</a></li>
                        <li><a href="Noah Kahan.html">Noah Kahan</a></li>
                        <li><a href="Phoebe Bridgers.html">Phoebe Bridgers</a></li>
                        <li><a href="Adam Melchor.html">Adam Melchor</a></li>
                        <li><a href="Gracie Abrams.html">Gracie Abrams</a></li>
                </li>
                <li>
                    <a href="#"><h3><i class="fa-solid fa-guitar"></i>&emsp;Extras</h3></a>
                        <li><a href="extras.html?idextra=0">Quiz Taylor Swift</a></li>
                        <li><a href="extras.html?idextra=1">Quiz Geral</a></li>
                        <li><a href="extras.html?idextra=2">Palavras Cruzadas</a></li>
                        <li><a href="extras.html?idextra=3">Letras enviadas</a></li>
                </li>
                <li>
                    <a href="Enviar Letra.html"><h3><i class="fa-solid fa-envelope"></i>&emsp;Enviar letras</h3></a>
                </li>
            </ul>
        </div>
`


const rodape = document.getElementsByTagName('footer')[0];
rodape.innerHTML=`
<h3>Siga o <b>PRO</b><small>Music</small> :</h3>
            <br>
            <br>
            <div class="links">
                <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i>&emsp;Instagram</a>
                <a href="https://www.tiktok.com/" target="_blank"><i class="fa-brands fa-tiktok"></i>&emsp;TikTok</a>
                <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i>&emsp;YouTube</a>
                <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-square-facebook"></i>&emsp;Facebook</a>
                <a href="https://x.com" target="_blank"><i class="fa-brands fa-x-twitter"></i>&emsp;X/twitter</a>
            </div>`

// Seleciona o link do logo e os elementos h1 e h5
const logo = document.querySelector(".home");
const title = document.querySelector(".home h1");
const subtitle = document.querySelector(".home h5");


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

    dateTimeElement.textContent = formattedDateTime;
}

data_horaF(); // atualizar ao dar F5 na página
setInterval(data_horaF, 1000); // atualizar de segundo a segundo



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

