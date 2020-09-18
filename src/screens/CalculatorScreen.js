import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Operator from '../components/Operator';

const CalculatorScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [numF, setNumF] = useState('');
  const [oper, setOper] = useState('');

  return (
      <View style={styles.container}>
          <View style={styles.textView}>
            <TextInput style={styles.textInput1} keyboardType="number-pad" textAlign={'center'} onChangeText={num1 => {
              setNum1(num1)
            }} value={num1} />
            <Text style={{ fontSize: 45, marginLeft: 20, marginRight: 20, color: 'white' }} > {oper} </Text>
            <TextInput style={styles.textInput2} keyboardType="number-pad" textAlign={'center'} onChangeText={num2 => {
              setNum2(num2)
            }} value={num2} />
          </View>

          <View style={styles.buttonView}>
            <Operator opr='+' formula={() => {
              setOper('+')
              setNumF(parseInt(num1)+parseInt(num2))
            }} />
            <Operator opr='-' formula={() => {
              setOper('-')
              setNumF(parseInt(num1)-parseInt(num2))
            }} />
            <Operator opr='*' formula={() => {
              setOper('*')
              setNumF(parseInt(num1)*parseInt(num2))
            }} />
            <Operator opr='/' formula={() => {
              setOper('/')
              setNumF(parseInt(num1)/parseInt(num2))
            }} />
            <Operator opr='C' formula={() => {
              setNum1('')
              setNum2('')
              setOper('')
              setNumF('')
            }} />
          </View>

          <TextInput style={styles.textInput3} textAlign={'center'} editable={false}> {numF} </TextInput>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#884EA0',
    flex: 1
  },
  textInput1: {
    borderWidth: 1, 
    borderColor: 'gray', 
    fontSize: 45, 
    width: 100, 
    height: 100, 
    borderRadius: 10,
    alignSelf: 'flex-start',
    backgroundColor: 'white'
  },
  textInput2: {
    borderWidth: 1, 
    borderColor: 'gray', 
    fontSize: 45, 
    width: 100, 
    height: 100, 
    borderRadius: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'white'
  },
  textInput3: {
    alignSelf: 'center', 
    marginVertical: 30, 
    borderWidth: 1, 
    borderColor: 'gray', 
    borderRadius: 10, 
    fontSize: 45, 
    width: 350,
    backgroundColor: 'white'
  },
  textView: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginVertical: 20
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default CalculatorScreen