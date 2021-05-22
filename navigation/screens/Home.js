import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';


const Home = (props) => {
  return (
        <View style={styles.container}>
            <View style={styles.row}>
          <Text style={styles.h1}>Landscape <Text style={{color: '#000'}}>Titles</Text></Text>
          <View style={{height: 60}}>
          <ScrollView style={styles.navContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => props.navigation.navigate('AboutMe')} style={styles.navButton}>
              <Text style={styles.navBtnTxt}>About</Text>
            </TouchableOpacity>
          </ScrollView>
          </View>
          <View style={{flex: 1}}>
            <ScrollView style={{paddingBottom: 16}}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Page1')} style={styles.item}>
                    <Image style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}/>
                    <Text style={styles.title}>Title 1</Text>
                    <Text style={styles.description}>Description 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Page2')} style={styles.item}>
                    <Image style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1621238705348-6ef939523bae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'}}/>
                    <Text style={styles.title}>Title 2</Text>
                    <Text style={styles.description}>Description 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Page3')} style={styles.item}>
                    <Image style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1611095788646-86737a001141?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}/>
                    <Text style={styles.title}>Title 3</Text>
                    <Text style={styles.description}>Description 3</Text>
                </TouchableOpacity>
            </ScrollView>
          </View>
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
  },
  contentBorder: {
    backgroundColor: "#fff",
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    flex: 1
  },
  h1: {
    fontWeight: "800",
    fontSize: 24,
    color: "#1364A6"
  },
  navContainer: {
    flexDirection: "row",
  },
  navButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingRight: 20
  },
  navBtnTxt: {
    color: "#1364A6",
    fontWeight: "700",
    fontSize: 16
  },
  title: {
    color: '#071027',
    fontSize: 18, 
    fontWeight: '600',
    marginTop: 8
  },
  description: {
    color: '#000',
    fontSize: 15, 
    fontWeight: '400'
  },
  item: {
    marginBottom: 15
  },
  image: {
    width: '100%',
    height: 220
  }
});


export default Home;