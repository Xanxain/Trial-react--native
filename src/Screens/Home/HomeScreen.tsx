import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function HomeScreen({ email, navigation }: any) {
  // const handleExplore = () => {
  //   navigation.navigate('Detail', { item: { name: 'Sample Page' } });
  // };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome 👋</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      
      {/* Card Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dashboard</Text>
        <Text style={styles.cardText}>You have successfully logged in.</Text>
      </View>

      {/* Action Buttons */}
      {/* <TouchableOpacity style={styles.button} onPress={handleExplore}>
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>Go to List</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f6f8',
  },

  header: {
    marginTop: 20,
    marginBottom: 30,
  },

  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },

  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,

    // shadow
    elevation: 5,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },

  cardText: {
    fontSize: 14,
    color: '#555',
  },

  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  button2: {
    backgroundColor: '#f39a25',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  logout: {
    backgroundColor: '#ff4d4f',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
