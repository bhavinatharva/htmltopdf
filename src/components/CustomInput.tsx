import {TextInput} from 'react-native-paper';
import {StyleProp, View, ViewStyle} from 'react-native';
import React, {createRef} from 'react';
import colors from '../resources/colors';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';

interface Props {
  value: string;
  onChangeValue: (value: string) => void;
  label: string | undefined;
  containerInputStyle?: StyleProp<ViewStyle>;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
  disabled?: boolean;
  error?: boolean;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  inputRef?: createRef<TextInput>;
  mode?: 'outlined' | 'flat' | undefined;
  placeholder?: string | undefined;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
  theme?: ThemeProp;
}
const CustomInput = ({
  label,
  value,
  onChangeValue,
  containerInputStyle,
  keyboardType = 'default',
  disabled = false,
  error = false,
  returnKeyType = 'next',
  inputRef,
  mode = 'outlined',
  placeholder,
  pointerEvents,
  theme,
}: Props) => {
  return (
    <View>
      <TextInput
        ref={inputRef}
        label={label}
        value={value}
        onChangeText={text => onChangeValue(text)}
        mode={mode}
        outlineColor={colors.lightGray}
        activeOutlineColor={colors.primary}
        activeUnderlineColor={colors.primary}
        textColor={colors.black}
        style={containerInputStyle}
        keyboardType={keyboardType}
        disabled={disabled}
        error={error}
        returnKeyType={returnKeyType}
        placeholder={placeholder}
        pointerEvents={pointerEvents}
        theme={theme}
      />
    </View>
  );
};

export default CustomInput;
