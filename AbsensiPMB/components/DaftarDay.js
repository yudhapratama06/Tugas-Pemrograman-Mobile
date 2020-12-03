import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Template from '../tempcol/Template';

const { radius, ukuran, color } = Template();

const DaftarDay = ({ navigation }) => (
  <View style={{ marginBottom: 24 }}>
    <TouchableOpacity style={styles.Panitia}>
      <View style={styles.logpmb}>
        <Image
          style={{
            width: 50,
            height: 50,
          }} 
          source ={require ('../assets/img/logo1.png')}
        
        />
      </View>
      <View>
        <Text style={styles.panitiap}>Panitia PMB</Text>
        <Text style={styles.tanggal}>Senin, 18 November 2020 </Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.gmbr}
      onPress={() => navigation.navigate('Details')}
    >
      <Image
        style={{
          width: '100%',
          height: 210,
          resizeMode: 'cover',
        }}
        source ={require ('../assets/BG/PRA.jpg')}
      />
    </TouchableOpacity>

    <View>
    <Text style={styles.day}>PRA 
      <Text style={{ 
          color: color.primakara.orange,
          fontWeight:"bold",
          fontSize:15,
          marginLeft:10
          }}>  PMB GEMILANG 2020</Text>
      </Text>

    </View>



    <TouchableOpacity style={styles.Panitia}>
      <View style={styles.logpmb}>
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source ={require ('../assets/img/logo1.png')}
        />
      </View>
      <View>
        <Text style={styles.panitiap}>Panitia PMB</Text>
        <Text style={styles.tanggal}>Selasa, 19 November 2020 </Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.gmbr}
      onPress={() => navigation.navigate('Details')}
    >
       <Image
        style={{
          width: '100%',
          height: 210,
          resizeMode: 'cover',
        }}
        source ={require ('../assets/BG/pembukaan.jpg')}
      />
    </TouchableOpacity>

    <View>
    
      <Text style={styles.day}>Upacara Pembukaan
      <Text style={{ 
          color: color.primakara.orange,
          fontWeight:"bold",
          fontSize:15,
          marginLeft:10
          }}>  PMB GEMILANG 2020</Text>
      </Text>
    </View>

    <TouchableOpacity style={styles.Panitia}>
      <View style={styles.logpmb}>
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source ={require ('../assets/img/logo1.png')}
        />
      </View>
      <View>
        <Text style={styles.panitiap}>Panitia PMB</Text>
        <Text style={styles.tanggal}>Rabu, 20 November 2020 </Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.gmbr}
      onPress={() => navigation.navigate('Details')}
    >
       <Image
        style={{
          width: '100%',
          height: 210,
          resizeMode: 'cover',
        }}
        source ={require ('../assets/BG/last.jpg')}
      />
    </TouchableOpacity>

    <View>
    
      <Text style={styles.day}>Penutupan
      <Text style={{ 
          color: color.primakara.orange,
          fontWeight:"bold",
          fontSize:15,
          marginLeft:10
          }}>  PMB GEMILANG 2020</Text>
      </Text>
    </View>

  </View>

);

const styles = StyleSheet.create({
  Panitia: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:10
  },
  logpmb: {
    borderRadius: radius.pills,
    overflow: 'hidden',
    marginRight: 8,
  },
  panitiap: {
    fontSize: ukuran.size.sm,
  },
  tanggal: {
    fontSize: ukuran.size.xs,
    color: color.text.secondary,
  },
  gmbr: {
    overflow: 'hidden',
    marginVertical: 12,
    borderRadius: radius.normal,
  },
  day: {
    flexDirection: 'row',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign:"center",
    fontSize: ukuran.size.sm,
  },


});


export default DaftarDay;
