import {View} from 'react-native';
import React, {useEffect, createRef, useState} from 'react';
import styles from '../resources/styles';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const AddProductScreen = () => {
  const descriptionRef = createRef<any>();
  const quantityRef = createRef<any>();
  const unitPriceRef = createRef<any>();

  const [description, setDescription] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [unitPrice, setUnitPrice] = React.useState('');
  const [total, setTotal] = React.useState('');
  const [error, setError] = useState<{
    description?: string;
    quantity?: string;
    unitPrice?: string;
  }>({});
  useEffect(() => {
    if (unitPrice.trim() !== '' && quantity.trim() !== '') {
      setTotal(`${parseInt(unitPrice) * parseInt(quantity)}`);
    } else {
      setTotal('');
    }
  }, [quantity, unitPrice]);

  const doPressSubmit = () => {
    if (description.trim() === '') {
      setError({description: 'Enter Description'});
      descriptionRef.current.focus();
      return;
    }
    if (quantity.trim() === '') {
      setError({quantity: 'Enter Quanityt'});
      quantityRef.current.focus();
      return;
    }
    if (unitPrice.trim() === '') {
      setError({unitPrice: 'Enter Unit Price'});
      unitPriceRef.current.focus();
      return;
    }
    setError({});
    unitPriceRef.current.blur();
  };
  return (
    <View style={[styles.container, styles.padding20]}>
      <CustomInput
        inputRef={descriptionRef}
        label="Description"
        value={description}
        onChangeValue={value => setDescription(value)}
        containerInputStyle={styles.marginBottom15}
        error={error.description !== undefined}
      />
      <CustomInput
        inputRef={quantityRef}
        label="Quantity"
        value={quantity}
        onChangeValue={value => setQuantity(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
        error={error.quantity !== undefined}
      />
      <CustomInput
        inputRef={unitPriceRef}
        label="Unit Price"
        value={unitPrice}
        onChangeValue={value => setUnitPrice(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
        error={error.unitPrice !== undefined}
      />
      <CustomInput
        label="Total"
        value={total}
        onChangeValue={value => setTotal(value)}
        keyboardType="numeric"
        disabled
      />
      <View style={styles.flex1} />
      <CustomButton
        containerButtonStyle={styles.marginBottom15}
        label="Submit"
        onPress={() => doPressSubmit()}
      />
    </View>
  );
};

export default AddProductScreen;