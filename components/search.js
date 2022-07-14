import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { Card, Button, Icon } from 'react-native-elements';

export default function Search() {
  return (
    <View style={styles.card}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>PapoReto</Text>
        </View>
        <View style={styles.center}>
          <TextInput style={styles.input} />
          <IconButton
            icon="magnify"
            color={Colors.black}
            size={15}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <Card>
          <Card.Title>MUSICA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require('../assets/man-4807395_1920.jpg')}
          />
          <Button title="buscar" />
        </Card>
        <Card>
          <Card.Title>ANIME</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require('../assets/my-hero-academia-5966057_1920.jpg')}
          />
          <Button style={styles.color} title="buscar" />
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  center: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'orange',
    marginTop: 1,
    height: 40,
  },
  input: {
    height: 30,
    width: 200,
    marginLeft: 70,
    borderColor: 'gray',
    borderWidth: 1,
  },
  color: {
    borderBottomColor: 'orange',
  },
});
