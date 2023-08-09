import {View, Button, FlatList} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import RNHTMLtoPDF, {Options} from 'react-native-html-to-pdf';
import {ProductListScreenProps} from '../navigationTypes';
import doGenerateHTML, {InvoiceItem} from '../htmls/htmlGenerator';
import {useFocusEffect} from '@react-navigation/native';
import {getService} from '../services';
import Constants from '../services/Constants';
import ProductListItem from '../components/ProductListItem';
import {DataTable} from 'react-native-paper';
import styles from '../resources/styles';
import CustomButton from '../components/CustomButton';

const ProductListScreen: React.FC<ProductListScreenProps> = ({navigation}) => {
  const [pdfFile, setPDFFile] = useState('');
  const [productItems, setProductItems] = useState<InvoiceItem[]>([]);

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
  useEffect(() => {
    doGetProducts();
  }, []);
  const doGetProducts = async () => {
    const result = await getService(Constants.PRODUCT_LIST);
    console.log('result.data', result.data);
    setProductItems(result.data.data);
  };
  const renderItem = (item: InvoiceItem, index: number) => {
    return (
      <ProductListItem
        description={item.description}
        quantity={item.quantity}
        unitPrice={item.unitPrice}
        total={item.total}
        no={item.no}
      />
    );
  };
  return (
    <View style={[styles.container, styles.padding20]}>
      <DataTable.Header>
        <DataTable.Title>No.</DataTable.Title>
        <DataTable.Title>Description</DataTable.Title>
        <DataTable.Title numeric>Quanity</DataTable.Title>
        <DataTable.Title numeric>Unit Price</DataTable.Title>
        <DataTable.Title numeric>Total</DataTable.Title>
      </DataTable.Header>
      <FlatList
        data={productItems}
        renderItem={({item, index}) => {
          return renderItem(item, index);
        }}
      />

      <View
        style={[styles.rowCenter, {position: 'absolute', end: 0, bottom: 15}]}>
        <CustomButton
          containerButtonStyle={[styles.marginStart15, styles.marginEnd15]}
          label="Add Product"
          onPress={() => navigation.navigate('AddProduct')}
        />
        <CustomButton
          containerButtonStyle={styles.marginEnd15}
          label="Create PDF"
          onPress={createPDF}
        />

        {pdfFile.length > 0 ? (
          <CustomButton
            containerButtonStyle={styles.marginEnd15}
            label="Open PDF"
            onPress={openPDF}
          />
        ) : null}
      </View>
    </View>
  );
};

export default ProductListScreen;
