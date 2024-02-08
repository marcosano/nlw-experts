const perguntas = [
    {
    pergunta: "O que é JavaScript?",
    resposta: [
    "Uma linguagem de programação para estilos de design",
    "Uma linguagem de programação para páginas estáticas",
    "Uma linguagem de programação para tornar as páginas da web dinâmicas",
    ],
    correta: 2,
    },
    {
    pergunta: "Qual é o operador usado para atribuição em JavaScript?",
    resposta: ["=", "==", "==="],
    correta: 0,
    },
    {
    pergunta: "Qual é a função do método 'querySelector()'?",
    resposta: [
    "Selecionar vários elementos no documento",
    "Selecionar o primeiro elemento que corresponde a um seletor específico",
    "Alterar o estilo de um elemento HTML",
    ],
    correta: 1,
    },
    {
    pergunta: "O que é uma variável em JavaScript?",
    resposta: [
    "Um tipo de dado numérico",
    "Um valor fixo que não pode ser alterado",
    "Um contêiner para armazenar dados que pode ser referenciado e manipulado em um programa",
    ],
    correta: 2,
    },
    {
    pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
    resposta: [
    "Comparar dois valores e retornar verdadeiro se eles forem iguais em valor e tipo",
    "Comparar dois valores e retornar verdadeiro se eles forem iguais em valor, independentemente do tipo",
    "Comparar dois valores e retornar verdadeiro se eles forem iguais em tipo, independentemente do valor",
    ],
    correta: 0,
    },
    {
    pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    resposta: [
    "'null' é atribuído a uma variável quando ela foi declarada, mas ainda não foi inicializada, enquanto 'undefined' é atribuído automaticamente a variáveis que não foram inicializadas",
    "'null' e 'undefined' são termos intercambiáveis em JavaScript",
    "'undefined' é atribuído a uma variável quando ela foi declarada, mas ainda não foi inicializada, enquanto 'null' é atribuído automaticamente a variáveis que não foram inicializadas",
    ],
    correta: 0,
    },
    {
    pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
    resposta: [
    "Adicionar um novo elemento ao documento HTML",
    "Adicionar um ouvinte de evento a um elemento HTML, esperando que um evento específico ocorra",
    "Remover um elemento do documento HTML",
    ],
    correta: 1,
    },
    {
    pergunta:
    "Qual é a diferença entre 'let', 'const' e 'var' na declaração de variáveis em JavaScript?",
    resposta: [
    "'let' e 'const' são usados para declarar variáveis locais, enquanto 'var' é usada para variáveis globais",
    "'let' e 'const' são palavras-chave reservadas para o mesmo propósito e podem ser usadas de forma intercambiável",
    "'let' e 'const' são palavras-chave reservadas usadas para variáveis constantes, enquanto 'var' é usada para variáveis mutáveis",
    ],
    correta: 0,
    },
    {
    pergunta: "Qual é a função do método 'map()' em JavaScript?",
    resposta: [
    "Iterar sobre os elementos de uma matriz e executar uma função em cada elemento",
    "Adicionar um novo elemento a uma matriz",
    "Remover elementos duplicados de uma matriz",
    ],
    correta: 0,
    },
    {
    pergunta: "O que é uma função de callback em JavaScript?",
    resposta: [
    "Uma função que chama outra função",
    "Uma função que é passada como argumento para outra função e é executada após algum tipo de evento",
    "Uma função que é chamada recursivamente em um loop",
    ],
    correta: 1,
    },
    ];
    
    //pega pelo id
    const quiz = document.querySelector('#quiz')
    //pega pela tag
    const template = document.querySelector('template')
    
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    
    
    
    for(const item of perguntas){
    
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.resposta){
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector('span').textContent = resposta;
    
    //
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(resposta)
    dt.querySelector('input').onchange = (event)=>{
    // alert(event.target.value) = pegar o valor do indice
    const estacorreta = event.target.value == item.correta // true or false
    corretas.delete(item)
    if(estacorreta){
    corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }
    //
    quizItem.querySelector("dl").appendChild(dt);
    
    }
    
    //remove dt resposta A
    quizItem.querySelector('dl dt').remove()
    
    
    quiz.appendChild(quizItem);
    
    }