/* Arquivo javascript armazenará as perguntas do quiz
em um array */

const perguntas = [
    {
        id: 1,
        pergunta: "Qual tag HTML é usada para criar um parágrafo?",
        resposta: ["<p>", "<h1>", "<div>"],
        correta: "<p>"
    },
    {
        id: 2,
        pergunta: "Qual propriedade CSS é usada para mudar a cor do texto?",
        resposta: ["color", "background-color", "font-color"],
        correta: "color"
    },
    {
        id: 3,
        pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
        resposta: ["print()", "console.log()", "log.console()"],
        correta: "console.log()"
    },
    {
        id: 4,
        pergunta: "Em JavaScript, qual operador é usado para comparar valor e tipo?",
        resposta: ["==", "===", "!="],
        correta: "==="
    },
    {
        id: 5,
        pergunta: "Em React, qual hook é usado para gerenciar estado em um componente funcional?",
        resposta: ["useState", "useEffect", "useContext"],
        correta: "useState"
    },
    {
        id: 6,
        pergunta: "Qual comando cria um novo projeto React com Vite?",
        resposta: [
            "npx create-react-app nome-projeto",
            "npm init vite@latest nome-projeto",
            "npx vite-create nome-projeto"
        ],
        correta: "npm init vite@latest nome-projeto"
    },
    {
        id: 7,
        pergunta: "Qual atributo HTML é usado para definir o link de uma imagem?",
        resposta: ["src", "href", "link"],
        correta: "src"
    },
    {
        id: 8,
        pergunta: "Qual função do JavaScript converte uma string em número inteiro?",
        resposta: ["parseInt()", "toNumber()", "Number.parse()"],
        correta: "parseInt()"
    },
    {
        id: 9,
        pergunta: "No CSS, qual unidade é relativa ao tamanho da fonte do elemento raiz (html)?",
        resposta: ["em", "px", "rem"],
        correta: "rem"
    },
    {
        id: 10,
        pergunta: "Qual é o retorno padrão de um componente React?",
        resposta: ["HTML puro", "JSX", "DOM virtual"],
        correta: "JSX"
    },
    {
        id: 11,
        pergunta: "O que o método map() faz em um array?",
        resposta: [
            "Modifica o array original",
            "Percorre e retorna um novo array transformado",
            "Remove elementos do array"
        ],
        correta: "Percorre e retorna um novo array transformado"
    },
    {
        id: 12,
        pergunta: "Em JavaScript, qual tipo de dado o valor 'true' representa?",
        resposta: ["String", "Boolean", "Number"],
        correta: "Boolean"
    },
    {
        id: 13,
        pergunta: "Qual evento é disparado quando um formulário é enviado no React?",
        resposta: ["onInput", "onSubmit", "onChange"],
        correta: "onSubmit"
    },
    {
        id: 14,
        pergunta: "Qual comando é usado para instalar uma dependência no npm?",
        resposta: ["npm run", "npm install", "npm start"],
        correta: "npm install"
    },
    {
        id: 15,
        pergunta: "Em JavaScript, qual método remove o último item de um array?",
        resposta: ["shift()", "pop()", "splice()"],
        correta: "pop()"
    }
];

export default perguntas;
