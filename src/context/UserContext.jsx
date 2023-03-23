import {createContext} from "react";

const UserContext = createContext({
  icons: [null],
  inputValues: ['open'],
  nombre: ['carlos','borik','rick','pepinillo'],
  descripcion: ['ingreso en el sector : '],
});


export default UserContext;