import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chat from '../pages/chat'
import Login from '../pages/login'
import Home from '../pages/home'
import Calendario from '../pages/calendario'
import Configuracao from '../pages/config'
import Grafico from '../pages/grafico'
import { Cadastro } from '..';
import { AxiosError } from "axios";
import { useAuth } from "../hook/auth";

const Tab = createBottomTabNavigator();

export default function HomeRoute() {
  const { access_token } = useAuth();
  return (
    <Tab.Navigator
    tabBarOptions={{
        activeBackgroundColor: colors.grey4,
        inactiveBackgroundColor: colors.grey4,
        activeTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={'#ffffff'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={'#ffffff'} size={size} />
          ),
        }}
      />
      {access_token ? <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#6c49a5'} size={size} />
          ),
        }}
      /> :
      <Tab.Screen
        name="Calendario"
        component={Calendario}
        options={{
          tabBarLabel: 'Calendario',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={'#ff9900'} size={size} />
          ),
        }}
      />}
      <Tab.Screen
        name="Grafico"
        component={Grafico}
        options={{
          tabBarLabel: 'Grafico',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="progress-upload" color={'#0042bd'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={'#4e00ca'} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Config"
        component={Configuracao}
        options={{
          tabBarLabel: 'Configuração',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={'#6c49a5'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}