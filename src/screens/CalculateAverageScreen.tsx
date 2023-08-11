import {View} from 'react-native';
import React, {createRef, useEffect, useState} from 'react';
import {CalculateAverageScreenProps} from '../navigationTypes';
import CustomInput from '../components/CustomInput';
import styles from '../resources/styles';
import i18n from 'i18next';
import {doCalculateAvg} from '../utils/calculations';
import {Text} from 'react-native-paper';

const CalculateAverageScreen: React.FC<CalculateAverageScreenProps> = ({
  navigation,
}) => {
  const totalCostOfPreviousSharesRef = createRef<any>();
  const totalCostOfNewSharesRef = createRef<any>();
  const totalNumberOfPreviousSharesRef = createRef<any>();
  const totalNumberOfNewSharesRef = createRef<any>();

  const [totalCostOfPreviousShares, setTotalCostOfPreviousShares] =
    useState('');
  const [totalCostOfNewShares, setTotalCostOfNewShares] = useState('');
  const [totalNumberOfPreviousShares, setTotalNumberOfPreviousShares] =
    useState('');
  const [totalNumberOfNewShares, setTotalNumberOfNewShares] = useState('');
  const [averageCost, setAverageCost] = useState('');

  useEffect(() => {
    if (
      totalCostOfPreviousShares.trim() !== '' &&
      totalCostOfNewShares.trim() !== '' &&
      totalNumberOfPreviousShares.trim() !== '' &&
      totalNumberOfNewShares.trim() !== ''
    ) {
      let average = doCalculateAvg(
        parseInt(totalCostOfPreviousShares),
        parseInt(totalCostOfNewShares),
        parseInt(totalNumberOfPreviousShares),
        parseInt(totalNumberOfNewShares),
      );
      console.log('average', average);
      setAverageCost(average.toFixed(2));
    }
  }, [
    totalCostOfPreviousShares,
    totalCostOfNewShares,
    totalNumberOfPreviousShares,
    totalNumberOfNewShares,
  ]);

  return (
    <View style={[styles.container, styles.padding20]}>
      <CustomInput
        inputRef={totalCostOfPreviousSharesRef}
        label={i18n.t('label.TotalCostOfPreviousShares')}
        value={totalCostOfPreviousShares}
        onChangeValue={value => setTotalCostOfPreviousShares(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
      />
      <CustomInput
        inputRef={totalCostOfNewSharesRef}
        label={i18n.t('label.TotalCostOfNewShares')}
        value={totalCostOfNewShares}
        onChangeValue={value => setTotalCostOfNewShares(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
      />
      <CustomInput
        inputRef={totalNumberOfPreviousSharesRef}
        label={i18n.t('label.TotalNumberOfPreviousShares')}
        value={totalNumberOfPreviousShares}
        onChangeValue={value => setTotalNumberOfPreviousShares(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
      />

      <CustomInput
        label={i18n.t('label.TotalNumberOfNewShares')}
        inputRef={totalNumberOfNewSharesRef}
        value={totalNumberOfNewShares}
        onChangeValue={value => setTotalNumberOfNewShares(value)}
        containerInputStyle={styles.marginBottom15}
        keyboardType="numeric"
      />
      <CustomInput
        label={i18n.t('label.AverageCost')}
        value={averageCost}
        onChangeValue={value => setAverageCost(value)}
        keyboardType="numeric"
        disabled
        containerInputStyle={styles.marginBottom15}
      />
      <Text style={[styles.fontItalic, styles.fontBold]}>
        {i18n.t('label.Note')}
        {' : '}
      </Text>
      <Text style={styles.fontSize12}>
        {i18n.t('label.calculateaverageMsg')}
      </Text>
    </View>
  );
};

export default CalculateAverageScreen;
