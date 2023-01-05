import logo from './logo.svg';
import './App.css';

import Header from './components/Header/index';
import HeaderSlider from './components/Slider';
import PlayTable from './components/playtables';
import Playingcard from './components/Playingcard';
import Promotioncards from './components/Promotioncards';

function App() {
  return (
    // <div>hello</div>
    <><Header />
      <HeaderSlider />
      <Playingcard />
      <Promotioncards />
      <PlayTable />
    </>
  );
}

export default App;
