import {StyleSheet} from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  padding10: {padding: 10},
  padding20: {padding: 20},
  borderColor: {borderColor: colors.lightGray},
  borderWidth1: {borderWidth: 1},
  borderRadius3: {borderRadius: 3},
  marginStart15: {marginStart: 15},
  marginEnd15: {marginEnd: 15},
  marginBottom15: {marginBottom: 15},
  marginBottom20: {marginBottom: 20},
  marginBottom30: {marginBottom: 30},
  flex1: {flex: 1},
  row: {flexDirection: 'row'},
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  justifySpaceBetween: {justifyContent: 'space-between'},
  center: {justifyContent: 'center', alignItems: 'center'},
  fontBold: {fontWeight: 'bold'},
  fontItalic: {fontStyle: 'italic'},
  fontSize12: {fontSize: 12},
  fontSize14: {fontSize: 14},
});
export default styles;
