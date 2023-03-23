import React, {useState} from 'react';
import { Grid, Button } from '@mui/material';
import { BasicModal } from './btnimagen';
import { saveDatos } from './Classdata';


const initialButtons = [];


export const Imagenes = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  const [buttons, setButtons] = useState(initialButtons);
  const [buttonId, setButtonId] = useState(0); 
  const [data, estableceDatosicon] = useState([]);
  const [date, estableceDatosinput] = useState([]);
  const [dato, estableceDatosClass] = useState([]);
  
  const handleClicks = () => {
    setIsVisible(true);
  };


  const hijoAPadre = (datosinput,datosicon,classbuton) => {
    const newButtonId = buttonId; // use the current button id for this button
    estableceDatosicon([...data, {datosicon}]);
    estableceDatosinput([...date,{datosinput}]);
    estableceDatosClass([...dato,{classbuton}]);
    setButtonId(buttonId);
  };


  const handleClickss = () => {
    setIsVisible(false);

      const datos = new saveDatos(buttons,data,date,dato);
  };



  const handleClick = (event) => {
    const { clientX, clientY } = event;
    const overlappingButton = buttons.find(
      (button) =>
        clientX > button.left &&
        clientX < button.left + button.width &&
        clientY > button.top &&
        clientY < button.top + button.height
    );
    if (!overlappingButton) {
      const newButton = {
        id: buttonId, // add id to the new button
        left: clientX + -50,
        top: clientY + -25,
        width: 100,
        height: 50,
        
        
      };
      setButtons([...buttons, newButton]);
      setButtonId(buttonId + 1); // increment button id for the next button
    }
  };


const eliminarBoton = (buttonId) => {
  // find the index of the button to remove
  const indexToRemove = buttons.findIndex((button) => button.id === buttonId);

  // remove the button object from the buttons array
  const newButtons = buttons.filter((button) => button.id !== buttonId);
  setButtons(newButtons);

  // remove the corresponding data objects from their state arrays
  const newData = [...data];
  newData.splice(indexToRemove, 1);
  estableceDatosicon(newData);

  const newDate = [...date];
  newDate.splice(indexToRemove, 1);
  estableceDatosinput(newDate);

  const newDato = [...dato];
  newDato.splice(indexToRemove, 1);
  estableceDatosClass(newDato);

};


const editarBoton = (id, newData) => {
  const index = buttons.findIndex((button) => button.id === id);
  const newButtons = buttons.map((button) => {
    if (button.id === id) {
      return { ...button};
    } else {
      return button;
    }
  });
  setButtons(newButtons);

  const newDataArray = [...data];
  newDataArray[index].datosicon = newData.datosicon;
  estableceDatosicon(newDataArray);

  const newDateArray = [...date];
  newDateArray[index].datosinput = newData.inputValue;
  estableceDatosinput(newDateArray);

  const newDatoArray = [...dato];
  newDatoArray[index].classbuton = newData.buttonClass;
  estableceDatosClass(newDatoArray);
};

    return (
     
        <Grid container justifyContent="center">
            <Grid 
            style={{
                    maxWidth:'70%',
                    width:'110%',
                    position: 'static',
                    marginTop: 70,
                     
                
                }}>
                <Grid style={{
                        maxWidth:'100%',
                        minWidth:'20%',
                        border: '3px solid #66ff76',
                        overflow: 'hidden',
                        boxShadow: "15px 15px 30px rgba(0, 0, 0, 10)" 
                }}>
                    <img onClick={handleClick} src="./Assets/img/Plano1.jpg" className="logo" alt="" width={'100%'} />
                </Grid>
                <Grid > 
                {buttons.map((button) => (
                        <Button
                        key={button.id}
                        
                        style={{
                          
                          position: "absolute",
                          left: button.left,
                          top: button.top,
                          width: button.width,
                          height: button.height,                            
                        }}
                        
                        onClick={handleClicks}
                        > 
                        {console.log(button.id)}
                        <BasicModal 
                        boxShadow={button.boxShadow}
                        buttons={buttons}
                        hijoAPadre={hijoAPadre}
                        buttonId={buttonId}
                        eliminarBoton={() => eliminarBoton(button.id)}
                        editarBoton={(newData) => editarBoton(button.id, newData)}
                        />
                       
                    </Button>
                ))}
                </Grid>
                 <Grid   container justifyContent="end">
                  <Button id='saves' variant="contained" onClick={handleClickss}
                  style={{ display: isVisible ? 'block' : 'none' }}
                  >
                  
                  Save
                  </Button>
                  
                 </Grid>   
                
                
            </Grid> 
        </Grid>
    );
}


