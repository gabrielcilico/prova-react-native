import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.column}>10</Text>
                <Text style={styles.column}>Macarrão alho e óleo</Text>
                <Text style={styles.column}>R$ 15,00</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.column}>5</Text>
                <Text style={styles.column}>Estrogonofes</Text>
                <Text style={styles.column}>R$ 18,00</Text>
            </View>
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
    },
    column: {
        color: '#fff', 
        padding: 10, 
        fontSize: 12
    }
  });