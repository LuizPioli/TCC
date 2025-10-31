
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bar from './components/Bar'
import Home from './views/Home';
import Historia from './views/Historia';
import Titulos from './views/Titulos';
import Fundação from './views/Fundação';
import Pele from './views/pele';


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
      </Routes>

    </BrowserRouter>
  )

}

export default App
