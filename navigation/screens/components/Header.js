import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Menu, Divider, Provider } from 'react-native-paper';
import  Icon from "react-native-vector-icons/Feather";


const Header = (props) => {
    const [showMenu, setShowMenu] = React.useState(false);
  
    return (
      <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.bt}>
          <Icon name="arrow-left" color="black" size={25}/>
      </TouchableOpacity>
     {props.title && <Text style={styles.title}>{props.title}</Text>} 
    <Menu
          visible={showMenu}
          onDismiss={() => setShowMenu(false)}
          anchor={
            <TouchableOpacity style={styles.bt} onPress={() => setShowMenu(true)}>
            <Icon name="align-justify" color="black" size={25}/>
            </TouchableOpacity>
          }>
          <Menu.Item 
          style={styles.menuitem1}
          onPress={() => {setShowMenu(false); props.navigation.navigate('Home');}} title="Home" />
           <Menu.Item
          style={styles.menuitem1}
          onPress={() =>  {setShowMenu(false); props.navigation.navigate('AboutMe')}} title="About" />
          <Menu.Item 
          style={styles.menuitem1}
          onPress={() => {setShowMenu(false); props.navigation.navigate('Page1')}} title="Title 1" />
          <Menu.Item
          style={styles.menuitem1}
          onPress={() => {setShowMenu(false); props.navigation.navigate('Page2')}} title="Title 2" />
           <Menu.Item
          style={styles.menuitem1}
          onPress={() => {setShowMenu(false); props.navigation.navigate('Page3')}} title="Title 3" />
          </Menu>
      </View>
    );
  };

export default Header;


const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    bt: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50
    },
    title: {
        fontWeight: "500",
        fontSize: 18,
        color: "#1364A6"
    }
  });
  