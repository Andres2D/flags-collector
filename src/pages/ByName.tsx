import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import useRequest from '../helpers/fetch';
import { FetchGame, RootState, OptionFlag } from '../interface/store';
import { gameActions } from '../store/gameSlice';
import styles from './ByName.module.scss';

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
      <li 
        className={`${styles.flag} ${optionSelected === name 
            ? styles.selected : 
            (optionSelected === '' ? '' : styles.notSelected)}`
          } 
        key={name}>
        <img 
          onClick={() => handleOptionSelected(name)}
          width="100px" 
          height="70px"
          src={flag} 
        />
      </li>
    )
  );

  return (
    <section className={styles.game}>
      <h4>{game.currentLevel}/10</h4>
      <h2>{(game?.game[game?.currentLevel - 1]?.answer as OptionFlag).name}</h2>
      <ul className={styles.selection}>
        { answersMap }
      </ul>
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

export default ByName;
