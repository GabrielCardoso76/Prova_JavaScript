function calcular(){
    let dataNascimento = document.getElementById('idade');
    let resultado = document.getElementById('resultado')
    if(dataNascimento instanceof HTMLInputElement && resultado instanceof HTMLParagraphElement){
        let data = dataNascimento.value;
        
        let today = new Date();
        let dataAnalizada= new Date(data);

        let idade = today.getFullYear() - dataAnalizada.getFullYear();
        const monthDiff = today.getMonth() - dataAnalizada.getMonth();
    
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dataAnalizada.getDate())) {
            idade--;
        }
        resultado.textContent = `${idade}`
    }
}