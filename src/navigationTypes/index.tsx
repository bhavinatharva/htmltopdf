import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  ProductList: {pdfFile: string};
  ViewInvoce: {pdfFile: string};
  AddProduct: undefined;
  CalculateAverage: undefined;
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
