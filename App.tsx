import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './ignoreWarnings';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
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
import {LanguageProvider} from './src/localization/LanguageProvider';
const App = () => {
  const productHeaderRight = (
    navigation: NativeStackNavigationProp<RootStackParamList>,
  ) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Settings width={24} height={24} />
      </TouchableOpacity>
    );
  };
  return (
    <PaperProvider>
      <LanguageProvider>
        <SafeAreaView style={styles.flex1}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="ProductList">
              <Stack.Screen
                name="ProductList"
                component={ProductListScreen}
                options={({navigation}: ProductListScreenProps) => ({
                  title: i18n.t('label.product_list'),
                  headerRight: () => productHeaderRight(navigation),
                })}
              />
              <Stack.Screen
                name="ViewInvoce"
                component={ViewInvoceScreen}
                options={{
                  title: i18n.t('label.view_invoice'),
                }}
              />
              <Stack.Screen
                name="CalculateAverage"
                component={CalculateAverageScreen}
                options={{
                  title: i18n.t('label.calculateaverage'),
                }}
              />
              <Stack.Screen
                name="AddProduct"
                options={{
                  title: i18n.t('label.add_product'),
                }}
                component={AddProductScreen}
              />
              <Stack.Screen
                name="Settings"
                options={{
                  title: i18n.t('label.settings'),
                }}
                component={SettingScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </LanguageProvider>
    </PaperProvider>
  );
};

export default App;
