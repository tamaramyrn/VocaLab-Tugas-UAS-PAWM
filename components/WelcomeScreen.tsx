import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Gambar */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/language-illustration.png')}
            style={styles.image}
            resizeMode="cover" // Ubah ke cover agar gambar memenuhi area
            onError={(error) => console.log('Error loading image:', error.nativeEvent)}
          />
        </View>

        {/* Judul */}
        <Text style={styles.title}>
          Learn a language{'\n'}in 3 minutes a day
        </Text>

        {/* Tombol */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/signup')}
        >
          <Text style={styles.buttonText}>Start Learning</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.linkText} onPress={() => router.push('/login')}>
            Log in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: '100%', // Pastikan container gambar memenuhi lebar layar
    height: '45%', // Sesuaikan tinggi gambar agar proporsional
  },
  image: {
    width: '100%', // Gambar memenuhi seluruh lebar layar
    height: '100%', // Gambar memenuhi seluruh tinggi container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginTop: 30, // Naikkan tulisan lebih dekat ke gambar
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
  },
  linkText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});