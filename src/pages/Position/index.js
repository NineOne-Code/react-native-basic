import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Cart from '../../assets/icon/cart.png';

export default function Position() {
    const [subs, setSubs] = useState(200);

    useEffect(() => {
        console.log('didMount');
        setTimeout(() => {
            setSubs(400);
        }, 2000);
        return () => {
            console.log('didUpdate');
        };
    }, [subs]);

    // useEffect(() => {
    //     console.log('didMount');
    // }, []);
    // useEffect(() => {
    //     console.log('didUpdate');
    //     setTimeout(() => {
    //         setSubs(400);
    //     }, 2000);
    // }, [subs]);

  return (
    <View style={styles.wrapper}>
    <Text>Materi Position {subs}</Text>
      <View style={styles.cartWrapper}>
        <Image source={Cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranajng Belanja ANda</Text>
    </View>
  );
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
