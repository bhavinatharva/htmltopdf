import {TextInput} from 'react-native-paper';
import {StyleProp, View, ViewStyle} from 'react-native';
import React, {createRef} from 'react';
import colors from '../resources/colors';

interface Props {
  value: string;
  onChangeValue: (value: string) => void;
  label: string;
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
}: Props) => {
  return (
    <View>
      <TextInput
        ref={inputRef}
        label={label}
        value={value}
        onChangeText={text => onChangeValue(text)}
        mode="outlined"
        outlineColor={colors.lightGray}
        activeOutlineColor={colors.primary}
        activeUnderlineColor={colors.primary}
        textColor={colors.black}
        style={containerInputStyle}
        keyboardType={keyboardType}
        disabled={disabled}
        error={error}
        returnKeyType={returnKeyType}
      />
    </View>
  );
};

export default CustomInput;
