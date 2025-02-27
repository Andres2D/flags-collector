import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import useRequest from '../helpers/fetch';
import { FetchGame, RootState, OptionFlag } from '../interface/store';
import { gameActions } from '../store/gameSlice';

const ByName = () => {

  useEffect(() => {
    sendRequest((data: FetchGame[]) => dispatch(gameActions.setStartGame({ gameMode: 'guessByName', data})));
  }, []);

  const navigate = useNavigate();
  const [ optionSelected, setOptionSelected ] = useState<string>('');
  const { sendRequest } = useRequest();
  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  
  const handleOptionSelected = (option: string) => {
    setOptionSelected(option);
  }

  const nextQuestionHandler = () => {
    dispatch(gameActions.updateScore(optionSelected));
    
    if(game.currentLevel === 10) {
      navigate('/game-over');
    } else {
      dispatch(gameActions.nextQuestion());
    }
    setOptionSelected('');
  }

  if(!game?.game[game?.currentLevel - 1]) {
    return <p>Loading...</p>
  }

  const answersMap = (game?.game[game?.currentLevel - 1]?.options as OptionFlag[]).map(({ flag, name }) => 
    (
      <li key={name}>
        <img 
          onClick={() => handleOptionSelected(name)}
          width="100px" 
          height="70px"
          src={flag} 
          style={{ border: '2px solid black', cursor: 'pointer', borderColor: optionSelected === name ? 'red' : 'black' }} 
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
      <h3>{(game?.game[game?.currentLevel - 1]?.answer as OptionFlag).name}</h3>
      <ul>
        { answersMap }
      </ul>
      <button disabled={optionSelected === ''} onClick={nextQuestionHandler}>Next</button>
    </section>
  )
}

export default ByName;
