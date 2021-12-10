import React from 'react';
import {SafeAreaView,StyleSheet,View,Button} from 'react-native';
import {Calendar} from 'react-native-calendario';


const styles = StyleSheet.create({
  safe:{
    backgroundColor: "#0042bd",
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
export default function Calendario(){
    return(
     <SafeAreaView style={styles.safe}>
     <Calendar
       onChange={(range: any) => console.log(range)}
       minDate={new Date(2020, 1, 1)}
       startDate={new Date(2020, 1, 1)}
       endDate={new Date(2030, 1, 1)}
       theme={{
         monthTitleTextStyle: {
         color: '#6d95da',
         fontWeight: '300',
         fontSize: 16,
        },
        emptyMonthTextStyle: {
        fontWeight: '200',
        },
        weekColumnStyle: {
        paddingVertical: 10,
        },
        weekColumnTextStyle: {
         color: '#b6c1cd',
         fontSize: 13,
        },
        dayTextStyle: {
          color: '#2d4150',
          fontWeight: '200',
          fontSize: 15,
        },
        todayTextStyle: {
          color: '#6d95da',
        },
        activeDayContainerStyle: {
          backgroundColor: '#ffbb00',
        },
        activeDayTextStyle: {
         color: 'white',
        },
      }}
      />
     </SafeAreaView>
    );
}