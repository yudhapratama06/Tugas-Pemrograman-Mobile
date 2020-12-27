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
      Prodi: "",
      Nama_Kelompok: "",
      Nomer_Whatsapp: "",


  })

  const handleChangeText = (Nim, value) => {
      setState ({ ...state, [Nim]: value})
  }

  const submit = async () => {
      if (state.Nim === '') {
          alert ('Data belum di input')
      }
      else {
        //   await firebase.db.collection('users').add({
            await firebase.bd.ref('/users').push({
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

          <TouchableOpacity
            style={styles.buttonsumit}
            onPress={() => navigation.navigate('InputData')}

          >
            <Text style={{ 
              color: color.common.white,
              fontWeight:"bold"
               }}>View Data</Text>
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
    borderRadius:500,
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














// import React, {useState} from 'react'
// import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native'
// import { ScrollView, TextInput } from 'react-native-gesture-handler'
// import firebase from './firestore/index'

// const IsiFormScreen = ({navigation}) => {
// const image = { uri: 'https://sujeitoprogramador.com/wp-content/uploads/2019/03/como.png'}

// const [state, setState] = useState ({
//     name: "",
//     title: "",
//     comment: ""
// })

// const handleChangeText = (name, value) => {
//     setState ({ ...state, [name]: value})
// }

// const savecomment = async () => {
//     if (state.name === '') {
//         alert ('Please provide a name')
//     }
//     else {
//         // await firebase.db.collection('users').add({
//         await firebase.bd.ref('/users').push({
//             name: state.name,
//             title: state.title,
//             comment: state.comment
//         })
//         alert('Seved!')
//     }
// }

//     return (
//         <ScrollView style={styles.container}>
//             <View style={styles.postHeader}>   
//                 <Image
//                     style={styles.imgPerfil}
//                     source={image}
//                 />
//                 <Text style={styles.username}>
//                     Henrique Dias
//                 </Text>
//             </View>

//             <ImageBackground
//                 source={image}
//                 style={styles.image}
//                 imageStyle={{width: '100%', height: 300}}>

//                 <TouchableOpacity style={{width: 125, backgroundColor: '#00C2CB', padding: 10,  borderRadius: 40, position: 'absolute', right: 12, top: 310}}>
//                     <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Download</Text>
//                 </TouchableOpacity>
//             </ImageBackground>

//             <View style={styles.inputgrup}>
//                 <TextInput
//                 style={{margin: 5, marginHorizontal: 15}}
//                 placeholder= "Your Name"
//                 onChangeText= {(value) => handleChangeText ("name", value)}
//                 />
//             </View>

//             <View style={styles.inputgrup}>
//                 <TextInput
//                 style={{margin: 5, marginHorizontal: 15}}
//                 placeholder= "Title"
//                 onChangeText= {(value) => handleChangeText ("title", value)}
//                 />
//             </View>

//             <View style={styles.inputgrup}>
//                 <TextInput
//                 style={{margin: 5, marginHorizontal: 15}}
//                 placeholder= "Comment"
//                 onChangeText= {(value) => handleChangeText ("comment", value)}
//                 />
//             </View>

//             <TouchableOpacity onPress={() => savecomment ()} style={{width: 125, backgroundColor: '#00C2CB', padding: 10,  borderRadius: 40, alignSelf: 'center', marginTop: 20}}>
//                 <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Sand</Text>
//             </TouchableOpacity>

//             <TouchableOpacity             onPress={() => navigation.navigate('InputData')}style={{width: 125, backgroundColor: '#00C2CB', padding: 10,  borderRadius: 40, alignSelf: 'center', marginTop: 20}}>
//                 <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Sand</Text>
//             </TouchableOpacity>
            
//         </ScrollView>
//     )
// }

// export default IsiFormScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1, 
//         backgroundColor: '#fff',
//         marginTop: 25
//     },
//     image: {
//         height: 380,
//         justifyContent: 'flex-end',
//     },
//     imgPerfil: {
//         width: 40,
//         height: 40,
//         borderRadius: 25,
//         marginLeft: 10
//     },
//     username: {
//         color: '#000',
//         fontWeight: 'bold',
//         marginLeft: 10
//     },
//     postHeader: {
//         width: '100%',
//         height: 55,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     inputgrup: {
//         marginBottom: 15,
//         borderBottomWidth: 1,
//         borderColor: '#00C2CB',
//         borderRadius: 20,
//         marginHorizontal: 30
//     }
// })