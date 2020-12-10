import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Template from '../tempcol/Template';

const { color, ukuran } = Template();

const TabUtamaScreen = ({ navigation }) => (
  <View style={styles.allpage}>
    <View style={styles.pmblog}>
      <Image
      source ={require ('../assets/img/primakara_bar.png')}
   style= {{width:"110%", height:300, marginTop:100}}               
/>
    </View>
    <View style={[styles.pmblog, ]}>
      <Text style={styles.judul}>
        SELAMAT DATANG
      </Text>
      <Text style={styles.ket}>
        Absensi mahasiswa baru STMIK PRIMAKARA 2020
      </Text>
      <Text style={styles.ket}>
       mahasiswa baru diharapkan TEPAT WAKTU dalam melakukan persensi untuk data kehadiran dalam
       pembekalan mahasiswa baru STMIK Primakara 2020
      </Text>
    </View>
    <View style={{ marginVertical: 10, }}>
    <TouchableOpacity
    style={styles.buttonlog}
    onPress={() => navigation.navigate('Login')}>
    <Text style={{ 
    color: color.common.white,
    fontWeight:"bold"
    }}>Login</Text>
    </TouchableOpacity>

    </View>
  </View>
);

const styles = StyleSheet.create({
  allpage: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  
  },
  pmblog: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    fontSize: ukuran.size.xl,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop:20,
  },
  ket: {
    fontSize: ukuran.size.sm,
    textAlign:"center",
    color: color.text.secondary,
  },
  row: { flexDirection: 'row' 
},

buttonlog: {
  marginTop:20,
  backgroundColor: color.primakara.birutua,
  borderRadius: 20,
  padding: 16,
  alignItems: 'center',
},
});

export default TabUtamaScreen;
