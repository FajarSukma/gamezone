import React, {useState  } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import About from './screens/about';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
  'nunito-bold':require('./assets/Fonts/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return(
      <Navigator/>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}      
      />
    )
  }
}

