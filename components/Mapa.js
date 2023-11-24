import React from 'react';
import { View, Text, Alert, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Mapa = () => {
  const clinicas = [
    { id: 1, nome: "Clínica São Paulo", latitude: -23.550520, longitude: -46.633308 },
    { id: 2, nome: "OrtoCenter Rio", latitude: -22.906847, longitude: -43.172896 },
    { id: 3, nome: "Coração Salvador Hospital", latitude: -12.977749, longitude: -38.501630 },
    { id: 5, nome: "DermatoClinic Belo Horizonte", latitude: -19.919068, longitude: -43.938575 },
    { id: 9, nome: "NeuroClinic SP", latitude: -23.561684, longitude: -46.625378 },
    { id: 10, nome: "Olhar Paulista Oftalmologia", latitude: -23.563210, longitude: -46.654251 },
    { id: 11, nome: "SP Ortopedia e Traumatologia", latitude: -23.548943, longitude: -46.638818 },
    { id: 12, nome: "Centro Dermatológico SP", latitude: -23.573310, longitude: -46.641219 },
    { id: 13, nome: "Clínica Gastro SP", latitude: -23.589565, longitude: -46.673392 },
    { id: 14, nome: "Clínica Psiquiátrica Paz", latitude: -23.552219, longitude: -46.712196 },
    { id: 15, nome: "Clínica Pediátrica Pequeno Paulistano", latitude: -23.563984, longitude: -46.654789 }
  ];

  const confirmarAgendamento = (nomeClinica) => {
    Alert.alert(
      "Confirmar Agendamento",
      `Deseja agendar uma consulta na ${nomeClinica}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Confirmar", onPress: () => Alert.alert("Agendamento confirmado!") },
      ],
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -23.550520,
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {clinicas.map(clinica => (
          <Marker
            key={clinica.id}
            coordinate={{ latitude: clinica.latitude, longitude: clinica.longitude }}
            title={clinica.nome}
            description="Clique para agendar uma consulta"
            onCalloutPress={() => confirmarAgendamento(clinica.nome)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Mapa;
