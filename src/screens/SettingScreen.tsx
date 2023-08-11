import {TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDown from '../components/DropDown';
import styles from '../resources/styles';
import i18n from '../localization';
import CustomInput from '../components/CustomInput';
import {SettingsScreenProps} from '../navigationTypes';
import {useLanguage} from '../localization/LanguageProvider';

const SettingScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const {language, setLanguage} = useLanguage();
  const [languageValue, setLanguageValue] = useState<string>(language);
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
    setLanguage(languageValue);
  }, [languageValue, setLanguage]);
  return (
    <View style={[styles.container, styles.padding20]}>
      <View style={styles.marginBottom15}>
        <DropDown
          label={i18n.t('label.language')}
          mode={'outlined'}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={languageValue}
          setValue={setLanguageValue}
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
