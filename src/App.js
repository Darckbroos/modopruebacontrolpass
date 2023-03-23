import { IconButton } from '@mui/material';
import { MuiDrawerLeftts } from './components/btns';
import { Imagenes } from './components/imagen';
import { ResponsiveAppBar } from './components/navbar';
import UserContext from './context/UserContext'
import React from 'react';
import { Datos, loadData } from './components/Datos';
function App() {
  const userData = {
    icons: null,
    inputValues: 'open',
  }

  
  return (
    <div>
    <UserContext.Provider value={userData}>
        <Datos></Datos> 
        <loadData></loadData>
        <ResponsiveAppBar></ResponsiveAppBar>
        <MuiDrawerLeftts></MuiDrawerLeftts>
        <Imagenes></Imagenes>
        <IconButton> </IconButton>
      
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
