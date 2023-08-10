import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDown from '../components/DropDown';
import styles from '../resources/styles';
import i18n from '../localization';
const SettingScreen = () => {
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
  );
};

export default SettingScreen;
