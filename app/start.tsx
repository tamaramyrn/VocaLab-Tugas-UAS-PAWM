import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function StartScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Gambar */}
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/start-illustration.png')}
          style={styles.image}
          resizeMode="cover"
          onError={(error) => console.log('Error loading image:', error.nativeEvent)}
        />
      </View>

      {/* Judul */}
      <Text style={styles.title}>
        Let’s start studying!
      </Text>

      {/* Tombol */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.buttonText}>Let’s Go!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: '100%',
    height: '45%',
    marginBottom: 40, // Add some space after the image
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 15,
  },
  linkText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
