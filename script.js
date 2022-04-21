function adicionarItem() {
  const pegarBotao = document.querySelector('#criar-tarefa');
  const pegarTagTextoTarefa = document.querySelector('#texto-tarefa');

  pegarBotao.addEventListener('click', function (event) {
  const escreverTarefa = document.querySelector('input').value;

  if(escreverTarefa !== ''){
    const criarTopico = document.createElement('li');
    criarTopico.className = 'TopicoCriado';
    criarTopico.innerHTML = escreverTarefa;
    const listaTarefa = document.querySelector('#lista-tarefas');
    listaTarefa.appendChild(criarTopico);
    pegarTagTextoTarefa.value = null;
  }else{
    alert('Por Favor Amigão, insira alguma tarefa!!');
  }
  });
}
adicionarItem();

function alterarCorFundoDoItem(){
  const criarTopico = document.querySelector('section');

  criarTopico.addEventListener('click', function(event) {
    if(event.target.className === 'TopicoCriado'){
      const pegaLinha = document.querySelectorAll('li');
    for(let index = 0; index < pegaLinha.length; index += 1){
      if(pegaLinha[index] !== event.target){
        pegaLinha[index].style.backgroundColor = 'rgb(255,255,255)';
        pegaLinha[index].classList.remove('selected');
      }else{
        pegaLinha[index].style.backgroundColor = 'rgb(128,128,128)';
        pegaLinha[index].classList.add('selected');
      }
    }
  }
  });
}

alterarCorFundoDoItem();

function botaoApagaTudo(){
  const clearButton = document.createElement('button');
  clearButton.id="apaga-tudo";
  clearButton.innerHTML = 'Apagar Tudo';
  const localizacaoButton = document.querySelector('section');

  localizacaoButton.appendChild(clearButton);

  clearButton.addEventListener('click', function(event){
  const listaDeTarefas = document.querySelectorAll('li');
    for(let index =0; index < listaDeTarefas.length; index += 1){
      listaDeTarefas[index].remove();
      localStorage.removeItem('tarefas');
    }
  });
}

botaoApagaTudo();

function riscarItemDaLista() {
  const listaTarefa = document.querySelector('#lista-tarefas');
  listaTarefa.addEventListener('dblclick', function(event){
  const pegaLinha = document.querySelectorAll('li');
  for (let index = 0; index < pegaLinha.length; index += 1) {
    if(pegaLinha[index] === event.target){
      if(pegaLinha[index].classList.contains('completed')){
      pegaLinha[index].classList.remove('completed');
     }else{
      pegaLinha[index].classList.add('completed');
     }
    }
  } 
  });
}

riscarItemDaLista();

function removerItemCompletado() {
  const botaoRemover = document.createElement('button');
  botaoRemover.id = 'remover-finalizados';
  botaoRemover.innerText = 'Remover Finalizados';
  const localizacaoButton = document.querySelector('section');
  localizacaoButton.appendChild(botaoRemover);

  const itemRiscado = document.getElementsByClassName('completed');
  const todasTarefas = document.getElementById('lista-tarefas');

  botaoRemover.addEventListener('click', function(event){
  for (let index = itemRiscado.length; index > 0 ; index -= 1) {
    todasTarefas.removeChild(itemRiscado[index -1]);
  }
  });
}

removerItemCompletado();

function botaoSalvar() {
  const saveButton = document.createElement('button');
  saveButton.id = 'salvar-tarefas';
  saveButton.innerHTML = 'Salvar Tarefas';
  const localizacaoButton = document.querySelector('section');
  localizacaoButton.appendChild(saveButton);

  const allTasks = document.querySelector('#lista-tarefas');

  saveButton.addEventListener('click', function(event) {
    localStorage.setItem('tarefas', allTasks.innerHTML);
  });
}

botaoSalvar();

function botaoUp() {
  const upButton = document.createElement('button');
  upButton.id = 'mover-cima';
  upButton.innerHTML = 'Up';
  const localizacaoButton = document.querySelector('section');
  localizacaoButton.appendChild(upButton);

  const allTasks = document.querySelectorAll('li');
  const itemRiscado = document.getElementsByClassName('completed');

  upButton.addEventListener('click', function(event) {
    for (let index = 0; index < allTasks.length; index += 1) {
      if(allTasks[index].classList.contains('selected')){
      }
    }
  });

};

botaoUp();

function botaoDown() {
  const downButton = document.createElement('button');
  downButton.id = 'mover-baixo';
  downButton.innerHTML = 'Down';
  const localizacaoButton = document.querySelector('section');
  localizacaoButton.appendChild(downButton);

  

};

botaoDown();

window.onload = function () {
  const allTasks = document.querySelector('#lista-tarefas');
  allTasks.innerHTML = localStorage.getItem('tarefas');
};
