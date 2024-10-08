import geraSenha from "./gerador";

const senhaGerada = document.querySelector('#senha-gerada');
const qtdCaracter = document.querySelector('#qtd-caracter');
const chkMaiusculas = document.querySelector('#chk-maiusculas');
const chkMinusculas = document.querySelector('#chk-minusculas');
const chkNumeros = document.querySelector('#chk-numeros');
const chkSimbolos = document.querySelector('#chk-simbolos');
const gerarSenha = document.querySelector('#gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracter.value, 
        chkMaiusculas.checked, 
        chkMinusculas.checked, 
        chkNumeros.checked, 
        chkSimbolos.checked
    );

    return senha || 'Nada Selecionado.';
}