import styles from './SimpleFlag.module.scss';
import { useState, useEffect } from 'react';

type Props = {
  selectedColor: string;
  isHorizontal: boolean;
  isDouble: boolean;
  reset: boolean;
  onPlaceColor: (index: number, color: string) => void
}

const SimpleFlag = ({ 
  selectedColor,
  isDouble,
  isHorizontal,
  onPlaceColor,
  reset
}: Props) => {

  useEffect(() => {
    setFirstSectionColor('#C5C5C5');
    setSecondSectionColor('#C5C5C5');
    setThirdSectionColor('#C5C5C5');
  }, [reset]);

  const [ firstSectionColor, setFirstSectionColor ] = useState('#C5C5C5');
  const [ secondSectionColor, setSecondSectionColor ] = useState('#C5C5C5');
  const [ thirdSectionColor, setThirdSectionColor ] = useState('#C5C5C5');

  const handleColorPlaced = (index: number, color: string) => {
    if(color.trim() === '') {
      return;
    }

    if(index === 0) {
      setFirstSectionColor(color);
    } else if(index === 1) {
      setSecondSectionColor(color);
    } else {
      setThirdSectionColor(color);
    }
    onPlaceColor(index, color);
  }

  return (
    <div className={`
      ${styles.flag} 
      ${isHorizontal ? styles.horizontal : styles.vertical } 
      ${isDouble ? styles.double : ''}`}
    >
      <div 
        style={{ background: firstSectionColor ?? '#C5C5C5' }}
        onClick={() => handleColorPlaced(0, selectedColor)} 
        className={styles.topCircle}>
      </div>
      <div 
        style={{ background: secondSectionColor ?? '#C5C5C5' }}
        onClick={() => handleColorPlaced(1, selectedColor)} 
        className={styles.center}>
      </div>
      <div 
        style={{ background: thirdSectionColor ?? '#C5C5C5' }}
        onClick={() => handleColorPlaced(2, selectedColor)} 
        className={styles.bottomCircle}>
      </div>
    </div>
  )
}

export default SimpleFlag;
