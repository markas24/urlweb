import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Linking, 
  StyleSheet, 
  Alert,
  ScrollView,
  Share
} from 'react-native';

const App = () => {
  // Fonction pour écouter la radio (lien modifié)
  const listenRadio = async () => {
    const url = 'https://softmarket.biz/rcolfm/index.php';
    
    try {
      const supported = await Linking.canOpenURL(url);
      
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Erreur', 'Impossible d\'ouvrir le lien de la radio');
      }
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur est survenue. Vérifiez le lien.');
    }
  };

  // Fonction pour partager l'application
  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: 'Découvrez Radio RCOLFM 93.8 MHZ - Votre radio de confiance ! Téléchargez l\'application : https://github.com/markas24/urlweb',
        title: 'Partager Radio RCOLFM',
      });
      if (result.action === Share.sharedAction) {
        console.log('Partagé avec succès');
      } else if (result.action === Share.dismissedAction) {
        console.log('Partage annulé');
      }
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de partager');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* En-tête avec logo texte */}
        <View style={styles.header}>
          <Text style={styles.title}>📻 RADIO RCOLFM</Text>
          <Text style={styles.frequency}>93.8 MHZ</Text>
        </View>

        {/* Slogans */}
        <View style={styles.sloganContainer}>
          <Text style={styles.slogan}>✨ "La voix de la communauté"</Text>
          <Text style={styles.slogan}>🎵 "La musique qui vous ressemble"</Text>
          <Text style={styles.slogan}>🌍 "L'information en temps réel"</Text>
          <Text style={styles.slogan}>❤️ "Votre radio, votre confiance"</Text>
        </View>

        {/* Message Bonjour personnalisé */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Bonjour !</Text>
          <Text style={styles.welcomeText}>Bienvenue sur l'application officielle</Text>
        </View>

        {/* Boutons d'action */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.radioButton]} 
            onPress={listenRadio}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>🎧 Écoutez Votre Radio</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.shareButton]} 
            onPress={shareApp}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>📤 Partager l'application</Text>
          </TouchableOpacity>
        </View>

        {/* Informations de contact */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>📞 Contact: +243 XXX XXX XXX</Text>
          <Text style={styles.footerText}>📧 Email: contact@rcolfm.com</Text>
          <Text style={styles.copyright}>© 2026 Radio RCOLFM - Tous droits réservés</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#0f3460',
    borderRadius: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e94560',
    letterSpacing: 1,
  },
  frequency: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 8,
  },
  sloganContainer: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 30,
  },
  slogan: {
    fontSize: 16,
    color: '#a8dadc',
    textAlign: 'center',
    marginVertical: 5,
    fontStyle: 'italic',
  },
  greetingContainer: {
    alignItems: 'center',
    marginBottom: 35,
  },
  greeting: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#e94560',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#f1f1f1',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 40,
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  radioButton: {
    backgroundColor: '#e94560',
  },
  shareButton: {
    backgroundColor: '#0f3460',
    borderWidth: 1,
    borderColor: '#e94560',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#0f3460',
    width: '100%',
  },
  footerText: {
    fontSize: 12,
    color: '#a8dadc',
    marginVertical: 3,
  },
  copyright: {
    fontSize: 10,
    color: '#6c757d',
    marginTop: 10,
  },
});

export default App;