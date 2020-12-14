import React, { useState } from 'react';
import { 
    View,
    StyleSheet,
    Text,

 } from 'react-native';

 const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
 }

 const styles = StyleSheet.create({
     header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
     },
     title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 8
     }
 });

 export default Header;