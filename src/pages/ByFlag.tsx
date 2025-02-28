import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import useRequest from '../helpers/fetch';
import { FetchGame, RootState, OptionFlag } from '../interface/store';
import { gameActions } from '../store/gameSlice';
import styles from './ByFlag.module.scss';

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
        className={`${styles.optionBtn} ${optionSelected === name ? styles.selected : ''}`}
        onClick={() => handleOptionSelected(name)}
      >
        {name}
      </button>
    )
  );

  return (
    <section className={styles.game}>
      <h4>{game.currentLevel}/10</h4>
      <img
        width="120px" 
        height="90px"
        className={styles.flag}
        src={(game?.game[game?.currentLevel - 1]?.answer as OptionFlag).flag}
      />
      <div className={styles.options}>
        { answersMap }
      </div>
      <button 
        disabled={optionSelected === ''} 
        onClick={nextQuestionHandler}
        className={styles.nextBtn}
      >
          Next
      </button>
    </section>
  )
}

export default ByFlag;
