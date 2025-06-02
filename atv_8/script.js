let pessoas = [];

function configurar(){
     let nomeInput = document.getElementById('nomeInput');
     let validarBtn = document.getElementById('validarBtn');
     let sortearBtn = document.getElementById('sortearBtn');

    if (nomeInput instanceof HTMLInputElement) {
    // @ts-ignore
    validarBtn.addEventListener('click', () => {
      const entrada = nomeInput.value.trim();
      if (!entrada) {
        alert('Por favor, insira um nome.');
        return;
      }

      enviarNome(entrada, nomeInput);
    });
  }
}

let nomes = [];

function validarNome(nome) {
  return /^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)+$/.test(nome);
}

function nomeClonado(nome) {
  return nomes.some((n) => n.toLowerCase() === nome.toLowerCase());
}

function enviarNome(entrada, nomeInput) {
  const nomesInseridos = entrada.split(',').map((nome) => nome.trim());
}
     
