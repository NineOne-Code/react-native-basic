import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.Color,
        padding: 10,
        width: 110,
        borderRadius: 55,
        marginTop: 10,
        alignItems: 'center',
      }}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

Button.propTypes = {
  Color: propTypes.string,
};
