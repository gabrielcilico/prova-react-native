import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function Header() {
    return (
        <View style={styles.container}>
            {/* <FontAwesomeIcon icon={["far", "bars"]} style={[{color: '#fff', padding: 10, fontSize: 25}]} /> */}
            <Text style={[{color: '#fff', padding: 10, fontSize: 15}]}>Voltar</Text>
            <Text style={[{color: '#fff', padding: 10, fontSize: 25}]}>iComida</Text>
            <Text style={[{color: '#fff', padding: 15, fontSize: 15}]}>Carrinho</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#84e',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });