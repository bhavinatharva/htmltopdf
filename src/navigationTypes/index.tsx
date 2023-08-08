import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HTMLToPDF: {pdfFile: string};
  ViewPDFScreen: {pdfFile: string};
};

export type ViewPDFScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ViewPDFScreen'
>;
export type HTMLToPDFProps = NativeStackScreenProps<
  RootStackParamList,
  'HTMLToPDF'
>;
