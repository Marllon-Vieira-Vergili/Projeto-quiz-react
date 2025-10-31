/**COMPONENTE RESPONSÁVEL
 * POR RENDERIZAR A QUESTÃO SE ESTIVER 
 * CORRETA COM A COR VERDE,
 * OU RENDERIZAR COR VERMELHO
 * SE ESTIVER ERRADA.
 */



import React from 'react'

//Componente receberá a resposta selecionada, a resposta correta e mostrar na tela
const CorrectOrWrong = ({respostaSelecionada, respostaCorreta, mostrar}) => {

  //Se não deve mostrar, returnar nulo
  if(!mostrar){
    return null;
  };

  //constante para armazenar o valor se está correto
  const estaCorreta = respostaSelecionada === respostaCorreta;

  return (
    //Div ativará a classe CSS feedback se estiver correto, senao, ativar a que estiver errado
    <div className={`feedback ${estaCorreta ? 'correto' : 'errado'}`}>

        {estaCorreta ? (

          <div>
          <span className='icon'>✅</span>
          <p>Correto!</p>
          </div>
        ): (
          <div>
            <span className='icon'>❌</span>
            <p>Errado! a resposta correta era: <strong>{respostaCorreta}</strong></p>
          </div>
        )}
    </div>
  )
}

export default CorrectOrWrong