import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
  Share,
} from 'react-native';

export default function ImplicitIntents() {
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [shareText, setShareText] = useState('');

  const OpenWebsite = () => {
    Linking.openURL('https://' + website);
    setWebsite('');
  };
  const OpenLocation = () => {
    Linking.openURL('geo:0,0?q=' + location);
    setLocation('');
  };
  const ShareTexted = () => {
    Share.share({
      message: shareText
    });
    setShareText('');
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Implicit Intents</Text>
      </View>
      <View style={styles.contentWrapper}>
        <TextInput
          placeholder="www.yourwebsite.com"
          style={styles.input}
          value={website}
          onChangeText={(value) => setWebsite(value)}
        />
        <TouchableOpacity style={styles.button} onPress={OpenWebsite}>
          <Text style={styles.text}>Open Website</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentWrapper}>
        <TextInput
          placeholder="Your Location"
          style={styles.input}
          value={location}
          onChangeText={(value) => setLocation(value)}
        />
        <TouchableOpacity style={styles.button} onPress={OpenLocation}>
          <Text style={styles.text}>Open Location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentWrapper}>
        <TextInput
          placeholder="Share me!"
          style={styles.input}
          value={shareText}
          onChangeText={(value) => setShareText(value)}
        />
        <TouchableOpacity style={styles.button} onPress={ShareTexted}>
          <Text style={styles.text}>Share Text</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8675a9',
    padding: 10,
  },
  textHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#efbbcf',
  },
  contentWrapper: {
    margin: 20,
  },
  button: {
    backgroundColor: '#c3aed6',
    padding: 10,
    width: 110,
    borderRadius: 55,
    marginTop: 10,
    alignItems: 'center',
  },
  input: {
    height: 40,
    fontSize: 18,
    borderBottomWidth: 2,
    borderColor: '#655880',
  },
  text: {
    color: '#ffd5cd'
  },
});
