import * as React from 'react';

import { AxiosError } from "axios";
import { TextInput,Button,StyleSheet,View,Text,ImageBackground, Alert} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useAuth } from '../hook/auth';
import { IAuthenticate,IRegister,IUser} from '../interfaces/User.interface';
import { useState } from 'react';


const styles = StyleSheet.create({
  safe:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    button:{
      margin: 20,
      padding: 16,
    },
    button_2:{
      margin: 20,
      padding: 16,
    }
  })

export default function Cadastro(){
  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  const [isLoading, setIsLoading] = useState(true);
  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
  }
  async function handleRegister() {
    try {
      setIsLoading(true);
      if (data?.email && data.name && data.password) {
        await register(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IUser;
      let message = "";
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
    } finally {
      setIsLoading(false);
    }
  }
  const [text, setText] = React.useState('');
  return <SafeAreaView style={styles.safe}>
   <Text>Cadastro</Text>
   <TextInput
     style={{
      padding: 16,
      marginTop: 50,
     }}
     placeholder={'Nome'}
     onChangeText={(i) => handleChange({ name: i })}
   />
   <TextInput
     style={{
      padding: 16,
      marginTop: 50,
     }}
     placeholder={'Email'}
     onChangeText={(i) => handleChange({ email: i })}
   />
   <TextInput
     style={{
      padding: 16,
      marginTop: 50,
     }}
     placeholder={'Senha'}
     onChangeText={(i) => handleChange({ password: i })}
   />
   <View style={styles.button}>
   <Button   onPress={handleRegister} title="Cadastrar" color="#000000"/>
   </View>
  </SafeAreaView>
}