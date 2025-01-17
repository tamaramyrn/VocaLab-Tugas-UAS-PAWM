import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.quote}>
        “There is only one good, knowledge, and one evil, ignorance.”
      </Text>
      <Text style={styles.author}>— Socrates</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F1FF',
    padding: 20,
  },
  quote: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    fontWeight: '400',
    color: '#1E90FF',
  },
});