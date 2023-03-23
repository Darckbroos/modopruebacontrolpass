import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField} from '@mui/material';
import { Icons } from './Icon';
import { useState } from 'react';
import useBottom from '../hooks/useBottom';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth:'100%',
  minWidth:'20%'
};



export function BasicModal({hijoAPadre,buttons,editarBoton,eliminarBoton,boxShadow}) {

  const { icons, inputValues} = useBottom([]);
  const [iconName, setIconName] = useState(icons);
  const [inputValue, setInputValue] = useState(inputValues);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

   const datos= (inputValue) ;
   const datosicon = (iconName);


  const [acceptButtonDisabled, setAcceptButtonDisabled] = useState(false);
  const handleAceptar = () => {
    setAcceptButtonDisabled(true);
    hijoAPadre(datos,datosicon,buttonClass,setOpen(false));
  };

  const handleEditar = () => {
    const newData = { inputValue,datosicon,buttonClass };
    hijoAPadre(datos,datosicon,buttonClass);
    if (buttons.id !== buttons.length) {
      editarBoton(newData);
    }
    setOpen(false)
  };

  
  const handleEliminar = () => {
    eliminarBoton(buttons.id)
  }

const [buttonClass, setButtonClass] = useState('')
const handleIconNameChange = (name) => {
  setIconName(name);

  // Asignar la clase correspondiente al botón según el icono
  switch (name) {
    case 'door-back':
      setButtonClass('puerta'); // Asignar el nombre de la puerta aquí
      return buttonClass;
    case 'fence':
      setButtonClass('reja'); // Asignar el nombre de la reja aquí
      return buttonClass;
    case 'camera-alt':
      setButtonClass('camara');// Asignar el ID de la cámara aquí
      return buttonClass;
    default:
      setButtonClass('');
  }
};

  return (
    <div>
    <div >
    
    <Button id='invobtn' variant="contained" onClick={handleOpen}>
          {iconName && <Icons name={iconName} />} {inputValue}
        </Button>
    </div>
      
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container justifyContent="center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Titulo
          </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <Button
                sx={{ mr: 1}}
                variant="contained"
                className={buttonClass}
                onClick={() => handleIconNameChange('door-back')}
                startIcon={<Icons name="door-back" />}
              ></Button>
            <Button
                sx={{ mr: 1}}
                variant="contained"
                className={buttonClass}
                onClick={() => handleIconNameChange('fence')}
                startIcon={<Icons name="fence" />}
              ></Button>
           <Button
                sx={{ mr: 1}}
                variant="contained"
                className={buttonClass}
                onClick={() => handleIconNameChange('camera-alt')}
                startIcon={<Icons name="camera-alt" />}
              ></Button>
            </Typography>
          </Grid>

          <Grid container justifyContent="center">
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <TextField  label="Ingresa el nombre" value={inputValue} onChange={(handleInputChange)} color="secondary" focused />
          </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography id="modal-modal-description" sx={{ mt: 3 }}>

            <Button onClick={handleAceptar} disabled={acceptButtonDisabled} sx={{ mr: 1}} variant="contained">Aceptar</Button>
            
            <Button onClick={handleEditar} sx={{ mr: 1}} variant="contained">Editar</Button>
            
            <Button onClick={handleEliminar} variant="contained">cancelar</Button>
            
            </Typography>
          </Grid>
          
          <Grid onClick={handleClose} container justifyContent="end">
            <Button   sx={{ mt: 4}} variant="contained"  >Close</Button>
          </Grid>
          
        </Box>  
        
        
      </Modal>
      
    </div>
    
    
  );
}

