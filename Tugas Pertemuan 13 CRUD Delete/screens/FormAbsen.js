import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  ImagePickerIOS
} from 'react-native';

import Template from '../tempcol/Template';
 import firebase from './firestore/index';



const { ukuran, color } = Template();

const FormAbsenScreen = ({navigation}) => {

  const [state, setState] = useState ({
      Nim: "",
      Nama: "",
      comment: "",
      Prodi: "",
      Nama_Kelompok: "",


  })

  const handleChangeText = (Nim, value) => {
      setState ({ ...state, [Nim]: value})
  }

  const submit = async () => {
      if (state.Nim === '') {
          alert ('Please provide a Nim')
      }
      else {
          await firebase.db.collection('users').add({
              Nim: state.Nim,
              Nama: state.Nama,
              Prodi: state.Prodi,
              Nama_Kelompok: state.Nama_Kelompok,
              Nomer_Whatsapp: state.Nomer_Whatsapp,
          })
          alert('Data Sudah Berhasil Diinput!')
      }
  }

        return (
  <ScrollView>
    <View style={styles.allpage}>
      <View>
        <Image
          style={styles.imglog}
          source ={require ('../assets/img/pr.png')}
        />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={styles.judul}>Form Absensi PMB GEMILANG 2020</Text>
        <View>
        <TextInput
            onChangeText= {(value) => handleChangeText ("Nim", value)}
            placeholder="Nim"
            keyboardType="numeric"
            style={[styles.input1, { marginBottom: 8 }]}
          />
          <TextInput
            onChangeText= {(value) => handleChangeText ("Nama", value)}
            placeholder="Nama"
            style={[styles.input2, { marginBottom: 8 }]}
          />
          <TextInput
            onChangeText= {(value) => handleChangeText ("Prodi", value)}
            placeholder="Prodi"
            style={[styles.input1, { marginBottom: 8 }]}
          />
          <TextInput
            onChangeText= {(value) => handleChangeText ("Nama_Kelompok", value)}
            placeholder="Nama Kelompok"
            style={[styles.input2, { marginBottom: 8 }]}
          />
            <TextInput
            onChangeText= {(value) => handleChangeText ("Nomer_Whatsapp", value)}
            keyboardType="numeric"
            placeholder="Nomer Whatsapp"
            style={[styles.input1, { marginBottom: 8 }]}
          />
        </View>

      </View>

      <TouchableOpacity
            style={styles.buttonsumit}
            onPress={() => submit ()}

          >
            <Text style={{ 
              color: color.common.white,
              fontWeight:"bold"
               }}>SUBMIT</Text>
          </TouchableOpacity>


    </View>


  </ScrollView>

        );

            };


const styles = StyleSheet.create({
  allpage: {
    flex: 1,
    backgroundColor: color.common.white,
  },
  imglog: {
    width: '100%',
    height: 170,
    marginTop:50,
    resizeMode: 'cover',
  },
  judul: {
    marginTop:20,
    fontSize: ukuran.size.md,
    fontWeight: '700',
    marginBottom: 16,
    textAlign:"center"
  },

  buttonsumit: {
    marginTop:20,
    backgroundColor: color.primakara.birutua,
    borderRadius:100,
    padding: 16,
    textAlign:"center",
    alignItems: 'center',
  },
  buttonimage: {
    marginTop:20,
    backgroundColor: color.primakara.birutua,
    borderRadius:100,
    padding: 16,
    textAlign:"center",
    alignItems: 'center',
  },

  input1: {
    borderColor: color.common.white,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'Roboto',
    borderBottomColor:color.primakara.orange,

  },

  input2: {
    borderColor: color.common.white,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'Roboto',
    borderBottomColor:color.primakara.birutua,

  },
});

export default FormAbsenScreen;
