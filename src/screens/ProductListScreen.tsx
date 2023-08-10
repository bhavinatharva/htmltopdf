import {View, FlatList} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import RNHTMLtoPDF, {Options} from 'react-native-html-to-pdf';
import {ProductListScreenProps} from '../navigationTypes';
import doGenerateHTML, {InvoiceItem} from '../htmls/htmlGenerator';
import {useFocusEffect} from '@react-navigation/native';
import {getService} from '../services';
import Constants from '../services/Constants';
import ProductListItem from '../components/ProductListItem';
import {DataTable, ActivityIndicator, Text} from 'react-native-paper';
import styles from '../resources/styles';
import CustomButton from '../components/CustomButton';
import i18n from 'i18next';
const ProductListScreen: React.FC<ProductListScreenProps> = ({navigation}) => {
  const [productItems, setProductItems] = useState<InvoiceItem[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [subTotal, setSubTotal] = useState('0');
  const [tax, setTax] = useState('0');
  const [total, setTotal] = useState('0');

  const createPDF = async () => {
    let options: Options = {
      html: doGenerateHTML(productItems, subTotal, tax, total),
      fileName: 'test',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    if (file) {
      navigation.navigate('ViewInvoce', {pdfFile: file.filePath ?? ''});
    }
  };

  useFocusEffect(
    useCallback(() => {
      console.log('Screen was focused');

      doGetProducts();
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
    const copiedData = [...result.data.data].map((item, index) => {
      item.no = index + 1;
      return item;
    });
    setProductItems(copiedData);
    setLoading(false);
    let totalAmt = copiedData.reduce((n, {total}) => n + parseInt(total), 0);
    setSubTotal(totalAmt);
    setTax('0');
    setTotal(totalAmt);
  };
  const renderItem = (item: InvoiceItem, index: number) => {
    return (
      <ProductListItem
        description={item.description}
        quantity={item.quantity}
        unitPrice={item.unitPrice}
        total={item.total}
        no={index + 1}
      />
    );
  };
  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <View style={[styles.container, styles.padding20]}>
      <DataTable.Header>
        <DataTable.Title>{i18n.t('label.no')}</DataTable.Title>
        <DataTable.Title>{i18n.t('label.description')}</DataTable.Title>
        <DataTable.Title numeric>{i18n.t('label.quantity')}</DataTable.Title>
        <DataTable.Title numeric>{i18n.t('label.unit_price')}</DataTable.Title>
        <DataTable.Title numeric>{i18n.t('label.total')}</DataTable.Title>
      </DataTable.Header>
      <View style={styles.flex1}>
        <FlatList
          data={productItems}
          renderItem={({item, index}) => {
            return renderItem(item, index);
          }}
        />
      </View>
      <View>
        <DataTable.Row>
          <DataTable.Cell numeric>
            <Text style={styles.fontBold}>{i18n.t('label.sub_total')}</Text>
            {' : '}
            {subTotal}
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell numeric>
            <Text style={styles.fontBold}>{i18n.t('label.tax')}</Text>
            {' : '}
            {tax}
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell numeric>
            <Text style={styles.fontBold}>{i18n.t('label.total')}</Text>
            {' : '}
            {total}
          </DataTable.Cell>
        </DataTable.Row>
      </View>
      <View style={[styles.rowCenter, styles.center]}>
        <CustomButton
          containerButtonStyle={[styles.marginEnd15]}
          label={i18n.t('button.add_product')}
          onPress={() => navigation.navigate('AddProduct')}
        />
        <CustomButton
          label={i18n.t('button.create_invoice')}
          onPress={createPDF}
        />
      </View>
    </View>
  );
};

export default ProductListScreen;
