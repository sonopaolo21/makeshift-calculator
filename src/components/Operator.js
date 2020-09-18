import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Operator = ({ opr, formula }) => {
  return (
    <TouchableOpacity onPress={() => formula()}>
        <View style={styles.button}>
            <Text style={styles.buttonText}> {opr} </Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        height: 60,
        width: 60,
        backgroundColor: '#FFCA05',
        justifyContent: 'center',
        marginLeft: 10
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }

});

export default Operator;