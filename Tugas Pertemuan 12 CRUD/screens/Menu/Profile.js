import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Template from '../../tempcol/Template';
import img from '../../assets/img/primakara_login.png';

const { color, radius, ukuran } = Template();

const ProfileScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={{ position: 'relative' }}>
      <Image
        style={styles.logpmb}
        source={img}/>

    </View>
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: 58, paddingHorizontal: 24 }}>
        <Text style={styles.text1}>PANITIA PMB 2020</Text>
        <Text style={styles.tagline}>Colaborate to elevate.</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
        style={styles.btnhm}>
      
          <Text style={styles.out}>Log Out</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.common.white,
  },
  logpmb: {
    width: '100%',
    height: 350,
    marginTop:30,
    resizeMode: 'cover',
  },

  text1: {
    fontSize: ukuran.size.md,
    fontWeight: 'bold',
  },
  tagline: {
    marginTop: 4,
    color: color.text.secondary,
  },
  btnhm: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: color.primary.main,
    borderRadius: radius.pills,
    flexDirection: 'row',
    alignItems: 'center',
  },
  out: {
    marginLeft: 4,
    color: color.common.white,
  }
});

export default ProfileScreen;
