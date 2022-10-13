import './App.css';
import Menu from './menu';
import { Routes, Route} from "react-router-dom";
import Board from './Board/board';
import Manual from './manual';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/board" element={<Board/>} />
        <Route path='/manual' element={<Manual />} />
      </Routes>
    </div>
  );
}

export default App;
