import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './src/components/Header';
import Item from './src/components/Item';
import ItemHeader from './src/components/ItemHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Pedido #TG225666</Text>
        <ItemHeader/>
        <Item/>
        <Text style={styles.title}>Endereço de entrega</Text>
        <Text style={styles.text}>Logradouro: Rua dos Bobos</Text>
        <Text style={styles.text}>Número: 000</Text>
        <Text style={styles.text}>CEP: 85660-000</Text>
        <Text style={styles.text}>Complemento: Apartamento 000</Text>
        <br/>
        <Text style={styles.text}>Tempo estimado de entrega: 50 minutos</Text>
        <Text style={styles.title}>Pagamento</Text>
        <Text style={styles.text}>Subtotal:                                                                         R$ 240,00</Text>
        <Text style={styles.text}>Taxa de entrega:                                                                 R$ 5,00</Text>
        <Text style={styles.text}>Total:                                                                               R$ 245,00</Text>
        <Text style={styles.text}>Forma de pagamento:                                       Cartão de crédito</Text>
        <Button style={styles.button} 
          title="Finalizar pedido" 
          color="#84e"

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#363636',
    height: '100%',
  },
  content: {
    padding: 25,
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    padding: 5
  },
  button: {
    fontSize: 18,
    color: '#fff'
  }
});