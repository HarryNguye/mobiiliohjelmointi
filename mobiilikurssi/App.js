import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, StatusBar } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

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
      </View>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={plus} />
        <Button title="-" onPress={miinus} />
      </View>
      <Text>History</Text>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
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




// numeron arvaus PELI
/* const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
 const [guessCount, setGuessCount] = useState(0)
 const [arvaus, setArvaus] = useState('')
 const [feedback, setFeedback] = useState('');


 const handleGuess = () => {
   const userGuess = parseInt(arvaus);
   setGuessCount(guessCount + 1);

   if (userGuess > randomNumber) {
     setFeedback(`Your guess ${userGuess} is too high`);
   } else if (userGuess < randomNumber) {
     setFeedback(`Your guess ${userGuess} is too low`);
   } else {
     setFeedback(`You guessed the number in ${guessCount} guesses`);
     // Tässä kohtaa voit myös asettaa logiikan pelin uudelleen aloittamiseksi tai muuta toiminnallisuutta
   }
 };


 return (
   <View style={styles.container}>
     <Text>{feedback}</Text>
     <Text> Guess a number between 0-100 </Text>

     <TextInput
     style={{width: 200, borderColor: 'black', borderWidth: 1}}
     keyboardType = 'numeric'
     onChangeText={(guess) => setArvaus(guess)}
     value={arvaus}
     />

     <View style={styles.Button} >
     <Button title="Make a guess" onPress={handleGuess} />
     </View>

     <StatusBar style="auto" />
   </View>
 );
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 Button:{
 color: 'black',
 flexDirection: 'row',
 },
}); */





// LASKURI
/*const [num1, setNum1] = useState(' ');
const [num2, setNum2] = useState(' ');
const [result, setResult] = useState('');

const plus = () => {
  const plus = parseFloat(num1) + parseFloat(num2);
  setResult(plus);
};

const miinus = () => {
  const miinus = parseFloat(num1) - parseFloat(num2);
  setResult(miinus);
};

  return (
    <View style={styles.container}>

      <Text>Result: {result}</Text>

      <TextInput 
      style={{width: 200, borderColor: 'black', borderWidth: 1}}
      onChangeText={setNum1}
      keyboardType='numeric'
      />
      <TextInput 
      style={{width: 200, borderColor: 'black', borderWidth: 1}}
      onChangeText={setNum2}
      keyboardType='numeric'
      />
      <StatusBar style="auto" />

      <View style={styles.Button} >
      <Button title="+" onPress={plus} />
      <Button title="-" onPress={miinus} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
  color: 'black',
  flexDirection: 'row',
  },
}); */


