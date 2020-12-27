import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './firestore/index';

export default function UpdateDataScreen({ route, navigation }) {
  const [name, setName] = useState(route.params.name);
  const [title, setTitle] = useState(route.params.title);
  const [comment, setComment] = useState(route.params.comment);
  // const [age, setAge] = useState(route.params.age);

  function upDateFire() {
    try {
      firebase.bd.ref('/users/' + route.params.key).update({
        name: name,
        title: title,
        comment: comment
      })

    } catch (error) {
      alert(error);
    }
    finally {
      // setAge('');
      setName('');
      setTitle('');
      setComment('');
      navigation.navigate("InputData")
    }
  }

  return (
    <View style={styles.container}>

        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.textInput} onChangeText={name => setName(name)} value={name} />

        <Text style={styles.text}>Title</Text>
        <TextInput style={styles.textInput} onChangeText={title => setTitle(title)} value={title} />

        <Text style={styles.text}>Comment</Text>
        <TextInput style={styles.textInput} onChangeText={comment => setComment(comment)} value={comment} />

        <TouchableOpacity style={styles.btnEnviar} onPress={() => { upDateFire() }}>
          <Text style={styles.text}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEnviar} onPress={() => navigation.navigate("InputData")}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  btnEnviar: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});
