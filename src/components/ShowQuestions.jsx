/*Componente responsável por renderizar as questões */

import React, { useState } from "react";

//Importando as perguntas
import perguntas from "../data/perguntas";

//Importar o contexto da API aqui
import { QuizContextHook } from "../context/QuizContext";
import CorrectOrWrong from "./CorrectOrWrong";


const ShowQuestions = () => {

  //Contexto criado receberá como objeto o a pergunta atual, verificar as suas respostas, e a próxima pergunta
  const { perguntaAtual, verificarResposta, proximaPergunta } = QuizContextHook();

  //estado para encontrar a resposta selecionada
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  //estado para mostrar o feedback ao usuário
  const [mostrarFeedback, setMostrarFeedback] = useState(false);

  //constante questao que receberá a pergunta atual e será chamada no JSX
  const questao = perguntas[perguntaAtual];

  //Funcao do botao ao clicar na opção pretendida
  const handleSubmitAnswer = (opcao) => {
    setRespostaSelecionada(opcao);
    setMostrarFeedback(true);

    //chamar o verificarResposta
    verificarResposta(opcao, questao.correta);

    //adicionar um delay e ir para a próxima
    setTimeout(() => {
      setMostrarFeedback(false); //Não mostrar o feedback no timeout
      setRespostaSelecionada(null); //não mostrar resposta selecionada no timeout
      proximaPergunta();//ir para a próxima pergunta
    },1500); //1500 ms
  };

  return (
    <div className="questions-container">
      <div className="questions-index">
        <p>Pergunta atual: {questao.id} de {perguntas.length}</p>
        <h2>{questao.pergunta}</h2>

        {/**Mapear cada questao, passando as opcoes(alternativas) */}
        <ul>
        {questao.resposta.map((opcao, index) => (
          
            <li key={index}>
              <button
                type="submit"
                className={`select-answer 
                  ${mostrarFeedback && opcao === questao.correta ? 'correto' : 
                  ''} 
                  ${mostrarFeedback && opcao === respostaSelecionada && opcao !== questao.correta ? 'errado' : ''}`}
                onClick={() => handleSubmitAnswer(opcao)}
                disabled={mostrarFeedback}
              >
                {opcao}
              </button>
            </li>
          
        ))}
        </ul>

        {/**Mostrar um feedback visual */}
        <CorrectOrWrong
          respostaSelecionada={respostaSelecionada}
          respostaCorreta={questao.correta}
          mostrar={mostrarFeedback}
        />
      </div>
    </div>
  );
};

export default ShowQuestions;
