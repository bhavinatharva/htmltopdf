import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  ProductList: {pdfFile: string};
  ViewInvoce: {pdfFile: string};
  AddProduct: undefined;
  CalculateAverage: undefined;
  Settings: undefined;
};

export type ViewInvoceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ViewInvoce'
>;
export type ProductListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductList'
>;
export type AddProductScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddProduct'
>;
export type CalculateAverageScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CalculateAverage'
>;
export type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;
