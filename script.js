function realizarLogin(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagem = document.getElementById('mensagem');

    if (usuario === 'admin' && senha === '1234') {
        mensagem.textContent = '';
        document.getElementById('nomeOperador').textContent = usuario;
        document.getElementById('telaLogin').classList.add('oculto');
        document.getElementById('telaPainel').classList.remove('oculto');
    } else {
        mensagem.textContent = 'Usuário ou senha inválidos. Tente admin / 1234.';
        mensagem.className = 'mensagem erro';
    }
}

function realizarLogout() {
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('telaPainel').classList.add('oculto');
    document.getElementById('telaLogin').classList.remove('oculto');
}

function mudarFase(cor) {
    document.getElementById('luz-vermelha').classList.remove('ativa');
    document.getElementById('luz-amarela').classList.remove('ativa');
    document.getElementById('luz-verde').classList.remove('ativa');

    document.getElementById('luz-' + cor).classList.add('ativa');

    const textos = {
        verde: 'Sinal Aberto (Fluxo Livre)',
        amarela: 'Atenção (Transição de Fase)',
        vermelha: 'Sinal Fechado (Via Bloqueada)'
    };

    document.getElementById('statusSemaforo').textContent = textos[cor];
}