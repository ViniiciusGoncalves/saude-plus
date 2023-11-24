import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import Contexto from '../Contexto';

const Cadastrar = () => {
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [sexo, setSexo] = useState("");
    const [endereco, setEndereco] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const conteudo = useContext(Contexto);

    return (
        <View style={{ flex: 1, backgroundColor: '#efe4e1' }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Cadastro de paciente</Text>
            </View>
            <View style={styles.context}>
                <TextInput style={styles.box_inform} placeholder="Nome" onChangeText={setNome} value={nome} />
                <TextInput style={styles.box_inform} placeholder="Data de Nascimento" onChangeText={setDataNascimento} value={dataNascimento} />
                <TextInput style={styles.box_inform} placeholder="Sexo" onChangeText={setSexo} value={sexo} />
                <TextInput style={styles.box_inform} placeholder="Endereço" onChangeText={setEndereco} value={endereco} />
                <TextInput style={styles.box_inform} placeholder="O que a pessoa está sentindo" onChangeText={setSintomas} value={sintomas} />
                <Pressable style={styles.button} onPress={() => {
                    const obj = { nome, dataNascimento, sexo, endereco, sintomas, latitude, longitude };
                    conteudo.salvar(obj);
                }}>
                    <Text>Salvar</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    context: {
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_inform: {
        width: '80%',
        borderRadius: 20,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        fontSize: 11
    },
    button: {
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#ffd5a5",
        width: '40%'
    },
});

export default Cadastrar;
