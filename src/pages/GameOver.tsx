import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../interface/store";
import { gameActions } from "../store/gameSlice";

function GameOver() {

  const game = useSelector((state: RootState) => state.game);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gameOver = () => {
    dispatch(gameActions.setStartGame('guessByName'));
    navigate('/')
  }

  return (
    <section>
      <h1>Game Over</h1>
      <p><strong>Correct answers:</strong> {game.score.correct}</p>
      <p><strong>Wrong answers:</strong> {game.score.wrong}</p>
      <button onClick={() => gameOver()}>Menu</button>
    </section>
  ) 
}

export default GameOver;
