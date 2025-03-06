import React from 'react'
import CorETexto from'/1-componentes/CorETexto';
import Botao from '/1-componentes/Botao';

function App() {
  return (
    <div>
      <h1>React!</h1>
      <p>Tô aprendendo!</p>
      
      <CorETexto cor="vermelho" mensagem={"Este é um texto em uppercase!".toUpperCase()} />
      
      <Botao label="Cliquei neste botao e finalizei meu exercicio " />
     
      
    </div>
  )
}

export default App
