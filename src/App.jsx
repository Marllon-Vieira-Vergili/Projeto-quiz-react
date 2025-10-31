
import './App.css'
import FinalScreen from './components/FinalScreen';
import ShowQuestions from './components/ShowQuestions'
import Score from './components/Score';

//Importando o HOok do quiz
import { QuizContextHook } from './context/QuizContext';


//Importando a imagem da logo do quiz
import QuizLogo from './images/quiz-logo.png'

//Importando o useContext para usar aqui
import { useState } from 'react';

function App() {

  //Estado para verificar se o quiz está iniciado ou nao
  const [quizIniciado, setQuizIniciado] = useState(false);

  //chamando o Hook Customizado para encontrar pergunta atual, mudar ela, e alterar pontuacao
  const {perguntaAtual, setPerguntaAtual, setPontuacao} = QuizContextHook();


  //verificar se o quiz acabou
  const quizFinalizado = perguntaAtual >= 15;

  //funcao para iniciar o quiz
  const iniciarQuiz = () => {
    setQuizIniciado(true);
  }

  //Funcao reiniciar quiz
  const reiniciarQuiz = () => {
    setPerguntaAtual(0);
    setPontuacao(0);
    setQuizIniciado(false);
  };

  return (
    
    <div className='layout-principal'>

      {/**Tela inicial */}
      {!quizIniciado && !quizFinalizado && (
        <>

           {/**Menu Introdução */}
        <div className='header-layout'>

          <h1>Bem-Vindo ao QUIZ!</h1>

            <img src={QuizLogo} alt='img/quiz' style={{width: '50px'}}/>
        </div>

          {/**Container do QUIZ */}
          <div className='quiz-container-principal'>

            <div className='div-instruction'>
              <p>Seja bem-vindo! O quiz funcionará da seguinte forma. Se caso a resposta
                estiver correta, piscará uma luz verde na selecionada. Se caso o usuário
                escolher a resposta errada clicando em cima dela, será aceso com a luz vermelha
                e a luz verde piscará na correta. Boa sorte!</p>
              <hr/>
            </div>

            <div className='container-button'>
              <button onClick={iniciarQuiz}>Iniciar Quiz</button>
              
              
            </div>
          </div>
        </>
      )}

      {/**Tela do quiz */}
      {quizIniciado && !quizFinalizado && (
        <div className='quiz-container-principal'>
          {/**Score sempre será visível durante o quiz */}
          <Score/>

          {/**Perguntas */}
          <ShowQuestions />
        </div>
      )}

      {/**TELA FINAL */}
      {quizFinalizado && (
        <FinalScreen onReiniciar={reiniciarQuiz}/>
      )}
    </div>
  )
}

export default App
