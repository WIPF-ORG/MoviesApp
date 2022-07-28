import React from 'react';
import Resultado from './components/Resultado';

function App() {
  const queryParams = new URLSearchParams(window.location.search)
  const pesquisar = queryParams.get("pesquisar") || null;

  return (
    <div className="App">
      <Resultado 
        pesquisar={pesquisar}
        />
    </div>
  );
}

export default App;
