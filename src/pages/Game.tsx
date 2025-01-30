import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import useRequest from '../helpers/fetch';
import { FetchGame, RootState } from '../interface/store';
import { gameActions } from '../store/gameSlice';

const Game = () => {

  useEffect(() => {
    dispatch(gameActions.setStartGame('guessByName'));
    sendRequestHandler();
  }, []);

  const navigate = useNavigate();
  const { sendRequest } = useRequest();
  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const dispatchTest = (data: FetchGame) => {
    dispatch(gameActions.nextQuestion(data));
  }

  const sendRequestHandler = () => {
    sendRequest('europe', dispatchTest);
  }

  const handleOptionSelected = (option: string) => {
    dispatch(gameActions.selectAnswer(option));
  }

  const nextQuestionHandler = () => {
    dispatch(gameActions.updateScore());

    if(game.currentLevel === 10) {
      navigate('/game-over');
    } else {
      sendRequestHandler();
    }
  }

  const answersMap = game.currentOptions.map(({ flag, name }) => 
    (
      <li key={name}>
        <img 
          onClick={() => handleOptionSelected(name)}
          width="100px" 
          height="70px"
          src={flag} 
          style={{ border: '2px solid black', cursor: 'pointer', borderColor: game.answerSelected === name ? 'red' : 'black' }} 
        />
      </li>
    )
  );

  return (
    <section>
      <br />
      <br />
      <br />
      <p>Question : {game.currentLevel}/10</p>
      <h3>{game.correctAnswer}</h3>
      <ul>
        { answersMap }
      </ul>
      <button onClick={nextQuestionHandler}>Next</button>
    </section>
  )
}

export default Game;
