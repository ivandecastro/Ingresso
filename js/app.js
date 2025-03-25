function comprar() {
    //Getting the variable of the HTML
    let tickets = document.getElementById('tipo-ingresso').value;
    let quantity = parseInt(document.getElementById('qtd').value);
    let track = parseInt(document.getElementById('qtd-pista').textContent);
    let upperSeat = parseInt(document.getElementById('qtd-superior').textContent);
    let lowerSeat = parseInt(document.getElementById('qtd-inferior').textContent);

    //Making the code to check if the quantity is null or 0.
    if (quantity === '' || isNaN(quantity) || quantity === 0) {
        alert('Por favor, adicione uma quantidade válida.');
        return;
    }
    //Making the code used to buy the tickets.
    if (tickets == 'inferior') {
        //Code used to check if the quantity is superior of the seats.
        if(quantity > lowerSeat){
            alert('Não há mais ingressos dos assentos inferiores disponiveis.');
            return;
        }
        document.getElementById('qtd-inferior').textContent = lowerSeat - quantity;
    }
    
    if (tickets == 'superior') {
        //Code used to check if the quantity is superior of the seats.
        if(quantity > upperSeat){
            alert('Não há mais ingressos dos assentos superiores disponiveis.');
            return;
        }
        document.getElementById('qtd-superior').textContent = upperSeat - quantity;
    }
    
    if(tickets == 'pista'){
        //Code used to check if the quantity is superior of the seats.
        if(quantity > track){
            alert('Não há mais ingressos da pista disponiveis.');
            return;
        }
        document.getElementById('qtd-pista').textContent = track - quantity;
    }
}   