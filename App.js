import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, 
      SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Navigator from "./navigation/navigation";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Navigator/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1364A6',
  }
});
