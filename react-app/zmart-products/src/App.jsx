import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Top_bar from './Top_bar/Top_bar.jsx'
import Side_bar from './Side_bar/Side_bar.jsx'
function App() {
  const [menu_width,set_width]=useState("70px")
  const [display_sb,set_display_sb]=useState(false);
  const display_SideBar=()=>
  {
    set_display_sb(display_sb=>!display_sb);
    if(display_sb==true)
    {
      set_width("70px")
    }
    else{
      set_width("171px")


    }
  }
  const menu={
    width:menu_width,
    backgroundColor:"rgba(109, 75, 75, 0.39)",
    fontFamily: '"Times New Roman", Times, serif',
    fontSize:"20px",


  }
  

  return (

    <>
    <Top_bar></Top_bar>
    <button onClick={display_SideBar} style={menu}>Menu</button>
    {display_sb && <Side_bar></Side_bar>}
    </>
  )
}

export default App;
