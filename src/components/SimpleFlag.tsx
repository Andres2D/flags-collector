import styles from './SimpleFlag.module.scss';
import { useState } from 'react';

type Props = {
  selectedColor: string;
  isHorizontal: boolean;
  isDouble: boolean;
}

const SimpleFlag = ({ 
  selectedColor,
  isDouble,
  isHorizontal 
}: Props) => {

  const [ firstSectionColor, setFirstSectionColor ] = useState('');
  const [ secondSectionColor, setSecondSectionColor ] = useState('');
  const [ thirdSectionColor, setThirdSectionColor ] = useState('');

  return (
    <div className={`
      ${styles.flag} 
      ${isHorizontal ? styles.horizontal : styles.vertical } 
      ${isDouble ? styles.double : ''}`}
    >
      <div 
        style={{ background: firstSectionColor ?? 'transparent' }}
        onClick={() => setFirstSectionColor(selectedColor)} 
        className={styles.topCircle}>
      </div>
      <div 
        style={{ background: secondSectionColor ?? 'transparent' }}
        onClick={() => setSecondSectionColor(selectedColor)} 
        className={styles.center}>
      </div>
      <div 
        style={{ background: thirdSectionColor ?? 'transparent' }}
        onClick={() => setThirdSectionColor(selectedColor)} 
        className={styles.bottomCircle}>
      </div>
    </div>
  )
}

export default SimpleFlag;
