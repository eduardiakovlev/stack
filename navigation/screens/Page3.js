import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground} from 'react-native';
import Header from './components/Header';

const Page3 = (props) => {
  return (
        <View style={styles.container}>
            <View style={styles.row}>
            <Header navigation={props.navigation} title={'Title 3'}/>
            <ImageBackground style={{flex: 1, resizeMode: "cover", justifyContent: "center"}} 
                  source={{uri: 'https://images.unsplash.com/photo-1611095788646-86737a001141?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}/>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#1364A6',
      },
    row: {
        marginHorizontal: 16,
        padding: 16,
        flex: 1,
        backgroundColor: '#fff'
    }
});


export default Page3;