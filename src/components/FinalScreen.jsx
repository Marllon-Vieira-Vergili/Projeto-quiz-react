/**COMPONENTE RESPONSÁVEL POR MOSTRAR A TELA FINAL
 * COM OS RESULTADOS
 */


import React from 'react'
import { QuizContextHook } from '../context/QuizContext'

//Receberá como parâmetro para reiniciar
const FinalScreen = ({onReiniciar}) => {

  //Usar o parametro de pontuação e respostas
  const {pontuacao, respostas} = QuizContextHook();

  const totalPerguntas = 15;
  const porcentagem = ((pontuacao / totalPerguntas) * 100).toFixed(0);

  //Determinar mensagens baseado na pontuação
  const getMensagem = () => {
    if(porcentagem >= 80) return "Excelente! Você domina o assunto!";
    if(porcentagem >= 60) return "Muito bom! Continue praticando!";
    if(porcentagem >= 40) return "Bom trabalho! Estude um pouco mais!";
    return "Não desanime! continue estudando!";
  };

  return (
    <div className='final-screen'>

      <div className='final-card'>
        <h1>Quiz Finalizado!</h1>

        <div className='resultado-principal'>
          <div className='circulo-pontuacao'>
            <span className='pontuacao-grande'>{pontuacao}</span>
            <span className='total'>{totalPerguntas}</span>
          </div>

          <p className='porcentagem'>{porcentagem} % de acertos</p>
          <p className='mensagem'>{getMensagem()}</p>
        </div>
      </div>


      <button className='btn-reiniciar' onClick={onReiniciar}>
        Fazer Quiz Novamente
      </button>
    </div>
  )
}

export default FinalScreen