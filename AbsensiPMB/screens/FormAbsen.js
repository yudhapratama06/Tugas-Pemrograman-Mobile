import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import Template from '../tempcol/Template';

const { ukuran, color } = Template();

    const FormAbsenScreen = () => {
        const [Nim, setNim] = React.useState('');
        const [Nama, setNama] = React.useState('');
        const [Prodi, setprodi] = React.useState('');
        const [Kelompok, setKelompok] = React.useState('');
        const [Nowa, setNowa] = React.useState('');

        const showAlertHandler = () => {
          Alert.alert(
            'Selamat',
            'Data anda berhasil diproses' ,
            [
              { text: 'OK' },
            ],
            { cancelable: true }
          );
        };

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
            value={Nim}
            onChangeText={(text) => setNim(text)}
            placeholder="Nim"
            keyboardType="numeric"
            style={[styles.input1, { marginBottom: 8 }]}
          />
          <TextInput
            value={Nama}
            onChangeText={(text) => setNama(text)}
            placeholder="Nama"
            style={[styles.input2, { marginBottom: 8 }]}
          />
          <TextInput
            value={Prodi}
            onChangeText={(text) => setprodi(text)}
            placeholder="Prodi"
            style={[styles.input1, { marginBottom: 8 }]}
          />
          <TextInput
            value={Kelompok}
            onChangeText={(text) => setKelompok(text)}
            placeholder="Nama Kelompok"
            style={[styles.input2, { marginBottom: 8 }]}
          />
            <TextInput
            value={Nowa}
            onChangeText={(text) => setNowa(text)}
            keyboardType="numeric"
            placeholder="Nomer Whatsapp"
            style={[styles.input1, { marginBottom: 8 }]}
          />
        </View>

      </View>

      <TouchableOpacity
            style={styles.buttonsumit}
            onPress={showAlertHandler}
      
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
