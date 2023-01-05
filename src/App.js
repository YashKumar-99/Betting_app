import logo from './logo.svg';
import './App.css';

import Header from './components/Header/index';
import HeaderSlider from './components/Slider';
import PlayTable from './components/playtables';

function App() {
  return (
    // <div>hello</div>
    <><Header />
      <HeaderSlider />
      <PlayTable/>
    </>
  );
}

export default App;
