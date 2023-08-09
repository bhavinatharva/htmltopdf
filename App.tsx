import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './ignoreWarnings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListScreen from './src/screens/ProductListScreen';
import ViewPDFScreen from './src/screens/ViewPDFScreen';

import {RootStackParamList} from './src/navigationTypes';
import AddProductScreen from './src/screens/AddProductScreen';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import styles from './src/resources/styles';

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.flex1}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen name="ProductList" component={ProductListScreen} />
            <Stack.Screen name="ViewPDFScreen" component={ViewPDFScreen} />
            <Stack.Screen
              name="AddProduct"
              options={{headerTitle: 'Add Product', headerTitleAlign: 'left'}}
              component={AddProductScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
