import Filme from './Filme.jsx'
import Filmes from './Filmes.jsx';
import { Reset } from './generic/Reset.js';
import Sessão from './Sessão.jsx';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Assento from './Assento.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Reset />

        <Routes>
          <Route path="/" element={<Filme />} />
          <Route path="/sessao/:idFilme" element={<Sessão />} />
          <Route path="/assentos/:idSessao" element={<Assento />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
