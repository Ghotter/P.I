import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import Search from './search';

const App = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container1}>
          <View styles>
            <Text style={styles.title}>PapoReto</Text>
          </View>

          <Card>
            <Card.Title>Grupo 1</Card.Title>

            <Text style={{ marginBottom: 10 }}>Grupo sobre Futebol</Text>
            <Button
              title="Participar"
              onPress={() => {
                props.navigation.navigate('chats');
              }}
            />
          </Card>

          <Card>
            <Card.Title>Grupo 2</Card.Title>

            <Text style={{ marginBottom: 10 }}>Grupo sobre Anime</Text>
            <Button
              title="Participar"
              onPress={() => {
                props.navigation.navigate('chats');
              }}
            />
          </Card>

          <Card>
            <Card.Title>Grupo 3</Card.Title>
            <Card.Divider />

            <Text style={{ marginBottom: 10 }}>Grupo sobre a Marvel</Text>
            <Button
              title="Participar"
              onPress={() => {
                props.navigation.navigate('chats');
              }}
            />
          </Card>

          <Card>
            <Card.Title>Grupo 4</Card.Title>

            <Text style={{ marginBottom: 10 }}>Grupo sobre StreetWear</Text>
            <Button
              title="Participar"
              onPress={() => {
                props.navigation.navigate('chats');
              }}
            />
          </Card>
          <Card>
            <Card.Title>Grupo 5</Card.Title>

            <Text style={{ marginBottom: 10 }}>
              Grupo sobre Rôles Aleatórios
            </Text>
            <Button
              title="Participar"
              onPress={() => {
                props.navigation.navigate('chats');
              }}
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  container1: {
    backgroundColor: 'orange',
    marginTop: 1,
    height: 40,
  },
});

export default App;
