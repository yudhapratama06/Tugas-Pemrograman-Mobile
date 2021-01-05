import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Template from '../tempcol/Template';

const { ukuran, color } =Template();

const DetailsScreen = ({ navigation }) => (
 
  <ScrollView>
    <View style={styles.all}>
      <View>
        <Image
          style={styles.imglog}
          source ={require ('../assets/img/pr.png')}
        />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={styles.pengumuman}>PENGUMUMAN PMB GEMILANG 2020</Text>
        <Text style={styles.ketjudul}>
          A. KETENTUAN PAKAIAN
        </Text>
        <Text>    1. Baju kemeja putih lengan Panjang </Text>
        <Text>    2. Celana Panjang kain hitam </Text>
        <Text>    3. Ikat pinggang warna hitam </Text>
        <Text>    4. Kaos kaki putih </Text>
        <Text>    5. Sepatu warna hitam atau navy</Text>

        <Text style={styles.ketjudul}>
          B. BARANG YANG DISIAPKAN
        </Text>
        <Text>    1. Buku tulis coklat </Text>
        <Text>    2. Pulpen lebih cepat </Text>
        <Text>    3. Handphone/Laptop </Text>

        <Text style={styles.ketjudul}>
          B. PLATFORM
        </Text>
        <Text>    1. Google meet/Youtube </Text>
        <Text>    2. Google Classroom </Text>
        <Text>    3. Spotify </Text>

      </View>

      <TouchableOpacity
            style={styles.buttonpre}
            onPress={() => navigation.navigate('IsiForm')}>
            <Text style={{ 
              color: color.common.white,
              fontWeight:"bold"
               }}>Isi Peresensi</Text>
          </TouchableOpacity>
    </View>
  </ScrollView> 
);
const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: color.common.white,
  },
  imglog: {
    width: '100%',
    height: 170,
    marginTop:50,
    resizeMode: 'cover',
  },
  pengumuman: {
    fontSize: ukuran.size.md,
    fontWeight: '700',
    marginBottom: 16,
    textAlign:"center"
  },
  ketjudul: {
    color: color.common.black,
    marginBottom: 3,
    marginTop:5,
    fontWeight:"bold"  
  },

  buttonpre: {
    marginTop:20,
    backgroundColor: color.primakara.birutua,
    borderRadius:100,
    padding: 16,
    textAlign:"center",
 
    alignItems: 'center',
  },
});

export default DetailsScreen;
