import React, { useState, useEffect } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList,
  Image,
  ScrollView
 } from 'react-native';
import firebase from './firestore/index'
import Template from '../tempcol/Template';

const { ukuran, color } = Template();
export default function InputDataScreen({ navigation }) {

  const [listFire, setListFire] = useState(null);

  useEffect(() => {
    try {
      firebase.bd.ref('/users').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            Nim: childItem.val().Nim,
            Nama: childItem.val().Nama,
            Prodi: childItem.val().Prodi,
            Nama_Kelompok: childItem.val().Nama_Kelompok,
            Nomer_Whatsapp: childItem.val().Nomer_Whatsapp,
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.bd.ref('/users/' + key).remove()

    alert('Data Berhasil di Hapus!')
  }

  function editFire(key, Nim, Nama,Prodi, Nama_Kelompok, Nomer_Whatsapp) {
    navigation.navigate('UpdateData',
      {
        key: key,
        Nim: Nim,
        Nama: Nama,
        Prodi: Prodi,
        Nama_Kelompok: Nama_Kelompok,
        Nomer_Whatsapp: Nomer_Whatsapp,
      })
  }

  return (
    <View style={styles.bar}>
      <View>
        <Image
          style={styles.imglog}
          source ={require ('../assets/img/pr.png')}
        />
      </View>

      <Text style={styles.judul}>List Absensi Mahasiswa</Text>

      <FlatList style={styles.viewFlat} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.box}>
            <Text style={styles.data}>Nim: {item.Nim} </Text>
            <Text style={styles.data}>Nama: {item.Nama}</Text>
            <Text style={styles.data}>Prodi: {item.Prodi}</Text>
            <Text style={styles.data}>Nama Kelompok: {item.Nama_Kelompok}</Text>
            <Text style={styles.data}>Nomer Whatsapp: {item.Nomer_Whatsapp}</Text>
            <View style={{ flexDirection: 'row', marginTop: 5, alignSelf: 'center' }}>
             <TouchableOpacity style={styles.btnedit} onPress={() => 
              { editFire(
                item.key, 
                item.Nim, 
                item.Nama, 
                item.Prodi,
                item.Nama_Kelompok, 
                item.Nomer_Whatsapp 
                ) }}>
                <Text style={{  color:'#000'}}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btndelet} onPress={() => { delFire(item.key) }}>
                <Text style={{  color:'#000'}}>Delete</Text>
              </TouchableOpacity> 
            </View>
          </View>

        } />
    </View>

  );
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'


  },
  imglog: {
   width:350,
    height: 170,
    marginTop:50,
   
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

  data: {
    color: 'white',
    marginLeft:10
  },
  box: {
    marginTop: 10,
    width: 350,
    height: 155,
    borderColor: color.primakara.orange,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    margin: 5,
    backgroundColor:color.primakara.birutua
  },
  btnedit: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    backgroundColor:"white"
  },
  btndelet: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    backgroundColor:color.primakara.orange
  },
  viewFlat: {
    maxHeight: 910,
  }
});