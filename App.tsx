import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';


export const App = () => {
  
  
  return (
    // <HolaMundoScreen />
    //<ContadorScreen />
    <SafeAreaView style={{flex:1}}>
      {/* <BoxObjectModelScreen/> */}
      <DimensionesScreen/>
    </SafeAreaView>
      
  )
}


