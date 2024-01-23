// CalculatorScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function CalculatorScreen({ navigation, data, setData }) {
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');
  const [result, setResult] = React.useState('');

  const addToHistory = (num1, num2, result, operation) => {
    const newEntry = { key: `${num1} ${operation} ${num2} = ${result}` };
    setData([...data, newEntry]);
  };

  const plus = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
    addToHistory(num1, num2, sum, '+');
  };

  const miinus = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
    addToHistory(num1, num2, difference, '-');
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setNum1}
          keyboardType='numeric'
          value={num1}
        />
        <TextInput
          style={styles.input}
          onChangeText={setNum2}
          keyboardType='numeric'
          value={num2}
        />
        <Button title="History" onPress={() => navigation.navigate('History')} />
      </View>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={plus} />
        <Button title="-" onPress={miinus} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    input: {
      marginTop: 50,
      marginBottom: 5,
      width: 100,
      borderColor: 'gray',
      borderWidth: 1
    },
    buttonContainer: {
      flexDirection: 'row',
      margin: 10,
    }
  });
