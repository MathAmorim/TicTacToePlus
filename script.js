$(function(){
	// Variáveis para controlar o estado do jogo
var currentPlayer = 'X';
var gameOver = false;

// Função para verificar se um jogador ganhou
function checkWinner() {
    var casa = document.querySelectorAll('.casa');
    var ganhador = false;

    // Verifique as combinações de vitória horizontal, vertical e diagonal
    var combinacoesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas horizontais
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas verticais
        [0, 4, 8], [2, 4, 6] // Diagonais
    ];

    for (var i = 0; i < combinacoesVitoria.length; i++) {
        var a = combinacoesVitoria[i][0];
        var b = combinacoesVitoria[i][1];
        var c = combinacoesVitoria[i][2];

        if (casa[a].getAttribute('data-player') === currentPlayer &&
            casa[b].getAttribute('data-player') === currentPlayer &&
            casa[c].getAttribute('data-player') === currentPlayer) {
            ganhador = true;
            break;
        }
    }

    if (ganhador) {
        document.getElementById('resultado').textContent = 'Jogador ' + currentPlayer + ' venceu!';
        gameOver = true;
    } else if (!Array.from(casa).some(c => !c.getAttribute('data-player'))) {
        // Se não houver mais casas vazias, é um empate
        document.getElementById('resultado').textContent = 'Empate!';
        gameOver = true;
    }
}

// Função para lidar com o clique em uma casa
function handleClick(casa) {
    if (!gameOver && !casa.getAttribute('data-player')) {
        casa.style.backgroundImage = currentPlayer === 'X' ? 'url(1.png)' : 'url(2.png)';
        casa.setAttribute('data-player', currentPlayer);
        checkWinner();
        if (!gameOver) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Adicione o evento de clique a todas as casas
var casas = document.querySelectorAll('.casa');
casas.forEach(function (casa) {
    casa.addEventListener('click', function () {
        handleClick(casa);
    });
});
});

function refreshPage(){
    window.location.reload();
} 