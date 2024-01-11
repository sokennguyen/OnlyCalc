/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Numpad from './components/Numpad'
import ListOperator from './components/ListOperator'
import Ongoing from './components/Ongoing'


function App(): React.JSX.Element {
    const [result,setResult] = useState('');
    const [equation,setEquation] = useState('0');
    return (
        <View style={{flex:1}}>
            <View style={{
                    flex:4,
                    backgroundColor:'grey',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Ongoing equation={equation}/>
            </View>
            <View style={{
                    flex:3,
                    flexDirection:'row',
                    backgroundColor:'black',
            }}>
                <View style={{flex:3}}>
                    <Numpad equation={equation} setEquation={setEquation}/>
                </View>
                <View
                    style={{
                        backgroundColor:'red',
                        flex:1
                    }}
                >
                    <ListOperator equation={equation} setEquation={setEquation}/>
                </View>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
