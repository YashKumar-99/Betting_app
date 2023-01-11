import logo from './logo.svg';
import './App.css';

import Header from './components/Header/index';
import HeaderSlider from './components/Slider';
import PlayTable from './components/playtables';
import Playingcard from './components/Playingcard';
import Promotioncards from './components/Promotioncards';

import SideLinks from './components/SidebarLink';
import { useState } from 'react';

import { useRef } from 'react';





function App() {



  const [SidebarOption, setSideBar] = useState(false);

  const [SidebarWidth, setSideBarWidth] = useState('')


  const inputElement = useRef();
  // console.log(inputElement.current, "red")

  const Hidenav = () => {

    if (SidebarOption) {
      setSideBar(!SidebarOption);

      setSideBarWidth('RemoveSideBarWidth')

    }

  }


  let props = {
    setSideBar: setSideBar,
    setSideBarWidth: setSideBarWidth
  }

  return (

    <>

        {SidebarOption ? <SideLinks /> : ""}


      <div className={`pageswidth ${SidebarWidth} `} ref={inputElement} onClick={Hidenav}>

        <Header {...props} />
        <HeaderSlider />
        <Playingcard />
        <Promotioncards />
        <PlayTable />
      </div>

    </>
  );
}

export default App;
