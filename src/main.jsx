import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//1 - Importando as instâncias do contexto, Provider
//provendo o contexto á toda aplicação, pelo arquivo main
import { QuizContextProvider} from './context/QuizContext.jsx'



createRoot(document.getElementById('root')).render(

  <StrictMode>

    {/*QuizContextProvider abraçando todo o componente APP
    e sua hierarquia de Componentes filhos */}
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </StrictMode>,
)
