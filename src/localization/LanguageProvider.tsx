import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import i18n from 'i18next';
interface Props {
  children: ReactNode;
}
interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
}
export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: language => language,
});

export const LanguageProvider = ({children}: Props) => {
  const [language, setLanguage] = useState('en');
  const [languageChangeFlag, setLanguageChangeFlag] = useState(false);

  useEffect(() => {
    if (languageChangeFlag) {
      // Reset the flag after a re-render
      setLanguageChangeFlag(false);
    }
    i18n.changeLanguage(language);
  }, [language, languageChangeFlag]);
  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
