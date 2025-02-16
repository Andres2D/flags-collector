import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ColorPicker from '../components/ColorPicker';
import SimpleFlag from '../components/SimpleFlag';
import { getColorGame } from '../helpers/color';
import { scrambleArray } from '../helpers/fetch';
import { RootState, ColorsGame } from '../interface/store';
import { gameActions } from '../store/gameSlice';

const ColorFlag = () => {
  useEffect(() => {
    const colorGame = scrambleArray(getColorGame());
    dispatch(gameActions.setStartGame({ gameMode: 'colorTheFlag', data: colorGame }));
  }, []);
 
  const [ colorOrder, setColorOrder ] = useState<string[]>([]);
  const [ resetGame, setResetGame ] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor ] = useState('');
  const game = useSelector((state: RootState) => state.game);
  const currentQuestion = game?.game[game?.currentLevel - 1] as ColorsGame;

  if(!currentQuestion) {
    return <p>Loading...</p>
  }

  const mapColors = Array.from(new Set(currentQuestion.options)).map((color, index) => 
    <ColorPicker key={index} onClick={() => setSelectedColor(color)} color={color} />
  );

  const nextQuestionHandler = () => {
    dispatch(gameActions.updateColorsScore(colorOrder));
    
    if(game.currentLevel === 10) {
      navigate('/game-over');
    } else {
      dispatch(gameActions.nextQuestion());
    }

    setColorOrder([]);
    setSelectedColor('');
    setResetGame(!resetGame);
  }

  const handleColorPlaced = (index: number, color: string) => {
    const currentColors = colorOrder;
    currentColors[index] = color;
    setColorOrder(currentColors);
  }

  return (
    <section>
      <br />
      <br />
      <br />
      <p>Question : {game.currentLevel}/10</p>
      <h3>{currentQuestion.countryName}</h3>
      <SimpleFlag 
        selectedColor={selectedColor} 
        isDouble={currentQuestion.options.length == 2 ? true : false}
        isHorizontal={currentQuestion.direction === 'horizontal'}
        onPlaceColor={handleColorPlaced}
        reset={resetGame}
      />
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {mapColors}
      </div>   
      <button disabled={false} onClick={nextQuestionHandler}>Next</button>
    </section>
  )
}

export default ColorFlag;
