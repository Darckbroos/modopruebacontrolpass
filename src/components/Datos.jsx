import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Icons } from './Icon';
import {abrirDispositivo} from './clasesicons';

// import { Puerta, Reja, Camara } from './classes';

export default function useDatos() {
  const [buttons, setButtons] = useState([]);
  
  useEffect(() => {
    fetch('./json/buttons.json')
      .then((res) => res.json())
      .then((data) => {
        const newButtons = data.buttons.map((button) => {
          const { classbuton } = data.classbuton[button.id];
          const { left, top, width, height } = button;
          const { datosinput } = data.inputValue[button.id];
          const { icon } = data;
          const { datosicon } = icon[button.id];
          return { left, top, width, height, datosicon, datosinput, classbuton };          
        });
        setButtons(newButtons);
      });
  }, []);
   
  return buttons;
  

}
export function loadData() {
  let data = JSON.parse(localStorage.getItem("buttonsData")) || [];

  data.forEach(item => {
    // crea un nuevo botón
    let button = document.createElement("button");
    button.innerText = item.buttons;
    button.className = item.classbutton;
    button.onclick = () => {
      alert(`Botón "${item.buttons}" fue presionado`);
    };

    // agrega el botón al DOM
    document.body.appendChild(button);
  });
}

export function Datos() {
  const botones = useDatos();
  const handleClick = (className, datosinput) => {
    abrirDispositivo(className, datosinput);
  };
  const data = JSON.stringify(localStorage.getItem("buttonsData")) || [];
  console.log(data)
  return (
    <div>
      {botones.map((button, index) => (
        <Button
          key={index}
          sx={{ position: "absolute", left: button.left, top: button.top }}
          variant="contained"
          size="small"
          startIcon={<Icons name={button.datosicon} />}
          className={button.classbuton}
          onClick={() => handleClick(button.classbuton, button.datosinput)}
          
        >
          {button.datosinput}
        </Button>
      ))}
      
    </div>
  );
}