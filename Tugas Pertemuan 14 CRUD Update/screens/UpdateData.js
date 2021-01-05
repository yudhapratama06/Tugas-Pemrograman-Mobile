import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './firestore/index';
import Template from '../tempcol/Template';
const { ukuran, color } = Template();

export default function UpdateDataScreen({ route, navigation }) {
  const [Nim, setNim] = useState(route.params.Nim);
  const [Nama, setNama] = useState(route.params.Nama);
  const [Prodi, setProdi] = useState(route.params.Prodi);
  const [Nama_Kelompok, setNama_Kelompok] = useState(route.params.Nama_Kelompok);
  const [Nomer_Whatsapp, setNomer_Whatsapp] = useState(route.params.Nomer_Whatsapp);


  function upDateFire() {
    try {
      firebase.bd.ref('/users/' + route.params.key).update({
        Nim: Nim,
        Nama: Nama,
        Prodi: Prodi,
        Nama_Kelompok: Nama_Kelompok,
        Nomer_Whatsapp: Nomer_Whatsapp
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setNim('');
      setNama('');
      setProdi('');
      setNama_Kelompok('');
      setNomer_Whatsapp('');
      navigation.navigate("InputData")
    }
    alert('Data Berhasil di Update!')
  }

  return (
    <View style={styles.container}>
            <View>
        <Image
          style={styles.imglog}
          source ={require ('../assets/img/pr.png')}
        />
        </View>
        <View style={styles.tengah}>
        <Text style={styles.judul}>Update Data Mahasiswa</Text>
        </View>

        <View style={styles.textall}>
        <Text style={styles.text}>Nim</Text>
        <TextInput style={styles.textInput} onChangeText={Nim => setNim(Nim)} value={Nim} 
         placeholder="Nim"
         keyboardType="numeric" />

        <Text style={styles.text}>Nama</Text>
        <TextInput style={styles.textInput} onChangeText={Nama => setNama(Nama)} value={Nama} 
        placeholder="Nama"/>

        <Text style={styles.text}>Prodi</Text>
        <TextInput style={styles.textInput} onChangeText={Prodi => setProdi(Prodi)} value={Prodi} 
        placeholder="Prodi"/>

        <Text style={styles.text}>Nama Kelompok</Text>
        <TextInput style={styles.textInput} onChangeText={Nama_Kelompok => setNama_Kelompok(Nama_Kelompok)} value={Nama_Kelompok}
        placeholder="Nama Kelompok" />

        <Text style={styles.text}>Nomer Whatsapp</Text>
        <TextInput style={styles.textInput} onChangeText={Nomer_Whatsapp => setNomer_Whatsapp(Nomer_Whatsapp)} value={Nomer_Whatsapp} 
        keyboardType="numeric"
        placeholder="Nomer Whatsapp"/>


        </View>
        <View style={{ flexDirection: 'row', marginTop: 5, alignSelf: 'center' }}>
        <TouchableOpacity style={styles.btnup} onPress={() => { upDateFire() }}>
          <Text style={styles.textbtn}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btncan} onPress={() => navigation.navigate("InputData")}>
          <Text style={styles.textbtn}>Cancel</Text>
        </TouchableOpacity>
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    marginLeft:65,
    color: '#000',
  },
  textbtn: {
    color: '#ffffff',
  },
  btnup: {
    marginTop: 10,
    borderWidth: 1,
  
    backgroundColor:color.primakara.birutua,
    borderRadius: 5,
    width: 75,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  btncan: {
    marginTop: 10,
    borderWidth: 1,
    backgroundColor:color.primakara.orange,
    borderRadius: 5,
    width: 75,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  textInput: {
    marginLeft:60,
    width: 300,
    height: 45,
  
    borderColor: color.primakara.birutua,
    backgroundColor: '#fff',
    borderRadius: 9,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  imglog: {
    width: 400,
    height: 170,
    marginTop:50,
    resizeMode: 'cover',
  },
  judul:{
    fontSize:20,
    color:"white",
    backgroundColor:color.primakara.orange,
    borderColor: color.primakara.birutua,
    textAlign:"center",
    borderWidth: 2,
    borderRadius: 5,
    width: 250,
    marginBottom:10
  },
  tengah:{
    alignItems:"center",
    marginTop:5,
    marginBottom:5
  },
});
