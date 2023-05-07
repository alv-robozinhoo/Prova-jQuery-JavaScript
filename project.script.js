var totas_as_divisoes = ["all", "nike", "puma", "adidas", "asics"];
var todos_os_botoes = ["botao_all", "botao_nike", "botao_puma", "botao_adidas", "botao_asics"];
var divisao_atual = undefined;

function hide(element_id){
    document.getElementById(element_id).style.display = 'none';
}

function flex(element_id){
    document.getElementById(element_id).style.display = 'flex';
}

function updateButtonSelected(element_id){
    if(element_id === divisao_atual){
        document.getElementById('botao_' + element_id).style.borderBottom = '2px solid black'
    }else{
        document.getElementById('botao_' + element_id).style.borderBottom = 'none'
    }

}

function atualizaBotoes(){
    totas_as_divisoes.forEach(updateButtonSelected)
}

function mudarDivisaoDaPagina(element_id){
    if(element_id === 'all'){
        divisao_atual = element_id;
        totas_as_divisoes.forEach(flex);
    }
    else{
        divisao_atual = element_id
        totas_as_divisoes.forEach(hide);
        document.getElementById(element_id).style.display = 'flex';
    }
    atualizaBotoes()
}