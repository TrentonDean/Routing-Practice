import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import NumOrWord from './components/NumOrWord';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/:input' element={<NumOrWord />} />
          <Route path='/:input/:color' element={<NumOrWord />} />
          <Route path='/:input/:color/:bgColor' element={<NumOrWord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
