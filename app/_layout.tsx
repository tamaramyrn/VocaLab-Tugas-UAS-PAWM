import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ title: 'Sign Up', headerShown: false }} />
        <Stack.Screen name="login" options={{ title: 'Log In', headerShown: false }} />
        <Stack.Screen name="start" options={{ title: 'Start', headerShown: false }} />
        <Stack.Screen name="home" options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="question1" options={{ title: 'Question 1', headerShown: false }} />
        <Stack.Screen name="question2" options={{ title: 'Question 2', headerShown: false }} />
        <Stack.Screen name="question3" options={{ title: 'Question 3', headerShown: false }} />
        <Stack.Screen name="question4" options={{ title: 'Question 4', headerShown: false }} />
        <Stack.Screen name="question5" options={{ title: 'Question 5', headerShown: false }} />
        <Stack.Screen name="question6" options={{ title: 'Question 6', headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Not Found', headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}