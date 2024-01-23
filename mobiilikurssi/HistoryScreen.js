import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function HistoryScreen({ route }) {
  const { data } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>History</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.key}</Text>}
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