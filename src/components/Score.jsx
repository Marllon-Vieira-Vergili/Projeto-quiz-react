/**COMPONENTE RESPONSÁVEL POR MOSTRAR 
 * A PONTUAÇÃO (SCORE)
 */


import React from 'react'
import { QuizContextHook } from '../context/QuizContext'

const Score = () => {

  //Pegar os valores do contexto
  const {pontuacao, perguntaAtual} = QuizContextHook();

  return (

    <div className='score-container'>
      
      <div className='score-box'>

        <p className='score-label'>Pontuação</p>
        <p className='score-number'>{pontuacao}</p>
      </div>

        <div className='progress-box'>
          <p>Pergunta {perguntaAtual + 1} de 15</p>
          
        </div>
    </div>
  )
}

export default Score