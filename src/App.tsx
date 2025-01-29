import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from './store/gameSlice';
import './App.css'
import { RootState } from './interface/store';

function App() {

  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const handleChangeName = () => {
    console.log('Inn');
    dispatch(gameActions.updateTest('El 2D'));
  }

  return (
    <>
      <p>App works {game.test}</p>
      <button onClick={handleChangeName}>Change name</button>
    </>
  )
}

export default App;
