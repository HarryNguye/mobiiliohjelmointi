import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { useState} from 'react';

export default function App() {

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
      
      <View style={styles.Button} >
      <Button title="Make a guess" onPress={handleGuess} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}



// GUESS THE NUMBER PELI
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

