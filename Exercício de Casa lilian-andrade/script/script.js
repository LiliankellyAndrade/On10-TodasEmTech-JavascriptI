


function cadastrarDados(event) {
    event.preventDefault();
    
    let titulo = document.getElementById('titulo').value;
    let autor = document.getElementById('autor').value;
    let isbn = document.getElementById('isbn').value;
    let dataDePubicacao = document.getElementById('dataDePubicacao').value;
    let paginas = document.getElementById('paginas').value;
    let dataDeinsercao = new Date().toLocaleDateString('pt-br');
    let horario = new Date().toLocaleTimeString('pt-br');

    if (titulo === "") {
    alert ("O Campo Título não pode ficar vazio")
    }
    else if (autor === "") {
    alert ("O Campo Autor não pode ficar vazio")
    }
    else if (isbn === "") {
    alert ("O Campo ISBN não pode ficar vazio")
    }
    else if (dataDePubicacao === "") {
    alert ("O Campo Data de Publicação não pode ficar vazio")
    }
    else if (paginas === "") {
    alert ("O Campo Páginas não pode ficar vazio")    
    }
    else {
    alert (dataDeinsercao + horario)
        
    }
}

