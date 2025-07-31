function buttonAddTasks() {
    // Pega o valor digitado no input (campo de texto)
    let valueInput = document.querySelector('input').value;

    // Verifica se o input está vazio
    if (valueInput === '') {
        // Mostra um alerta estilizado usando SweetAlert2
        Swal.fire({
            icon: 'warning', // Ícone de aviso
            title: 'Campo vazio!', // Título da mensagem
            text: 'Por favor, escreva algo antes de adicionar a tarefa.', // Texto do alerta
            confirmButtonColor: '#660bdd', // Cor do botão "OK"
            background: '#eee', // Cor de fundo do alerta
            color: '#000', // Cor do texto do alerta
        });

        // Encerra a função para não continuar com o restante do código
        return;
    }

    // Cria um novo elemento <li> (item da lista)
    let li = document.createElement('li');

    // Define o conteúdo HTML dentro do <li>
    // Adiciona o texto digitado + uma imagem (ícone de lixeira)
    // A imagem recebe um "onclick" que chama a função deleteTask passando o próprio elemento (this)
    li.innerHTML = valueInput + '<img onclick="deleteTask(this)" src="./assets/trash.png">';

    // Adiciona o <li> criado dentro da <ul> do HTML
    document.querySelector('ul').appendChild(li);

    // Limpa o conteúdo do input para que o usuário possa digitar outra tarefa
    document.querySelector('input').value = '';

    // Foca novamente no input para digitar a próxima tarefa
    document.querySelector('input').focus();
}

// Função que será chamada ao clicar no ícone da lixeira
function deleteTask(li) {
    // Remove o elemento pai da imagem clicada (ou seja, o <li>)
    li.parentElement.remove();
}
