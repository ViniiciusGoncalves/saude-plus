import React,{useState, useEffect} from 'react';
import {View} from 'react-native';
import Contexto from './Contexto';
import Principal from './components/Principal';
import axios from 'axios';

// GUILHERME HENRIQUE MELO DE OLIVEIRA – RM: 95184
// GUILHERME LUCAS ARTIGIANI – RM: 94322
// VINICIUS GONÇALVES CARNEIRO – RM: 94154

export default function App() {
    const [logado, setLogado] = useState(false);
    const [lista, setLista] = useState([]);
    const api = axios.create({
      baseURL:"https://saudeplus-f325d-default-rtdb.firebaseio.com"
    })

    const salvar = ( obj ) => {
        api.post("/pacientes.json",obj)
        .then((resposta)=>
          {lerDados()
          alert("Gravado com sucesso")
          }
        ).catch((err)=>{alert("Erro ao cadastrar o paciente " + err)})
      }

    const lerDados = () => {
      api.get("/pacientes.json")
      .then((resposta)=>{
        const listaNova = []
        for (const chave in resposta.data){
          const obj = resposta.data[chave]
          obj.id = chave;
          listaNova.push(obj);
        }
        setLista(listaNova)
      }).catch((err)=>{alert("Erro ao ler os dados " + err)})
    }

    const editar = (id, obj) => {
        api.put(`/pacientes/${id}.json`, obj)
            .then((resposta) => {
                lerDados();
                alert("Editado com sucesso");
            })
            .catch((err) => {
                alert("Erro ao editar o paciente " + err);
            });
    }

    const deletar = (obj) => {
      api.delete("/pacientes/"+ obj.id +".json")
      .then((resposta)=>
          {lerDados()
          alert("Apagado com sucesso")
          }
        ).catch((err)=>{alert("Erro ao Apagar o paciente " + err)})
    }
    
    useEffect(()=>{lerDados()},[])

  return(
    <Contexto.Provider value={{lista, salvar, deletar, lerDados, editar}}>
      <View style={{flex:1}}>
        {<Principal/>}
      </View>
    </Contexto.Provider>
  );
}
