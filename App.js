import React, { Component } from 'react';
import { View, Text, UIManager, StyleSheet } from 'react-native';
import { YellowBox } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';

YellowBox.ignoreWarnings(['Warning: ...']);
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardValid: false,
    };
  }

  _onFocus = (field) => console.log('Focusing', field);

  _onChange = (formData) => {
    // Example validation logic (replace with actual validation)
    const isCardValid = formData.valid;
    this.setState({ isCardValid });
    console.log(JSON.stringify(formData, null, ' '));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <CreditCardInput
            autoFocus
            requiresName 
            requireCVC
            requirePostalCode
            validColor="black"
            invalidColor="red"
            placeholderColor="darkgray"
            labelStyle={{ color: 'black', fontSize: 12 }}
            inputStyle={{ color: 'black', fontSize: 16 }}
            onFocus={this._onFocus}
            onChange={this._onChange}
          />
       </View>
        <View style={[styles.infoContainer, { backgroundColor: this.state.isCardValid ? 'green' : 'red' }]}>
          <Text style={styles.validationText}>
            {this.state.isCardValid
              ? 'Kredi Kartı Bilgileri Geçerlidir.'
              : 'Kredi Kartı Bilgileri Geçersizdir.'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  formContainer: {
    width: '80%',
  },
  infoContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  validationText: {
    fontSize: 16,
    color: 'black',
  },
});
