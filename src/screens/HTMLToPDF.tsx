import {View, Button} from 'react-native';
import React, {useState, useCallback} from 'react';
import RNHTMLtoPDF, {Options} from 'react-native-html-to-pdf';
import {HTMLToPDFProps} from '../navigationTypes';
import doGenerateHTML, {InvoiceItem} from '../htmls/htmlGenerator';
import {useFocusEffect} from '@react-navigation/native';

const HTMLToPDF: React.FC<HTMLToPDFProps> = ({navigation}) => {
  const [pdfFile, setPDFFile] = useState('');
  const [productItems, setProductItems] = useState<InvoiceItem[]>([
    {
      no: 1,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 2,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 3,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 4,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 5,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 6,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 7,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 7,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 8,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 9,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 10,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 11,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 12,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 13,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 14,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 15,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
    {
      no: 16,
      description: 'test',
      quantity: '3',
      unitPrice: '100',
      total: '300',
    },
  ]);

  const createPDF = async () => {
    let options: Options = {
      html: doGenerateHTML(productItems, '190', '1023'),
      fileName: 'test',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    if (file) {
      console.log(file.filePath);
      setPDFFile(file.filePath || '');
    }
  };
  const openPDF = () => {
    navigation.navigate('ViewPDFScreen', {pdfFile: pdfFile});
  };
  useFocusEffect(
    useCallback(() => {
      console.log('Screen was focused');
      setPDFFile('');
      return () => {
        console.log('Screen was unfocused');
        // Useful for cleanup functions
      };
    }, []),
  );
  return (
    <View>
      <Button title="Create PDF" onPress={createPDF} />

      {pdfFile.length > 0 ? (
        <Button title="Open PDF" onPress={openPDF} />
      ) : null}
    </View>
  );
};

export default HTMLToPDF;
