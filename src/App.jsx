
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bar from './components/Bar'
import Home from './views/Home';
import Historia from './views/Historia';
import Titulos from './views/Titulos';
import Fundação from './views/Fundação';
import Pele from './views/pele';
import Escudos from './views/escudos';
import Idolos from './views/idolos';
import TimeProfissional from './views/timeprofissional';


function App() {


  return (
    <BrowserRouter>
      <Bar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/titulos" element={<Titulos />} />
        <Route path="/fundacao" element={<Fundação />} />
        <Route path="/pele" element={<Pele/>}/>
        <Route path="/escudos" element={<Escudos/>} />
        <Route path="/idolos" element={<Idolos/>}/>
        <Route path="/timeprofissional" element={<TimeProfissional/>}/>
      </Routes>

    </BrowserRouter>
  )

}

export default App
