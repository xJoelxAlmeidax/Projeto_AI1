function data_hora(){
    const dateTimeElement = document.getElementById('data_hora');
    const now = new Date();

    // Formatar a data e hora
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    const formattedDateTime = now.toLocaleDateString('pt-PT', options);

    // Atualizar o elemento com a data e hora formatada
    dateTimeElement.textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);

updateDateTime();
