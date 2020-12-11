import {Navigation} from 'react-native-navigation';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button

} from 'react-native';

// Home screen declaration
const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>
      <Button
        title='Push Settings Screen'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Settings',
          }
        })}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      // color: 'white'
    },
    // background: {
    //   color: '#4d089a'
    // }
  },
  bottomTab: {
    text: 'Home'
  }
};

Navigation.registerComponent('Home', () => HomeScreen);