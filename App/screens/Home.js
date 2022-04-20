import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text } from 'react-native';
import { format } from 'date-fns';

import colors from '../constants/colors';
import { ConversionInput } from '../components/ConversionInput';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: 'center',
  }
});

export default () => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = 0.8345;
  const date = new Date();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/background.png')}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image 
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.textHeader}>Currency Converter</Text>

      <ConversionInput 
        text="USD"
        value="123"
        onButtonPress={() => alert('Button pressed')}
        onChangeText={text => console.log('text', text)}
        keyboardType="numeric"
      />
      <ConversionInput 
        text="GBP"
        value="123"
        editable={false}
        onButtonPress={() => alert("todo!")}
      />

      <Text style={styles.text}>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date, 'MMMM do, yyyy')}.`}
      </Text>
    </View>
  );
}