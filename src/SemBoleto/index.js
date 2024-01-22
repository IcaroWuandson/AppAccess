import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageBoleto from "../Images/ImageBoleto.png";
import chat from "../Images/chat.png";
import chamado from "../Images/chamado.png";

import "react-native-gesture-handler";
export default function SemBoleto({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer1}>
        <View style={styles.contetButtons}>
          <TouchableOpacity
            style={styles.buttonsOptions}
            onPress={() => navigation.navigate("Chat")}
          >
            <Image source={chat} style={styles.imageButtom} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsOptions}>
            <Image source={chamado} style={styles.imageButtom} />
          </TouchableOpacity>
        </View>
      </View>

      <Image source={ImageBoleto} style={styles.imagePrincipal} />
      <Text style={styles.text}>Você não tem boleto vencido!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer1: {
    alignItems: "center",
    padding: 20,
    margin: 30,
  },
  contetButtons: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 10,
    gap: 30,
  },
  buttonsOptions: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#DCF2F1",
    borderRadius: 20,
    padding: 10,
  },
  imageContainer2: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 10,
  },
  imagePrincipal: {
    width: 250,
    height: 250,
    marginBottom: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
});
