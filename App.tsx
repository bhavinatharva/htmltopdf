import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './ignoreWarnings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListScreen from './src/screens/ProductListScreen';
import ViewInvoceScreen from './src/screens/ViewInvoceScreen';

import {RootStackParamList} from './src/navigationTypes';
import AddProductScreen from './src/screens/AddProductScreen';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import styles from './src/resources/styles';
import CalculateAverageScreen from './src/screens/CalculateAverageScreen';
import i18n from 'i18next';

const Stack = createNativeStackNavigator<RootStackParamList>();
import './src/localization';
const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.flex1}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen
              name="ProductList"
              component={ProductListScreen}
              options={{
                headerTitle: i18n.t('label.product_list'),
                headerTitleAlign: 'left',
              }}
            />
            <Stack.Screen
              name="ViewInvoce"
              component={ViewInvoceScreen}
              options={{
                headerTitle: i18n.t('label.view_invoice'),
                headerTitleAlign: 'left',
              }}
            />
            <Stack.Screen
              name="CalculateAverage"
              component={CalculateAverageScreen}
            />
            <Stack.Screen
              name="AddProduct"
              options={{
                headerTitle: i18n.t('label.add_product'),
                headerTitleAlign: 'left',
              }}
              component={AddProductScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
