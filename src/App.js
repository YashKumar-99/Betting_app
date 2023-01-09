import logo from './logo.svg';
import './App.css';

import Header from './components/Header/index';
import HeaderSlider from './components/Slider';
import PlayTable from './components/playtables';
import Playingcard from './components/Playingcard';
import Promotioncards from './components/Promotioncards';

import SideLinks from './components/SidebarLink';
import { useState } from 'react';




function App() {



  const [SidebarOption, setSideBar] = useState(false);

  console.log(SidebarOption, "SidebarOption")

  return (

    <>

      {SidebarOption ? <SideLinks /> : ""}

      <div className='pageswidth'>

        <Header getdata={e => setSideBar(e)} />
        <HeaderSlider />
        <Playingcard />
        <Promotioncards />
        <PlayTable />
      </div>

    </>
  );
}

export default App;
