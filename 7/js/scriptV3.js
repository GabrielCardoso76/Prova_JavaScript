function calcular(){
    let dataNascimento = document.getElementById('idade');
    let resultado = document.getElementById('resultado')
    if(dataNascimento instanceof HTMLInputElement && resultado instanceof HTMLParagraphElement){
        let dataN = dataNascimento.value;
        
        let regex = /^\d{2}\/\d{2}\/\d{4}$/;

            // Crie uma instância da data que você deseja formatar
            let data = new Date();
            // Crie um objeto com um novo padrão de formatação
            let padraoDataBR = { day: '2-digit', month: '2-digit', year: 'numeric' };
            // Crie uma instância do Intl.DateTimeFormat com as opções
            //let dataFormatoBR = new Intl.DateTimeFormat('pt-BR', padraoDataBR);
            // Formate a data usando o formatador
            //let dataFormatada = dataFormatoBR.format(data);

            //console.log(dataFormatada); // imprimirá no formato 'dd/mm/yyyy'

        if(regex.test(dataN)){
            
            
            // Não consegui
            let today = new Date();
            let dataAnalizada= new Date(dataN);

            let idade = today.getFullYear() - dataAnalizada.getFullYear();
            const monthDiff = today.getMonth() - dataAnalizada.getMonth();
        
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dataAnalizada.getDate())) {
                idade--;
            }
            resultado.textContent = `${idade}`
        }
        
    }
}