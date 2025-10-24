
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bar from './components/Bar'
import Home from './views/Home';
import Historia from './views/Historia';


function App() {


  return (
    <BrowserRouter>
      <Bar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
      </Routes>

    </BrowserRouter>
  )

}

export default App
