import {View} from 'react-native';
import React, {useEffect, createRef, useState} from 'react';
import styles from '../resources/styles';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {postService} from '../services';
import Constants from '../services/Constants';
import {Snackbar} from 'react-native-paper';
import {AddProductScreenProps} from '../navigationTypes';
import i18n from 'i18next';
const AddProductScreen: React.FC<AddProductScreenProps> = ({navigation}) => {
  const descriptionRef = createRef<any>();
  const quantityRef = createRef<any>();
  const unitPriceRef = createRef<any>();

  const [isLoading, setLoading] = React.useState(false);
  const [isVisible, setVisible] = React.useState(false);
  const [snackBarMessage, sertSnackBarMessage] = React.useState('');
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

  const doPressSubmit = async () => {
    if (description.trim() === '') {
      setError({description: 'Enter Description'});
      descriptionRef.current.focus();
      return;
    }
    if (quantity.trim() === '') {
      setError({quantity: 'Enter Quanityt'});
      setVisible(true);
      return;
    }
    if (unitPrice.trim() === '') {
      setError({unitPrice: 'Enter Unit Price'});
      unitPriceRef.current.focus();
      return;
    }
    setError({});
    setVisible(false);
    unitPriceRef.current.blur();
    setLoading(true);
    const result = await postService(Constants.ADD_PRODUCT, {
      description,
      quantity,
      unitPrice,
      total,
    });
    if (result.status) {
      sertSnackBarMessage(result.data.message);
    } else {
      sertSnackBarMessage('Error');
    }
    setDescription('');
    setQuantity('');
    setUnitPrice('');
    setVisible(true);
    setLoading(false);
  };
  return (
    <View style={[styles.container, styles.padding20]}>
      <CustomInput
        inputRef={descriptionRef}
        label={i18n.t('label.description')}
        value={description}
        onChangeValue={value => setDescription(value)}
        containerInputStyle={styles.marginBottom15}
        error={error.description !== undefined}
      />
      <CustomInput
        inputRef={quantityRef}
        label={i18n.t('label.quantity')}
        value={quantity}
        onChangeValue={value => setQuantity(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
        error={error.quantity !== undefined}
      />
      <CustomInput
        inputRef={unitPriceRef}
        label={i18n.t('label.unit_price')}
        value={unitPrice}
        onChangeValue={value => setUnitPrice(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
        error={error.unitPrice !== undefined}
      />
      <CustomInput
        label={i18n.t('label.total')}
        value={total}
        onChangeValue={value => setTotal(value)}
        keyboardType="numeric"
        disabled
      />
      <View style={styles.flex1} />
      <CustomButton
        loading={isLoading}
        containerButtonStyle={styles.marginBottom15}
        label={isLoading ? '' : 'Submit'}
        onPress={() => doPressSubmit()}
        disabled={isLoading}
      />
      <Snackbar
        wrapperStyle={{alignSelf: 'center'}}
        duration={2000}
        onDismiss={() => {
          sertSnackBarMessage('');
          setVisible(false);
          navigation.goBack();
        }}
        visible={isVisible}>
        {snackBarMessage}
      </Snackbar>
    </View>
  );
};

export default AddProductScreen;
