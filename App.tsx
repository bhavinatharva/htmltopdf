import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './ignoreWarnings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HTMLToPDF from './src/screens/HTMLToPDF';
import ViewPDFScreen from './src/screens/ViewPDFScreen';

import {RootStackParamList} from './src/navigationTypes';
const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HTMLToPDF" component={HTMLToPDF} />
        <Stack.Screen name="ViewPDFScreen" component={ViewPDFScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
