import {TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDown from '../components/DropDown';
import styles from '../resources/styles';
import i18n from '../localization';
import CustomInput from '../components/CustomInput';
import {SettingsScreenProps} from '../navigationTypes';
const SettingScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [language, setLanguage] = useState<string>('');
  const languages = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Gujarati',
      value: 'guj',
    },
  ];
  useEffect(() => {
    i18n.changeLanguage(language);
    setLanguage(i18n.language);
  }, [language]);
  return (
    <View style={[styles.container, styles.padding20]}>
      <View style={styles.marginBottom15}>
        <DropDown
          label={'Language'}
          mode={'outlined'}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={language}
          setValue={setLanguage}
          list={languages}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('CalculateAverage')}>
        <CustomInput
          pointerEvents="none"
          label={i18n.t('label.calculateaverage')}
          disabled={true}
          value={i18n.t('label.calculateaverage')}
          onChangeValue={value => console.log('value', value)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
