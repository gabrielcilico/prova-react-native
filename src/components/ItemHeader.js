import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.column}>Qntd</Text>
            <Text style={styles.column}>Pratos selecionados</Text>
            <Text style={styles.column}>Valor unitário</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#fdfdfd',
    },
    column: {
        color: '#fff', 
        padding: 10, 
        fontSize: 12
    }
  });