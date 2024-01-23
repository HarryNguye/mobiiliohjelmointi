import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';

const Stack = createNativeStackNavigator();

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is HomeScreen</Text>
            <Button>
                title="Settings"
                onPress={() => navigation.navigate('Settings')}
            </Button>
            <View>
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