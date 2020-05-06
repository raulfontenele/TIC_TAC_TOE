var cotainer_jogo;
var container_vitoria;

var tabuleiro = [
    ['','',''],
    ['','',''],
    ['','','']
];

const simbolos = ['X','O'];

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
    for(let linha = 0; linha<3;linha++){
        for(let coluna = 0; coluna<3;coluna++){
            if(tabuleiro[linha][coluna] == '' && ctrVitoria == false){
                conteudo += "<div onclick = marcacao(" + linha + "," + coluna +")>" + tabuleiro[linha][coluna] + "</div>";
            }
            else{
                conteudo += "<div>" + tabuleiro[linha][coluna] + "</div>";
            }
            
        }
    }
    cotainer_jogo.innerHTML = conteudo;
}

marcacao = function(coorX,coorY){
    tabuleiro[coorX][coorY] = simbolos[player];
    
    if(checarVencedor()){
        desenhar(true);
        container_vitoria.innerHTML = "Ganhou mizerávi!!";
        console.log("Ganhou mizerávi!!");
    }
    else if(geriatra()){
        desenhar(true);
        container_vitoria.innerHTML = "Deu velha mizerávi!!";
        console.log("Deu velha mizerávi!!");
    }
    else{
        desenhar(false);
        player = player==0?1:0; 
    }
       
}

geriatra = function(){
    let velha = true;
    for(let linha = 0; linha<3;linha++){
        for(let coluna = 0; coluna<3;coluna++){
            if(tabuleiro[linha][coluna] == ''){
                velha = false;
            }
        }
    }
    return velha;
}

checarVencedor = function(){
    let vencedor = false;
    sequencias_vitoria.forEach(combinacao => {
        if(tabuleiro[combinacao[0][0]][combinacao[0][1]] ==tabuleiro[combinacao[1][0]][combinacao[1][1]] && tabuleiro[combinacao[1][0]][combinacao[1][1]] == tabuleiro[combinacao[2][0]][combinacao[2][1]] ){
            if(tabuleiro[combinacao[0][0]][combinacao[0][1]] == simbolos[player]){
                vencedor = true;
            }
        }
        
    });
    return vencedor;
}

inicio = function(cont_jogo,cont_vit){
    cotainer_jogo = cont_jogo;
    container_vitoria = cont_vit;
    desenhar(false);
}