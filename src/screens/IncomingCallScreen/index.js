import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import bg from '../../../assets/images/ios_bg.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Voximplant} from 'react-native-voximplant';

const IncomingCallScreen = () => {
  const [caller, setCaller] = useState('');
  const route = useRoute();
  const navigation = useNavigation();

  const {call} = route.params;

  useEffect(() => {
    setCaller(call.getEndpoints()[0].displayName);

    call.on(Voximplant.CallEvents.Disconnected, callEvent => {
      navigation.navigate('Contacts');
    });

    return () => {
      call.off(Voximplant.CallEvents.Disconnected);
    };
  }, [call]);

  const onDecline = () => {
    call.decline();
  };

  const onAccept = () => {
    navigation.navigate('Calling', {
      caller,
      call,
      isIncomingCall: true,
    });
  };

  return (
    <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
      <Text style={styles.name}>{caller}</Text>
      <Text style={styles.phoneNumber}>Ringing +31 343 3434 3434</Text>

      <View style={[styles.row, {marginTop: 'auto'}]}>
        <View style={styles.iconsContainer}>
          <Ionicons name="alarm" color="white" size={30}></Ionicons>
          <Text style={styles.iconsText}>Remind me</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Feather name="message-circle" color="white" size={30}></Feather>
          <Text style={styles.iconsText}>Messages</Text>
        </View>
      </View>
      <View style={styles.row}>
        {/* Decline Button */}

        <Pressable onPress={onDecline} style={styles.iconsContainer}>
          <View style={styles.iconsButtonContainer}>
            <Feather name="x" color="white" size={40}></Feather>
          </View>
          <Text style={styles.iconsText}>Decline</Text>
        </Pressable>

        {/* Accept Button */}
        <Pressable onPress={onAccept} style={styles.iconsContainer}>
          <View
            style={[styles.iconsButtonContainer, {backgroundColor: '#1647EC'}]}>
            <Feather name="check" color="white" size={40}></Feather>
          </View>
          <Text style={styles.iconsText}>Accept</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  bg: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    paddingBottom: 50,
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconsText: {
    color: 'white',
    marginTop: 10,
  },
  iconsButtonContainer: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 40,
    margin: 10,
  },
});

export default IncomingCallScreen;
