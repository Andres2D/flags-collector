import {Routes, Route } from "react-router";
import './App.css'
import ByName from "./pages/ByName";
import GameOver from "./pages/GameOver";
import Menu from "./pages/Menu";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu />}></Route>
      <Route path='guess-by-name' element={<ByName />}></Route>
      <Route path='game-over' element={<GameOver />}></Route>
    </Routes>
  );
}

export default App;
