import {Navigation} from 'react-native-navigation';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,

} from 'react-native';

// Settings screen declaration - this is the screen we'll be pushing into the stack
const SettingsScreen = ({ name, status }) => {
    return (
      <View style={styles.root}>
        <Text>Settings Screen</Text>
        <Text>name: {name}</Text>
        <Text>Status: {status}</Text>
      </View>
    );
}
  
Navigation.registerComponent('Settings', () => SettingsScreen);

const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'whitesmoke'
    }
});

