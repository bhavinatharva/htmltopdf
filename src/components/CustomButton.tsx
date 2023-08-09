import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';
import colors from '../resources/colors';
import styles from '../resources/styles';

interface Props {
  label: string;
  containerButtonStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}
const CustomButton = ({
  label,
  onPress,
  containerButtonStyle,
  disabled = false,
  loading = false,
}: Props) => {
  return (
    <View>
      <Button
        buttonColor={colors.primary}
        style={[containerButtonStyle, styles.borderRadius3]}
        mode="contained"
        onPress={() => onPress()}
        disabled={disabled}
        loading={loading}>
        {label}
      </Button>
    </View>
  );
};

export default CustomButton;
