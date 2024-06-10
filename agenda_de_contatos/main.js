const form = document.getElementById('form')
contatos = [];
numeros = [];
let linhas = '';
const corpoTabela = document.querySelector('tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const nome_contato = document.getElementById('nome_contato')
    const numero_contato = document.getElementById('numero_contato')

    if (contatos.includes(nome_contato.value)) {
        alert(`O contato: ${nome_contato.value} já foi inserido`);
        return;
    } else {
        contatos.push(nome_contato.value);
        numeros.push(parseFloat(numero_contato.value));
    }
    
    let linha = '<tr>';
    linha += `<td>${nome_contato.value}</td>`;
    linha += `<td>${numero_contato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    nome_contato.value = '';
    numero_contato.value = '';
}

function atualizaTabela() {
    corpoTabela.innerHTML = linhas;
}