import { useNavigate } from "react-router";
import styles from './Menu.module.scss';
import MenuCard from '../components/MenuCard';
import { gameModes } from "../constants/game-modes";

function Menu() {
  const navigate = useNavigate();

  const gameModesMap = gameModes.map(({ id, title, description, isAvailable, screen }) => 
    <MenuCard 
      key={id}
      title={title}
      description={description}
      clickAction={() => navigate(screen)}
    />
  )

  return (
    <section className={styles.menu}>
      <h1 className={styles.title}>Select game mode</h1>
      <div className={styles.options}>
        {gameModesMap}
      </div>
    </section>
  ) 
}

export default Menu;
