import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Avatar from '../../assets/icon/avatar.png';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image source={Avatar} style={styles.avatar} />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    console.log('data before send: ', data);

    if (button === 'Simpan') {
      Axios.post('https://03e682e01dbd.ngrok.io/users', data)
        .then((res) => {
          console.log('res: ', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
        })
        .catch((err) => console.log('error: ', err));
    } else if (button === 'Update') {
      Axios.put(`https://03e682e01dbd.ngrok.io/users/${selectedUser.id}`, data)
        .then((res) => {
          console.log('res update: ', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        })
        .catch((err) => console.log('error: ', err));
    }
  };

  const getData = () => {
    Axios.get('https://03e682e01dbd.ngrok.io/users')
      .then((res) => {
        console.log('res get Data: ', res);
        setUsers(res.data);
      })
      .catch((err) => console.log('error: ', err));
  };

  const selectItem = (item) => {
    console.log('selected item: ', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  const deleteItem = (item) => {
    console.log('before delete item: ', item);

    Axios.delete(`https://03e682e01dbd.ngrok.io/users/${item.id}`)
      .then((res) => {
        console.log('res delete: ', res);
        getData();
      })
      .catch((err) => console.log('error: ', err));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>JSON API(JSON Server)</Text>
        <Text>Masukan Anggota Titisan Iblis</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama Lengkap"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Bidang"
          value={bidang}
          onChangeText={(value) => setBidang(value)}
        />
        <Button title={button} onPress={submit} />
        <View style={styles.line} />
        {users.map((user) => {
          return (
            <Item
              key={user.id}
              name={user.name}
              email={user.email}
              bidang={user.bidang}
              onPress={() => selectItem(user)}
              onDelete={() =>
                Alert.alert(
                  'Peringatan',
                  'Anda yakin akan menghapus user ini??',
                  [
                    {text: 'Tidak', onPress: () => console.log('Button Tidak')},
                    {text: 'Ya', onPress: () => deleteItem(user)},
                  ],
                )
              }
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
    marginTop: 5,
  },
  avatar: {width: 80, height: 80, borderRadius: 40},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
