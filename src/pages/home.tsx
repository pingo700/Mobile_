import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView,StyleSheet,Image,Text,View,Button, Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useAuth } from '../hook/auth';
import {HomeProps,IHome,IInterfaceHome} from "../interfaces/Home.interface";
import {HomeTypes} from "./types/ScreenStack.types"



const styles = StyleSheet.create({
    safe:{
      backgroundColor: "#6c49a5",
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      marginRight: 280,
    },
    button_p: {
      marginVertical: -35,
      marginLeft: 280,
    },
    bio: {
      alignContent: 'center',
      position: 'relative',
      fontFamily: 'Montserrat-Light',
      fontSize: 25,
      color: '#000000'
    },
    bio_f: {
      marginVertical: 15,
      marginHorizontal: 0,
      position: 'relative',
      fontFamily: 'Montserrat-Light',
      fontSize: 25,
      color: '#000000'
    },
    item: {
      marginVertical: 30,
      marginHorizontal: 70,
      padding: 10,
      fontSize: 18,
      backgroundColor: '#ffff'
    },
    titulo: {
        position: 'relative',
        marginVertical: 10,
        fontFamily: 'Montserrat-Light',
        fontSize: 25,
        color: '#000000'
    }
  })

export default function Home({ navigation }: HomeTypes){
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IInterfaceHome[]>();
    return(<SafeAreaView style={styles.safe}>
          <Text style={styles.titulo}> {user?.name} </Text>
          <Image style={{
            width: 100,
            height: 200,
            resizeMode: 'stretch',
          }}source={require("../img/lissin.jpg")}/>
        <Text style={styles.bio}> BIO </Text>
        <Text style={styles.bio_f}> Veni,vi,Venci </Text>
         <Button onPress={() => alert('Essa vai ser a parte de inserção na base de dados')} title="Adicionar Tema" color = '#000'/>
          <FlatList
             data={[
              {key: 'Esportes'},
              {key: 'Basquete'},
              {key: 'Counter-Strike'},
             ]}
             renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </SafeAreaView>
    )
}