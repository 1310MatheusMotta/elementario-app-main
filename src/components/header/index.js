import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
          <View style={styles.logo_cx}>
            <Image style={styles.logo_icon}
             source={require("../../img/atomo.png")} />
            <Text style={styles.logo_text}>Elementari-o</Text>
          </View>
  );
}
const styles = StyleSheet.create({
    logo_cx:{
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    logo_icon:{
        width: 80,
        height: 80
    },

    logo_text:{
        color: "#0B699E",
        fontSize: 35,
        marginRight: 30
    }
});