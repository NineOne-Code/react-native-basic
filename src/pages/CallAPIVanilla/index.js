import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export default function index() {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });
  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });
  //   useEffect(() => {
  //     // GET
  //     // fetch('https://jsonplaceholder.typicode.com/todos/1') // JSONPlaceholder
  //     fetch('https://reqres.in/api/users/2') // reqres.in
  //       .then((response) => response.json())
  //       .then((json) => console.log(json));

  //     // POST
  //     const dataForAPI = {
  //         name: "morpheus",
  //         job: "leader"
  //     }

  //     console.log('data obj vanilla: ', dataForAPI);
  //     console.log('data stlh stringify: ', JSON.stringify(dataForAPI));
  //     fetch('https://reqres.in/api/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(dataForAPI),
  //     })
  //       .then((response) => response.json())
  //       .then((json) => console.log('POST response: ', json));
  //   }, []);
  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
          console.log('POST response: ', json)
          setDataJob(json)
        });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API using Vanilla Javascript</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 50},
});
