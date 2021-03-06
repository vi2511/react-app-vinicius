import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../pages/home/HomeScreen';
import CotitularesScreen from '../pages/cotitulares/CotitularesScreen';
import CadastrarScreen from '../pages/cotitulares/cadastrar/CadastrarScreen';
import PerfilScreen from '../pages/perfil/PerfilScreen';
import NaoEncontradoScreen from '../pages/nao-encontrado/NaoEncontradoScreen';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>        
        <Stack.Screen name="Cotitulares" component={CotitularesScreen}/>
        <Stack.Screen name="Cadastrar" component={CadastrarScreen}/>
        <Stack.Screen name="Perfil" component={PerfilScreen}/>
        <Stack.Screen name="NaoEncontrado" component={NaoEncontradoScreen}/>
      </Stack.Navigator>
  );
};

export default AppRoutes;

