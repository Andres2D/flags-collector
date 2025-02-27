import {Routes, Route } from "react-router";
import './App.css'
import ByFlag from "./pages/ByFlag";
import ByName from "./pages/ByName";
import GameOver from "./pages/GameOver";
import Menu from "./pages/Menu";
import ColorFlag from './pages/ColorFlag';
import Intro from './pages/Intro';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Intro />}></Route>
      <Route path='menu' element={<Menu />}></Route>
      <Route path='guess-by-name' element={<ByName />}></Route>
      <Route path='guess-by-flag' element={<ByFlag />}></Route>
      <Route path='game-over' element={<GameOver />}></Route>
      <Route path='color-the-flag' element={<ColorFlag />}></Route>
    </Routes>
  );
}

export default App;
