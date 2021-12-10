import React, { useEffect, useState } from 'react';
import { AxiosError } from "axios";
import { TextInput,Button,StyleSheet,View,Text, Alert} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useAuth } from '../hook/auth';
import { IAuthenticate,IUser} from '../interfaces/User.interface';


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


  
export default function Login(){
  const { signIn } = useAuth();
  const [data,setData] = useState<IAuthenticate>()
  const [isLoading, setIsLoading] = useState(true);
  async function handleSigIn() {
    try {
      setIsLoading(true);
      if (data?.email && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
        setIsLoading(false);
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
      setIsLoading(false);
    }
  }
  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const [text, setText] = React.useState('');
  return <SafeAreaView style={styles.safe}>
   
   <Text>Login</Text>
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
     secureTextEntry={true}
     onChangeText={(i) => handleChange({ password: i })}
   />
   <View style={styles.button}>
   <Button  onPress={handleSigIn} title="Logar" color="#000000"/>
   </View>
   <View style={styles.button_2}>
   </View>
  </SafeAreaView>
  
}