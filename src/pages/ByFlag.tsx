import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import useRequest from '../helpers/fetch';
import { FetchGame, RootState, OptionFlag } from '../interface/store';
import { gameActions } from '../store/gameSlice';

const ByFlag = () => {

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

  const optionsGame = game?.game[game?.currentLevel - 1]?.options as OptionFlag[];
  const answersMap = optionsGame.map(({ name }) => 
    (
      <button 
        key={name} 
        style={{ borderColor: optionSelected === name ? 'red' : 'black' }}
        onClick={() => handleOptionSelected(name)}
      >
        {name}
      </button>
    )
  );

  return (
    <section>
      <br />
      <br />
      <br />
      <p>Question : {game.currentLevel}/10</p>
      <img
        width="100px" 
        height="70px"
        src={(game?.game[game?.currentLevel - 1]?.answer as OptionFlag).flag} 
        style={{ border: '2px solid black' }} 
      />
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        { answersMap }
      </div>
      <button disabled={optionSelected === ''} onClick={nextQuestionHandler}>Next</button>
    </section>
  )
}

export default ByFlag;
