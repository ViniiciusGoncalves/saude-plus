import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Cadastrar from './Cadastrar';
import Listar from './Listar';
import Mapa from './Mapa';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const Principal  = () =>{
  return(
    <View style={{flex:1}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Cadastrar') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Listar') {
                iconName = focused ? 'ios-list-outline' : 'ios-list';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
        >
          <Tab.Screen name='Cadastro' component={Cadastrar}/>
          <Tab.Screen name='Lista' component={Listar}/>
          <Tab.Screen name='Mapa' component={Mapa}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}


export default Principal;