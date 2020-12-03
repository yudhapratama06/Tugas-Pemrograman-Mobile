import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import Constants from 'expo-constants';
import Template from '../tempcol/Template';

const { color, ukuran, radius } = Template();

const SignupScreen = ({ navigation }) => {
  const [Frist_Name, setFrist_Name] = React.useState('');
  const [Last_Name, setLast_Name] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');

  const AuthSignup = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZ_rU8qerNhuK--Xybrj9wjPuW2aN9EM8", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    const resData = await response.json()
    if (response.ok){
      await navigation.navigate('Login')
  } else {
      Alert.alert ('ERROR!!!', resData.error.message, [{
          text: 'Ok'
      }])
  }
  }
    
  return (
    <ScrollView style={styles.allpage}>
      <View style={{
        padding: 24,
        paddingTop: Constants.statusBarHeight,
      }}
      >
        <View style={styles.imglog}>
        <Image
      source ={require ('../assets/img/primakara_bar.png')}
      style= {{width:"110%", height:300, marginTop:30}}               
      />
        </View>
        <View style={{ marginTop: 32, marginBottom: 16 }}>
          <Text style={styles.judul}>Create Akun</Text>
        </View>

        <View>
          <View style={{flexDirection: 'row',}}>
        <TextInput 
            value={Frist_Name}
            onChangeText={(text) => setFrist_Name(text)}
            type="text"
            placeholder="Frist Name"
            style={[styles.inputdata1, { marginBottom: 8 }]}
          />
          <TextInput
            value={Last_Name}
            onChangeText={(text) => setLast_Name(text)}
            type="text"
            placeholder="Last Name"
            style={[styles.inputdata1, { marginBottom: 8, marginLeft:10 }]}
          />
          </View>
        <TextInput
            value={email}
            onChangeText= {(text) => {setEmail(text)}}
            type="text"
            placeholder="Email"
            keyboardType="email-address"
            style={[styles.inputdata, { marginBottom: 8 }]}
 
          />
          <TextInput
            secureTextEntry
            value={password}
            onChangeText= {(text) => {setPassword(text)}}
            textContentType="password"
            placeholder="Password"
            style={[styles.inputdata, { marginBottom: 8 }]}

          />
          <TextInput
            secureTextEntry
            value={confirmPass}
            onChangeText= {(text) => {setConfirmPass(text)}}
            textContentType="password"
            placeholder="Confirm Password"
            style={[styles.inputdata, { marginBottom: 8 }]}

          />
        </View>

        <TouchableOpacity
            style={styles.buttonup}
            onPress={AuthSignup}
          >
            <Text style={{ 
              color: color.common.white,
              fontWeight:"bold",
               }}>Login</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    fontWeight: 'bold',
    textAlign:"center",
    fontSize: ukuran.size.xl,
  },
  inputdata: {
    borderColor: color.primakara.orange,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'Roboto',
    borderRadius: radius.normal,
  },
  inputdata1: {
    borderColor: color.primakara.orange,
    borderWidth: 2,
    paddingHorizontal: 16,
    width:182,
    paddingVertical: 8,
    fontFamily: 'Roboto',
    borderRadius: radius.normal,
  },
  buttonup: {
    marginTop:20,
    backgroundColor: color.primakara.birutua,
    borderRadius: radius.pills,
    padding: 16,
    alignItems: 'center',
  },
});

export default SignupScreen;
