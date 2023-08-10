import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {ViewInvoceScreenProps} from '../navigationTypes';
import {WebView} from 'react-native-webview';

const ViewInvoceScreen: React.FC<ViewInvoceScreenProps> = ({route}) => {
  const source = {
    uri: route.params.pdfFile,
    cache: true,
  };

  return (
    <View style={styles.container}>
      <WebView
        javaScriptEnabled
        injectedJavaScript='<meta name="viewport" content="width=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0”/>'
        source={source}
        style={styles.pdf}
        originWhitelist={['file://']}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default ViewInvoceScreen;
