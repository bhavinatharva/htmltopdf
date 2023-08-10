import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './ignoreWarnings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListScreen from './src/screens/ProductListScreen';
import ViewInvoceScreen from './src/screens/ViewInvoceScreen';

import {
  ProductListScreenProps,
  RootStackParamList,
} from './src/navigationTypes';
import AddProductScreen from './src/screens/AddProductScreen';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './src/resources/styles';
import CalculateAverageScreen from './src/screens/CalculateAverageScreen';
import i18n from 'i18next';
import Settings from './src/resources/svgs/ic_setting.svg';

const Stack = createNativeStackNavigator<RootStackParamList>();
import './src/localization';
import SettingScreen from './src/screens/SettingScreen';
const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.flex1}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen
              name="ProductList"
              component={ProductListScreen}
              options={({navigation}: ProductListScreenProps) => ({
                headerTitle: i18n.t('label.product_list'),
                headerTitleAlign: 'left',
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Settings')}>
                      <Settings width={24} height={24} />
                    </TouchableOpacity>
                  );
                },
              })}
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
              options={{
                headerTitle: i18n.t('label.calculateaverage'),
                headerTitleAlign: 'left',
              }}
            />
            <Stack.Screen
              name="AddProduct"
              options={{
                headerTitle: i18n.t('label.add_product'),
                headerTitleAlign: 'left',
              }}
              component={AddProductScreen}
            />
            <Stack.Screen
              name="Settings"
              options={{
                headerTitle: i18n.t('label.settings'),
                headerTitleAlign: 'left',
              }}
              component={SettingScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
