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
        <h2 className={styles.subtitle}>Welcome  to</h2>
        Flags Collector
      </h1>
      <button onClick={() => navigate('/menu')} className={styles.startBtn}>Start</button>
    </section>
  ) 
}

export default Intro;
