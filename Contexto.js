import {createContext} from 'react';

const startContext = {
  lista:[],
  salvar:(obj) => {},
  lerDados:() => {},
  deletar:(obj) => {},
  editar:(id,obj) => {},
}


const Contexto = createContext(startContext);

export default Contexto;