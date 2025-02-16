import { useState } from 'react';
import ColorPicker from '../components/ColorPicker';
import SimpleFlag from '../components/SimpleFlag';
const ColorFlag = () => {

  const [selectedColor, setSelectedColor ] = useState('');

  return (
    <>
      <p>Color selected: {selectedColor}</p>
      <SimpleFlag 
        selectedColor={selectedColor} 
        isDouble={false}
        isHorizontal={false}
      />

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <ColorPicker onClick={() => setSelectedColor('blue')} color={'blue'} />
        <ColorPicker onClick={() => setSelectedColor('yellow')} color={'yellow'} />
        <ColorPicker onClick={() => setSelectedColor('red')} color={'red'} />
        <ColorPicker onClick={() => setSelectedColor('green')} color={'green'} />
        <ColorPicker onClick={() => setSelectedColor('black')} color={'black'} />
      </div>
    </>
  )
}

export default ColorFlag;
