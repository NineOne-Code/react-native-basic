import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Lifecycles from './pages/Lifecycles';
import ImplicitIntents from './pages/Latihan/ImplicitIntents';
import SimpleCalc from './pages/Latihan/SimpleCalc';
import SimpleCalc91 from './pages/Latihan/SimpleCalc91'
import RandColoring from './pages/Latihan/RandColoring';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';

const App: () => React$Node = () => {
  // LifeCycles dengan Class Component
  // const [isShow, setIsShow] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 10000);
  // }, [])

  return (
    <View>
      {/* {isShow && <Lifecycles />} */}
      {/* <ImplicitIntents /> */}
      {/* <SimpleCalc /> */}
      <SimpleCalc91 />
      {/* <RandColoring /> */}
      {/* <CallAPIVanilla /> */}
      {/* <CallAPIAxios /> */}
      {/* <LocalAPI /> */}
    </View>
  )
};

export default App;
