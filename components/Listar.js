import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import Contexto from '../Contexto';
import Ionicons from '@expo/vector-icons/Ionicons';

const Listar = () => {
    const conteudo = useContext(Contexto);
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#efe4e1' }}>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Lista de Pacientes</Text>
            </View>
            <FlatList 
                data={conteudo.lista} 
                renderItem={(flatProps) => <ItemView {...flatProps} onApagar={conteudo.deletar} />} 
            />
        </View>
    );
};

const ItemView = (props) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: "center", backgroundColor: '#cac3c1', margin: 5, borderWidth: 1 }}>
            <Text>Nome: {props.item.nome}</Text>
            <Text>Sintomas: {props.item.sintomas}</Text>
            <View style={{ flexDirection: "row" }}>
                <Ionicons name='trash' size={30} onPress={() => { props.onApagar(props.item) }} />
                <Ionicons name='pencil' size={30} onPress={() => { props.onApagar(props.item) }} />
            </View>
        </View>
    );
};

export default Listar;
