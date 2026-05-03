import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Alert } from 'react-native';

const App = () => {
  const openWebsite = async () => {
    const url = 'https://mediacongo.net';
    
    try {
      const supported = await Linking.canOpenURL(url);
      
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Erreur', 'Impossible d\'ouvrir ce lien');
      }
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur est survenue');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Bonjour</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={openWebsite}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          Ouvrir mediacongo.net
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;