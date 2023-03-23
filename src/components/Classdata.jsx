function saveData(buttons, icon, inputValue, classbutton) {
  let data = JSON.parse(localStorage.getItem("buttonsData")) || [];
  
  // Busca un objeto con el mismo ID y lo actualiza, o agrega un nuevo objeto
  let existingIndex = data.findIndex(obj => obj.buttons === buttons);
  if (existingIndex >= 0) {
    data[existingIndex] = { buttons, icon, inputValue, classbutton };
    
  } else {
    let id = data.length + 1; // Genera un ID único
    data.push({ id, buttons, icon, inputValue, classbutton });
  }
  
  localStorage.setItem("buttonsData", JSON.stringify(data));
}

export class saveDatos {
  constructor(buttons, icon, inputValue, classbutton) {
    this.buttons = buttons;
    this.icon = icon;
    this.inputValue = inputValue;
    this.classbutton = classbutton;

    saveData(this.buttons, this.icon, this.inputValue, this.classbutton);

    
  }

  

  getData() {
    return JSON.stringify({
      buttons: this.buttons,
      icon: this.icon,
      inputValue: this.inputValue,
      classbutton: this.classbutton
    });
  }
}
  