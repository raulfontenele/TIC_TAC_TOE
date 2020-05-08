var container_jogo;
var container_vitoria;

var tabuleiro = [
    ['','',''],
    ['','',''],
    ['','','']
];

const simbolos =['X','O'];

var player = 0;

const sequencias_vitoria = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[2,0],[1,1],[0,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]]
];


desenhar = function(ctrVitoria){
    let conteudo = '';
    for(let linha = 0;linha<3;linha++){
        for(let coluna = 0;coluna<3;coluna++){
            if(tabuleiro[linha][coluna] == '' && ctrVitoria == false){
                conteudo += "<div onclick = marcacao(" + linha + "," + coluna + ")>" + tabuleiro[linha][coluna] + "</div>";
            }
            else{
                conteudo += "<div>" + tabuleiro[linha][coluna] + "</div>";
            }
            
        }
    }
    container_jogo.innerHTML = conteudo;
}

ChecarVencedor = function(){
    let vitoria = false;
    sequencias_vitoria.forEach(combinacao => {
        if(tabuleiro[ combinacao[0][0] ][combinacao[0][1]] ==  tabuleiro[ combinacao[1][0] ][combinacao[1][1]] && tabuleiro[ combinacao[0][0] ][combinacao[0][1]] == tabuleiro[ combinacao[2][0] ][combinacao[2][1]] ){
            if(tabuleiro[ combinacao[0][0] ][combinacao[0][1]] == simbolos[player]){
                vitoria = true;
            }
            
        }
    });
    return vitoria;
}

geriatra = function(){
    let idosa = true; 
    for(let linha = 0;linha<3;linha++){
        for(let coluna = 0;coluna<3;coluna++){
            if(tabuleiro[linha][coluna] == '' ){
                idosa = false;
            }
            
        }
    }
    return idosa;
}

marcacao = function(coorX,coorY){
    tabuleiro[coorX][coorY] = simbolos[player];

    if(ChecarVencedor()){
        console.log("Ganhou mizarávi!!");
        container_vitoria.innerHTML = "Ganhou mizarávi!!";
        desenhar(true);
    }
    else if(geriatra()){
        container_vitoria.innerHTML = "Deu véa mizarávi!!";
        console.log("Deu véa mizarávi!!");
        desenhar(true);
    }
    else{
        player = player==0?1:0;
        desenhar(false);
    }

}

start = function(divTabuleiro,divVitoria){
    container_jogo = divTabuleiro;
    container_vitoria = divVitoria;
    desenhar(false);
}