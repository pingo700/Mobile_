import React from 'react';
import { SafeAreaView,StyleSheet,TextInput,Button,View} from 'react-native';


const styles = StyleSheet.create({
    button:{
        margin: 20,
        padding: 16,
    },
})

export default function Configuracao(){ 
    return(<SafeAreaView style={{
        backgroundColor: "#6c49a5",
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>   
     <TextInput
       style={{
       padding: 16,
       marginTop: 50,
       backgroundColor: '#ffff'
       }}
       placeholder={'Nome'}
     />
     <TextInput
       style={{
       padding: 16,
       marginTop: 50,
       backgroundColor: '#ffff'
       }}
       placeholder={'BIO'}
     />
     <View>
      <Button
        onPress={() => alert('')}
        title="Atualizar"
        color="#000000"
      />
     </View>     
     
    </SafeAreaView>
    )
}