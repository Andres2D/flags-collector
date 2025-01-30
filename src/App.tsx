import {Routes, Route } from "react-router";
import './App.css'
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import Menu from "./pages/Menu";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu />}></Route>
      <Route path='guess-by-name' element={<Game />}></Route>
      <Route path='game-over' element={<GameOver />}></Route>
    </Routes>
  );
}

export default App;
