import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  ProductList: {pdfFile: string};
  ViewPDFScreen: {pdfFile: string};
  AddProduct: undefined;
};

export type ViewPDFScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ViewPDFScreen'
>;
export type ProductListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductList'
>;
