import styles from './ColorPicker.module.scss';

type Props = {
  color: string;
  onClick: () => void
}

const ColorPicker = ({ color, onClick }: Props) => {
  return (
    <div 
      onClick={onClick}
      className={styles.box}
      style={{  background: color }}
    ></div>
  )
}

export default ColorPicker;
