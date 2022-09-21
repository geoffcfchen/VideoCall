import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MateralIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>CallingScreen</Text>
        <Text style={styles.phoneNumber}>CallingScreen</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.iconButton}>
          <Ionicons
            name="ios-camera-reverse"
            size={30}
            color={'white'}></Ionicons>
        </View>
        <View style={styles.iconButton}>
          <MateralIcons
            name="camera-off"
            size={30}
            color={'white'}></MateralIcons>
        </View>
        <View style={styles.iconButton}>
          <MateralIcons
            name="microphone-off"
            size={30}
            color={'white'}></MateralIcons>
        </View>
        <View style={[styles.iconButton, {backgroundColor: 'red'}]}>
          <MateralIcons
            name="phone-hangup"
            size={30}
            color={'white'}></MateralIcons>
        </View>
      </View>
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
  buttonsContainer: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 10,
    borderRadius: 50,
  },
});

export default CallingScreen;
