import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
 
} from 'react-native';
import Constants from 'expo-constants';
import DaftarDay from '../../components/DaftarDay';
import Template from '../../tempcol/Template';

const { color, ukuran } = Template();


const HomeScreen = ({ navigation }) => (
  <View style={styles.homeatas}>
    <View style={{
      padding: 20,
 
   }}>
      <View>

        <Text style={{
          color: color.common.black,
          fontWeight: 'bold',
          fontSize: ukuran.size.md,
          textAlign:"center",

        }}
        >
          Absensi PMB Gemilang
        </Text>
      </View>
 
    </View>
    <ScrollView style={{ paddingHorizontal: 24 }}>
    
        <DaftarDay navigation={navigation} />
      
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  homeatas: {
    flex: 1,
    backgroundColor: color.primakara.white,
    paddingTop: Constants.statusBarHeight,
  }
});
export default HomeScreen;
