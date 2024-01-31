const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const tituloProduto = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const opcaoImagem0 = document.getElementById('0-imagem-miniatura');
const opcaoImagem1 = document.getElementById('1-imagem-miniatura');
const opcaoImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'Verde-Cipreste',
    nomePastaImagens: 'imagens-verde-cipreste',
}
const azulInverno = {
    nome: 'Azul-Inverno',
    nomePastaImagens: 'imagens-azul-inverno',
}
const meiaNoite = {
    nome: 'Meia-Noite',
    nomePastaImagens: 'imagens-meia-noite',
    emEstoque: false,
}
const rosaClaro = {
    nome: 'Rosa-Claro',
    nomePastaImagens: 'imagens-rosa-claro',
}
const estelar = {
    nome: 'Estelar',
    nomePastaImagens: 'imagens-estelar',
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, rosaClaro, estelar];

const opcoesTamanho = ['41mm', '45mm'];

let corSelecionada = 1;
let tamanhoSelecionado = 1;
let imagemSelecionada = 1;

function atualizarCorSelecionada(){
    const corSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
    corSelecionada = numeroCorSelecionada;
    nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
    opcaoImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-0.jpeg`;
    opcaoImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-1.jpeg`;
    opcaoImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-2.jpeg`;
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()}. para caixa de${opcoesTamanho[tamanhoSelecionado]}`    
}

function atualizarTamanho(){
    const opcoesTamanho = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);
    tamanhoSelecionado = opcaoTamanhoSelecionado;
        if (opcaoTamanho[tamanhoSelecionado] === '41mm'){
            imagemVisualizacao.classList.add('caixa-pequena');
            tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`; 
            return;    
        }
        imagemVisualizacao.classList.remove('caixa-pequena');
        tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
}

function atualizarImagemSelecionada (){
    const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);
    imagemSelecionada = opcaoImagemSelecionada;
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
}