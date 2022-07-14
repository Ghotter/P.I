import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, TextInput  } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

export default function Chats()  {

  return(
    <View style={estilo.container}>
    
    <Card>
    <Text style={estilo.message1}>nome: victor</Text>
    <Text>ola</Text>
    </Card>
    <Card>
    <Text style={estilo.message1}>nome: vini</Text>
    <Text>ola</Text>
    </Card>
    <TextInput
    />
    <TextInput  
    style={estilo.input}
        
        placeholder="useless placeholder"
        keyboardType="numeric"/>
    
    
    
    </View>
  );
  }
const estilo = StyleSheet.create({
   container: {
     backgroundColor: '#fdf5e6'
  },
   message1: {
     fontSize:11,
     color:'#ff8c00',
  },
  input: {
    height: 30,
    margin: 18,
    borderWidth: 1,
    padding: 12,
    marginTop: 420,
  },

});
 
