import { useNavigate } from "react-router";
import { getRandomFlag } from "../helpers/random";
import styles from './Intro.module.scss';

function Intro() {
  const navigate = useNavigate();
  const randomFlag = getRandomFlag();

  return (
    <section className={styles.wrapper}>
      <img 
        src={randomFlag} 
        alt="intro-flag"
        className={styles.flag}
      />
      <h1 className={styles.title}>
        <p className={styles.subtitle}>Welcome  to</p>
        Flags Collector
      </h1>
      <button onClick={() => navigate('/menu')} className={styles.startBtn}>Start</button>
    </section>
  ) 
}

export default Intro;
