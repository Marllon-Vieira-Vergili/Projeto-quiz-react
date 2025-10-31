/*CONTEXTO CRIADO PARA REALIZAR A TRANSIÇÃO PARA OS DEMAIS COMPONENTES. */

//IMPORTS
import { createContext, useContext, useState } from "react";

//1 - Instanciando um Objeto para criar o contexto
const QuizContext = createContext();


//2 - Criando um Contexto que será provido e abraçará todo o contexto global
// da aplicação, passando children como propriedade
export const QuizContextProvider = ({children}) => {

    //Criando os estados para definir valores não estáticos
    const [perguntaAtual, setPerguntaAtual] = useState(0); //índice das perguntas
    const [respostas, setRespostas] = useState([]); //Guardar as respostas do usuário em um array
    const [pontuacao, setPontuacao] = useState(0); //juntar as pontuações (scores)
    const [quizFinalizado, setQuizFinalizado] = useState(false);

    /**4 -Criando a função para verificar as respostas */
    const verificarResposta = (respostaSelecionada, respostaCorreta) => {

        //variável para armazenar as questões corretas
        const estaCorreta = respostaSelecionada === respostaCorreta;

        //Se estiver correta, aumentar a pontuação
        if(estaCorreta){
            setPontuacao(pontuacao + 1);
        }

        //Adicionar essa resposta correta, ao array das outras respostas anteriores
        setRespostas([...respostas, {
            pergunta: perguntaAtual,
            resposta: respostaSelecionada,
            correta: estaCorreta
        }]);
    }

    /*5- Criando a função para a próxima pergunta */
    const proximaPergunta = () => {
        setPerguntaAtual(perguntaAtual + 1);
    };  

        /*3 - Criando um objeto que armazenará o valor desse contexto.
Os valores que serão passados:

-a pergunta atual
-as respostas armazenadas do usuário
-as pontuações do usuário
- se o quiz está finalizado ou nao
*/
    const contextValue = {
        perguntaAtual,
        setPerguntaAtual,
        respostas,
        pontuacao,
        setPontuacao,
        quizFinalizado,
        verificarResposta, //Chamar a função no contexto
        proximaPergunta, //chamar a função no contexto
        setQuizFinalizado
    };

    return(
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    );


};

    //4 - Exportando o contexto como um Hook
export const QuizContextHook = () => {
    return useContext(QuizContext);
};
