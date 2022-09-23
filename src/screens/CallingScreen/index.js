import {
  View,
  Text,
  StyleSheet,
  Pressable,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import CallActionBox from '../../components/CallActionBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';

const permissions = [
  PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  PermissionsAndroid.PERMISSIONS.CAMERA,
];

const CallingScreen = () => {
  const [permisionGranted, setPermisionGranted] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const user = route?.params?.user;

  const goBack = () => {
    navigation.pop();
  };

  useEffect(() => {
    const getPermission = async () => {
      const granted = await PermissionsAndroid.requestMultiple(permissions);
      const recordAudioGranted =
        granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted';
      const cameraGranted =
        granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted';
      if (!cameraGranted || !recordAudioGranted) {
        Alert.alert('Permissions not granted');
      } else {
        setPermissionGranted(true);
      }
    };
    if (Platform.OS === 'android') {
      getPermission();
    } else {
      setPermisionGranted(true);
    }
  }, []);

  return (
    <View style={styles.page}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <Ionicons name="chevron-back" color="white" size={25}></Ionicons>
      </Pressable>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>{user?.user_display_name}</Text>
        <Text style={styles.phoneNumber}>CallingScreen</Text>
      </View>
      <CallActionBox></CallActionBox>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#7b4e80',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 25,
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 10,
  },
});

export default CallingScreen;
