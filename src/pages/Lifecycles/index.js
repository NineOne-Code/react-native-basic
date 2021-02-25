import React, {useEffect, useState, Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Cart from '../../assets/icon/cart.png';
import Button from '../../assets/Button'

export default class Lifecycles extends Component {

  constructor(props) {
    super(props);
    console.log('=> Constructor');
    this.state = {
      subs: 10,
    };
  }

  componentDidMount() {
    console.log('=> Component did mount');
    setTimeout(() => {
      this.setState({
        subs: 20,
      });
    }, 3000);
  }

  componentDidUpdate() {
    console.log('=> component did update');
  }

  componentWillUnmount() {
    console.log('=> Component will unmount');
  }


  render() {
    console.log('=> render');
    return (
      <View style={styles.wrapper}>
        <Text>Materi Position</Text>
        <View style={styles.cartWrapper}>
          <Image source={Cart} style={styles.iconCart} />
          <Text style={styles.notif}>{this.state.subs}</Text>
        </View>
        <Text style={styles.text}>Keranajng Belanja Anda</Text>
        <Button Color="tomato">Test Ngab</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 40,
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#7777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
