function getURLParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
function loadPage(index){
    const contentDiv = document.getElementById("content");
    switch(index){
        case 0:
            contentDiv.innerHTML =`
                <div id="quiz">
                    <h1>QUIZ Taylor Swift</h1>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>1. Em que ano Taylor Swift lançou seu álbum de estreia, “Taylor Swift”?</p>
                    <button onclick="checkAnswer(this, true)">2006</button>
                    <button onclick="checkAnswer(this, false)">2004</button>
                    <button onclick="checkAnswer(this, false)">2008</button>
                    <button onclick="checkAnswer(this, false)">2010</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>2. Qual é o nome do meio de Taylor Swift?</p>
                    <button onclick="checkAnswer(this, false)">Jennifer</button>
                    <button onclick="checkAnswer(this, false)">Renee</button>
                    <button onclick="checkAnswer(this, true)">Alison</button>
                    <button onclick="checkAnswer(this, false)">Michelle</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>3. Para qual álbum Taylor Swift ganhou o Grammy Award de Álbum do Ano em 2016?</p>
                    <button onclick="checkAnswer(this, false)">Red</button>
                    <button onclick="checkAnswer(this, true)">1989</button>
                    <button onclick="checkAnswer(this, false)">Reputation</button>
                    <button onclick="checkAnswer(this, false)">Speak Now</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>4. Completa a Letra:</p>
                    <p><em>I was so ahead of the curve, the curve became a sphere</em></p>
                    <button onclick="checkAnswer(this, false)"><em>At least I'm trying</em></button>
                    <button onclick="checkAnswer(this, true)"><em>Fell behind all my classmates and I ended up here</em></button>
                    <button onclick="checkAnswer(this, false)"><em>and suddenly I was orbiting my own expectations.</em></button>
                    <button onclick="checkAnswer(this, false)"><em>and I found myself spinning endlessly, searching for an exit.</em></button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>5. Que instrumento Taylor Swift aprendeu a tocar em uma idade jovem?</p>
                    <button onclick="checkAnswer(this, false)">Piano</button>
                    <button onclick="checkAnswer(this, true)">Guitarra</button>
                    <button onclick="checkAnswer(this, false)">Violino</button>
                    <button onclick="checkAnswer(this, false)">Bateria</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>6. Em que cidade nasceu Taylor Swift?</p>
                    <button onclick="checkAnswer(this, true)">Nashville</button>
                    <button onclick="checkAnswer(this, false)">Reading</button>
                    <button onclick="checkAnswer(this, false)">Los Angeles</button>
                    <button onclick="checkAnswer(this, false)">New York</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>7. Em que gênero musical Taylor Swift começou sua carreira?</p>
                    <button onclick="checkAnswer(this, false)">Pop</button>
                    <button onclick="checkAnswer(this, false)">R\&B</button>
                    <button onclick="checkAnswer(this, false)">Rock</button>
                    <button onclick="checkAnswer(this, true)">Country</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>8. Completa a Letra:</p>
                    <p><em>Do you miss the rogue</em></p>
                    <button onclick="checkAnswer(this, false)"><em>who whispered rebellion in the quiet moments.</em></button>
                    <button onclick="checkAnswer(this, true)"><em>who coaxed you into paradise and left you there?</em></button>
                    <button onclick="checkAnswer(this, false)"><em>who danced on the edge of danger.</em></button>
                    <button onclick="checkAnswer(this, false)"><em> who once defied the rules</em></button>
                    </div>

                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>9. Completa a letra:</p>
                    <p><em>Now you hang from my lips</em></p>
                    <button onclick="checkAnswer(this, false)"><em>every word spilling like a secret.</em></button>
                    <button onclick="checkAnswer(this, false)"><em>a delicate thread of longing.</em></button>
                    <button onclick="checkAnswer(this, true)"><em>like the Gardens of Babylon.</em></button>
                    <button onclick="checkAnswer(this, false)"><em>as if every syllable could unravel the silence between us.</em></button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>10. Completa a letra:</p>
                    <p><em>Cards on the table</em></p>
                    <button onclick="checkAnswer(this, false)"><em>Poison blood from the wound of the pricked hand</em></button>
                    <button onclick="checkAnswer(this, true)"><em>Mine play out like fools in a fable</em></button>
                    <button onclick="checkAnswer(this, false)"><em>I’m still figuring out who I am</em></button>
                    <button onclick="checkAnswer(this, false)"><em>I’m still trying.</em></button>
                    </div>
                </div>
                <p id="score">Pontuação: 0</p>
                <button onclick="resetQuiz()" class="close-btn">Reiniciar Jogo</button>
                <div class="overlay" id="overlay">
                    <div class="custom-alert" id="custom-alert">
                        <p id="alertMessage"></p>
                        <button class="close-btn" onclick="closeCustomAlert()">Tentar Novamente</button>
                    </div>
                </div> 
            `
            break;
        case 1:
            contentDiv.innerHTML =`
                <div id="quiz">
                    <h1>QUIZ Geral de Música</h1>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>1. Qual é o nome do álbum de estreia de Gracie Abrams?</p>
                    <button onclick="checkAnswer(this, false)">Punisher</button>
                    <button onclick="checkAnswer(this, true)">Good Riddance</button>
                    <button onclick="checkAnswer(this, false)">Stick Season</button>
                    <button onclick="checkAnswer(this, false)">Quiet Life</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>2. Em que música de Phoebe Bridgers encontramos a frase <em>“Jesus Christ, I’m so blue all the time”</em>?</p>
                    <button onclick="checkAnswer(this, false)">Garden Song</button>
                    <button onclick="checkAnswer(this, false)">Kyoto</button>
                    <button onclick="checkAnswer(this, true)">Funeral</button>
                    <button onclick="checkAnswer(this, false)">Motion Sickness</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>3. Qual é a cidade natal de Noah Kahan, mencionada em suas músicas?</p>
                    <button onclick="checkAnswer(this, false)">Portland</button>
                    <button onclick="checkAnswer(this, true)">Vermont</button>
                    <button onclick="checkAnswer(this, false)">Nashville</button>
                    <button onclick="checkAnswer(this, false)">Boston</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>4. Qual destas músicas é de Adam Melchor?</p>
                    <button onclick="checkAnswer(this, false)">Strawberry Wine</button>
                    <button onclick="checkAnswer(this, true)">Real Estate</button>
                    <button onclick="checkAnswer(this, false)">Georgia</button>
                    <button onclick="checkAnswer(this, false)">All My Ghosts</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>5. Qual é a colaboração entre Phoebe Bridgers, Lucy Dacus e Julien Baker?</p>
                    <button onclick="checkAnswer(this, true)">Boygenius</button>
                    <button onclick="checkAnswer(this, false)">Better Oblivion Community Center</button>
                    <button onclick="checkAnswer(this, false)">Iris</button>
                    <button onclick="checkAnswer(this, false)">Bridgers and Bright Eyes</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>6. Em que música de Noah Kahan aparece a frase "Don't let this darkness fool you All lights turned off can be turned on"?</p>
                    <button onclick="checkAnswer(this, false)">Northern Attitude</button>
                    <button onclick="checkAnswer(this, false)">Dial Drunk</button>
                    <button onclick="checkAnswer(this, true)">Call You're Mom</button>
                    <button onclick="checkAnswer(this, false)">She Calls Me Back</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>7. Qual destas músicas faz parte do EP minor de Gracie Abrams?</p>
                    <button onclick="checkAnswer(this, false)">Block Me Out</button>
                    <button onclick="checkAnswer(this, false)">This is What It Feels Like</button>
                    <button onclick="checkAnswer(this, false)">I Told You Things</button>
                    <button onclick="checkAnswer(this, true)">I Miss You, I'm Sorry</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>8. Em que música, Phoebe Bridgers canta <em>"And when I grow up, I'm gonna look up From my phone and see my life?"</em></p>
                    <button onclick="checkAnswer(this, false)">Kyoto</button>
                    <button onclick="checkAnswer(this, true)">Garden Song</button>
                    <button onclick="checkAnswer(this, false)">Halloween</button>
                    <button onclick="checkAnswer(this, false)">Scott Street</button>
                    </div>

                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>9. Em que música Adam Melchor colaborou com Laufey?</p>
                    <button onclick="checkAnswer(this, false)">Begin Again</button>
                    <button onclick="checkAnswer(this, false)">Joyride</button>
                    <button onclick="checkAnswer(this, true)">Love Flew Away</button>
                    <button onclick="checkAnswer(this, false)">The Archer</button>
                    </div>
                    <div class="question">
                    <p class="correct-message hidden">Resposta correta!</p>
                    <p>10. Que titulo de música Adam Melchor e Taylor Swift têm em comum?</p>
                    <button onclick="checkAnswer(this, false)">Joyride</button>
                    <button onclick="checkAnswer(this, true)">The Archer</button>
                    <button onclick="checkAnswer(this, false)">Renegade</button>
                    <button onclick="checkAnswer(this, false)">Real Estate</button>
                    </div>
                </div>
                <p id="score">Pontuação: 0</p>
                <button onclick="resetQuiz()" class="close-btn">Reiniciar Jogo</button>
                <div class="overlay" id="overlay">
                    <div class="custom-alert" id="custom-alert">
                        <p id="alertMessage"></p>
                        <button class="close-btn" onclick="closeCustomAlert()">Tentar Novamente</button>
                    </div>
                </div> 
            `
            break;
    }
}
const idextra = getURLParameter("idextra");
if (idextra !== null) {
    loadPage(parseInt(idextra, 10)); // Converte para número
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
let score = 0;
let answeredQuestions = 0;

function checkAnswer(button, isCorrect) {
  var questionElement = button.parentElement;
  var message = questionElement.querySelector(".correct-message");

  if (questionElement.className.includes("answered")) {
    return;
  }

  if (isCorrect) {
    score += 5;
    message.classList.remove("hidden"); 
  } else {
    score -= 2;
  }

  if(score<0){
    document.getElementById("score").innerText = "Pontuação: 0 ";
  }
  else{
    document.getElementById("score").innerText = "Pontuação: " + score;
  }

  questionElement.className += " answered";
  answeredQuestions++;

  var buttons = questionElement.getElementsByTagName("button");
  if(isCorrect){
    button.className += " correct"
  }
  else{
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i] == button && isCorrect) {
        buttons[i].className += " correct";
      } else if (buttons[i] == button && !isCorrect) {
        buttons[i].className += " incorrect";
      } else if (!isCorrect && buttons[i].getAttribute("onclick").includes("true")) {
        buttons[i].className += " correct";
      } else {
        buttons[i].className += " incorrect";
      }
    }
  }
  
  function resetQuiz() {
    score = 0;
    answeredQuestions = 0;
    document.getElementById("score").innerText = `Pontuação: ${score}`;
  
    const questions = document.querySelectorAll(".question");
    questions.forEach(q => {
      q.classList.remove("answered");
      const message = q.querySelector(".correct-message");
      message.classList.add("hidden"); 
      const buttons = q.querySelectorAll("button");
      buttons.forEach(btn => {
        btn.classList.remove("correct", "incorrect");
      });
    });
  }

  if (answeredQuestions == 10 && parseInt(idextra, 10)==0) {
    if(score<0)score=0;
    setTimeout(function () {
        if(score==50){
            window.alert('PARABÉNS! És um Swiftie supremo!\nPontuação: ' + score);
        }
        else if(score>=25){
            window.alert('Muito Bem! És um verdadeiro Swiftie!\nPontuação: ' + score);
        }
        else if(score>=10){
            window.alert('Quase um swiftie! Boa!\nPontuação: ' + score);
        }
        else{
            window.alert('Podes sempre tentar novamente.\nPontuação: ' + score);
        }
      resetQuiz();
    }, 500);
  }
  else if(answeredQuestions == 10 && parseInt(idextra, 10)==1){
    if(score<0)score=0;
    setTimeout(function () {
        if(score==50){
            window.alert('PARABÉNS! És um sabichão!\nPontuação: ' + score);
        }
        else if(score>=25){
            window.alert('Muito Bem! Tens alto conhecimento musical.\nPontuação: ' + score);
        }
        else if(score>=10){
            window.alert('Sabes coisas! Boa!\nPontuação: ' + score);
        }
        else{
            window.alert('Podes sempre tentar novamente.\nPontuação: ' + score);
        }
      resetQuiz();
    }, 500);
  }
}



