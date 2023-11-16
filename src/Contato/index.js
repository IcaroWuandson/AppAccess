import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import ImageContato from "../Images/ImageContato.png";
import logo from "../Images/logo.png";
import logoWhats from "../Images/whatsapp-logo.png";

export default function SemBoleto() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer1}>
        <Image source={logo} style={styles.image} />
      </View>

      <Image source={ImageContato} style={styles.imagePrincipal} />
      <Text style={styles.text}>FATURAS VENCIDAS </Text>
      <Text style={styles.text2}>Encontramos algumas faturas vencidas no seu cadastro. Por favor, entrem em contato por WhatsApp com o nosso setor financeiro para negociar seu débito e volte a navegar na internet.</Text>
      <Text style={styles.text3}>
        <Image source={logoWhats} style={styles.imageWhatts} /> 86 99820-7292
      </Text>
    </View>
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
    justifyContent: "center",
  },
  imageContainer2: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  imageWhatts: {
    width: 50,
    height: 50,
  },
  image: {
    width: 350,
    height: 150,
    marginBottom: 10,
    marginRight: 20
  },
  imagePrincipal: {
    width: 250,
    height: 250,
    marginBottom: 15
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: 'red'
  },
  text2: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    textAlign: "justify",
  },
  text3: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 60,
    textAlign: "center",

  },
})
