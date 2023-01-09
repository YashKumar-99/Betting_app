import logo from './logo.svg';
import './App.css';

import Header from './components/Header/index';
import HeaderSlider from './components/Slider';
import PlayTable from './components/playtables';
import Playingcard from './components/Playingcard';
import Promotioncards from './components/Promotioncards';

import SideLinks from './components/SidebarLink';

function App() {
  return (

    <>



      {/* <SideLinks /> */}
      <div className='pageswidth'>

        <Header />
        <HeaderSlider />
        <Playingcard />
        <Promotioncards />
        <PlayTable />
      </div>

    </>
  );
}

export default App;
