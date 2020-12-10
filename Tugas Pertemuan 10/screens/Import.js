import TabUtamaScreen from './TabUtama';
import LoginScreen from './Login';
import SignupScreen from './Signup';
import DetailsScreen from './Details';
import BerandaScreen from './Menu/Beranda';
import FormAbsenScreen from './FormAbsen';


module.exports = [
  {
    name: 'TabUtama',
    component: TabUtamaScreen,
    options: { headerShown: false },
  },
  {
    name: 'Login',
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: 'Signup',
    component: SignupScreen,
    options: { headerShown: false },
  },
  {
    name: 'Beranda',
    component: BerandaScreen,
    options: { headerShown: false },
  },
  {
    name: 'FormAbsen',
    component: FormAbsenScreen,
    options: { headerShown: false },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: { headerShown: false },
  },
];
