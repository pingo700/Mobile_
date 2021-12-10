import React from 'react';
import {Dimensions, SafeAreaView,StyleSheet,View,Button} from 'react-native';
import { Text } from 'react-native-elements';
import {LineChart} from 'react-native-chart-kit'

const styles = StyleSheet.create({
  safe:{
    backgroundColor: "#0042bd",
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default function Grafico(){
    return(
     <SafeAreaView style={styles.safe}>
  <Text>
    Progresso de atividade 
  </Text>
  <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#ffffff',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
     </SafeAreaView>
    );
}