import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../interface/store";
import { gameActions } from "../store/gameSlice";
import styles from './GameOver.module.scss';
import { useEffect } from 'react';

function GameOver() {

  useEffect(() => {
    if(game?.game?.length === 0) {
      goToMenu();
    }
  }, []);

  const game = useSelector((state: RootState) => state.game);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToMenu = () => {
    dispatch(gameActions.setEndGame());
    navigate('/menu');
  }

  return (
    <section className={styles.gameOver}>
      <h1 className={styles.title}>Game Over</h1>
      <div className={styles.score}>
        <p>{game.score.correct}</p>
        <svg width='25px' fill="#2dcb5f" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" stroke="#2dcb5f"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g> <path d="M58.3945,32.1563,42.9961,50.625l-5.3906-6.4629a5.995,5.995,0,1,0-9.211,7.6758l9.9961,12a5.9914,5.9914,0,0,0,9.211.0059l20.0039-24a5.9988,5.9988,0,1,0-9.211-7.6875Z"></path> <path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"></path> </g> </g></svg>
      </div>
      <div className={styles.score}>
        <p>{game.score.wrong}</p>
        <svg width='28px' fill="#db1600" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#db1600"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"></path><path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"></path></g></svg>
      </div>
      <button
        className={styles.menuBtn} 
        onClick={goToMenu}>
          Menu
      </button>
    </section>
  ) 
}

export default GameOver;
