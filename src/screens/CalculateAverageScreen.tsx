import {View, Text} from 'react-native';
import React, {createRef, useState} from 'react';
import {CalculateAverageScreenProps} from '../navigationTypes';
import CustomInput from '../components/CustomInput';
import styles from '../resources/styles';
import i18n from 'i18next';
import CustomButton from '../components/CustomButton';
import {Snackbar} from 'react-native-paper';

const CalculateAverageScreen: React.FC<CalculateAverageScreenProps> = ({
  navigation,
}) => {
  const descriptionRef = createRef<any>();
  const quantityRef = createRef<any>();
  const unitPriceRef = createRef<any>();

  const [isLoading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [snackBarMessage, sertSnackBarMessage] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [total, setTotal] = useState('');
  const [error, setError] = useState<{
    description?: string;
    quantity?: string;
    unitPrice?: string;
  }>({});
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
  };
  return (
    <View style={[styles.container, styles.padding20]}>
      <CustomInput
        inputRef={descriptionRef}
        label={i18n.t('label.TotalCostOfPreviousShares')}
        value={description}
        onChangeValue={value => setDescription(value)}
        containerInputStyle={styles.marginBottom15}
        error={error.description !== undefined}
        keyboardType="numeric"
      />
      <CustomInput
        inputRef={quantityRef}
        label={i18n.t('label.TotalCostOfNewShares')}
        value={quantity}
        onChangeValue={value => setQuantity(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
        error={error.quantity !== undefined}
      />
      <CustomInput
        inputRef={unitPriceRef}
        label={i18n.t('label.TotalNumberOfPreviousShares')}
        value={unitPrice}
        onChangeValue={value => setUnitPrice(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
        error={error.unitPrice !== undefined}
      />

      <CustomInput
        label={i18n.t('label.TotalNumberOfNewShares')}
        inputRef={unitPriceRef}
        value={unitPrice}
        onChangeValue={value => setUnitPrice(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
        error={error.unitPrice !== undefined}
      />
      <CustomInput
        label={i18n.t('label.AverageCost')}
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

export default CalculateAverageScreen;
