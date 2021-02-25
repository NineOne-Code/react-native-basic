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

  getNum1(event){
    const x = event.nativeEvent.text;
    this.setState({number1: x})
  }
  getNum2(event){
    const y = event.nativeEvent.text;
    this.setState({number2: y})
  }

  add(){
    this.setState({total: parseInt(this.state.number1) + parseInt(this.state.number2)})
  }
  sub(){
    this.setState({total: this.state.number1 - this.state.number2})
  }
  mul(){
    this.setState({total: this.state.number1 * this.state.number2})
  }
  div(){
    this.setState({total: this.state.number1 / this.state.number2})
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
            onChange={(event) => this.getNum1(event)}
          />
          <TextInput
            placeholder={'Enter number 2 here'}
            style={styles.paragraph}
            keyboardType="numeric"
            onChange={(event) => this.getNum2(event)}
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
              onPress={()=>{this.add()}}>
              <Text>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#e3e3e3',
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }} onPress={()=>{this.sub()}}>
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
              }} onPress={()=>{this.mul()}}>
              <Text>MUL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#e3e3e3',
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }} onPress={()=>{this.div()}}>
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
