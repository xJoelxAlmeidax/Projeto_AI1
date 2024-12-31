//Header e footer
const cabeçalho = document.getElementsByTagName('header')[0];
cabeçalho.innerHTML = `
    <a href="index.html" class="home">
            <img src="IMG/Logo.png" alt="Logo">
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
            <div class="links">
                <div class="redes">
                    <h3>Siga o <b>ALT</b><small>msc</small> :</h3>
                    <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i><p class="hidden">&emsp13;Instagram</p></a>
                    <a href="https://www.tiktok.com/" target="_blank"><i class="fa-brands fa-tiktok"></i><p class="hidden">&emsp13;TikTok</p></a>
                    <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i><p class="hidden">&emsp13;YouTube</p></a>
                    <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-square-facebook"></i><p class="hidden">&emsp13;Facebook</p></a>
                    <a href="https://x.com" target="_blank"><i class="fa-brands fa-x-twitter"></i><p class="hidden">&emsp13;Twitter / X</p></a>
                </div>
                <button id="theme-switch">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                </button>
            </div>
            <p>Copyright &copy; 2024 ALTmsc. All rights reserved</p>
            <br>
                `

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

//--------------------------------DARKMODE--------------------------------

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');
const enableDarkmode=()=>{
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'ativo');
}
const disableDarkmode=()=>{
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if(darkmode == "ativo") enableDarkmode();

themeSwitch.addEventListener("click", () =>{
    darkmode = localStorage.getItem('darkmode');
    if(darkmode != "ativo") enableDarkmode();
    else disableDarkmode();
})