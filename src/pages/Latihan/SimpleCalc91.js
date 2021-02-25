import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class SimpleCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0.0,
      number2: 0.0,
      total: 0.0,
    };
  }

  compute(operator){
    let operandOne, operandTwo;
    try {
      operandOne = this.state.number1;
      operandTwo = this.state.number2;
    } catch (error) {
      Log.e(TAG, 'NumberFormatException', error);
      return;
    }

    switch (operator) {
      case 'add':
        this.setState({total: Number(operandOne) + Number(operandTwo)})
        break;
      case 'sub':
        this.setState({total: operandOne - operandTwo})
        break;
      case 'mul':
        this.setState({total: operandOne * operandTwo})
        break;
      case 'div':
        this.setState({total: operandOne / operandTwo})
        break;
      default:
        this.setState({total: 'Not Result'})
        break;
    }

  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Enter Number</Text>
          <TextInput
            placeholder={'Enter number 1 here'}
            style={styles.paragraph}
            keyboardType="numeric"
            onChange={(event) =>
              this.setState({number1: event.nativeEvent.text})
            }
          />
          <TextInput
            placeholder={'Enter number 2 here'}
            style={styles.paragraph}
            keyboardType="numeric"
            onChange={(event) =>
              this.setState({number2: event.nativeEvent.text})
            }
          />
        </View>
        <View style={{width: 120}}>
          <View style={styles.buttonGroups}>
            <TouchableOpacity
              style={{
                backgroundColor: '#e3e3e3',
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={()=>{this.compute('add')}}>
              <Text>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#e3e3e3',
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }} onPress={()=>{this.compute('sub')}}>
              <Text>SUB</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroups}>
            <TouchableOpacity
              style={{
                backgroundColor: '#e3e3e3',
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }} onPress={()=>{this.compute('mul')}}>
              <Text>MUL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#e3e3e3',
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }} onPress={()=>{this.compute('div')}}>
              <Text>DIV</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize: 40}}>{this.state.total}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    borderRadius: 3,
    padding: 5,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonGroups: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
