import {View} from 'react-native';
import React from 'react';
import {InvoiceItem} from '../htmls/htmlGenerator';
import {DataTable} from 'react-native-paper';

const ProductListItem = ({
  description,
  quantity,
  no,
  unitPrice,
  total,
}: InvoiceItem) => {
  return (
    <View>
      <DataTable.Row>
        <DataTable.Cell>{no}</DataTable.Cell>
        <DataTable.Cell>{description}</DataTable.Cell>
        <DataTable.Cell numeric>{quantity}</DataTable.Cell>
        <DataTable.Cell numeric>{unitPrice}</DataTable.Cell>
        <DataTable.Cell numeric>{total}</DataTable.Cell>
      </DataTable.Row>
    </View>
  );
};

export default ProductListItem;
