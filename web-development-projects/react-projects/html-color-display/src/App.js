import ColorDisplay from './ColorDisplay';
import ColorSearch from './ColorSearch';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  const [colorSearch, setColorSearch] = useState('')

  return (
    <div className="App">
      <ColorDisplay
       colorValue={colorValue}
       hexValue={hexValue}
       isDarkText={isDarkText}/>
      <ColorSearch
       colorValue={colorValue}
       setColorValue={setColorValue}
       setHexValue={setHexValue}
       isDarkText={isDarkText}
       setIsDarkText={setIsDarkText}/>
    </div>
  );
}

export default App;
