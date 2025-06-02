function adicionar(){
    let nome = document.getElementById('nome');
    let cpf = document.getElementById('cpf');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    let dataNascimento = document.getElementById('data');
    let curso = document.getElementById('curso');
    let resultado = document.getElementById('resultado')

    if(nome instanceof HTMLInputElement && cpf instanceof HTMLInputElement && email instanceof HTMLInputElement && telefone instanceof HTMLInputElement && dataNascimento instanceof HTMLInputElement && curso instanceof HTMLInputElement && resultado instanceof HTMLParagraphElement){
        let nome1 = nome.value;
        let cpf1 = cpf.value;
        let email1 = email.value;
        let telefone1 = telefone.value;
        let dataNascimento1 = dataNascimento.value;
        let curso1 = curso.value;
         

        let primeiro = [];
        primeiro.push(nome1);
        primeiro.push(cpf1);
        primeiro.push(email1);
        primeiro.push(telefone1);
        primeiro.push(dataNascimento1);
        primeiro.push(curso1);
        let alunos = [];
        alunos.push(primeiro);

        resultado.textContent = `${alunos}`
    }
}