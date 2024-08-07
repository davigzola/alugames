function alterarStatus(jogo) {
    let jogoSelecionado = document.getElementById(`game-${jogo}`);
    let nomeJogoSelecionado = jogoSelecionado.querySelector('.dashboard__item__name');
    let botaoJogoSelecionado = jogoSelecionado.querySelector('.dashboard__item__button');
    let imagemJogoSelecionado = jogoSelecionado.querySelector('.dashboard__item__img');

    if(botaoJogoSelecionado.classList.contains('dashboard__item__button--return')) {
        if(confirm(`Você está devolvendo o jogo: ${nomeJogoSelecionado.textContent}`)) {
            botaoJogoSelecionado.classList.remove('dashboard__item__button--return');
            botaoJogoSelecionado.innerHTML = "Alugar";
    
            imagemJogoSelecionado.classList.remove('dashboard__item__img--rented');
        }
    } else {
        if(confirm(`Você está alugando o jogo: ${nomeJogoSelecionado.textContent}`)) {
            botaoJogoSelecionado.classList.add('dashboard__item__button--return');
            botaoJogoSelecionado.innerHTML = "Devolver";
    
            imagemJogoSelecionado.classList.add('dashboard__item__img--rented');
        }
    }
}