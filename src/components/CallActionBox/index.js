import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MateralIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallActionBox = () => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const onReverseCamera = () => {
    console.warn('onReverseCamera');
  };

  const onToggleCamera = () => {
    setIsCameraOn(currentValue => !currentValue);
  };

  const onToggleMicrophone = () => {
    setIsMicOn(currentValue => !currentValue);
  };

  const onHangUp = () => {};
  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Ionicons
          name="ios-camera-reverse"
          size={30}
          color={'white'}></Ionicons>
      </Pressable>
      <Pressable onPress={onToggleCamera} style={styles.iconButton}>
        <MateralIcons
          name={isCameraOn ? 'camera-off' : 'camera'}
          size={30}
          color={'white'}></MateralIcons>
      </Pressable>
      <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <MateralIcons
          name={isMicOn ? 'microphone-off' : 'microphone'}
          size={30}
          color={'white'}></MateralIcons>
      </Pressable>
      <Pressable
        onPress={onHangUp}
        style={[styles.iconButton, {backgroundColor: 'red'}]}>
        <MateralIcons
          name="phone-hangup"
          size={30}
          color={'white'}></MateralIcons>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 10,
    borderRadius: 50,
  },
});

export default CallActionBox;
