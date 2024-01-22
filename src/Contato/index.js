import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Importe o SafeAreaView
import "react-native-gesture-handler";
import ImageContato from "../Images/ImageContato.png";
import chat from "../Images/chat.png";
import chamado from "../Images/chamado.png";

import logoWhats from "../Images/whatsapp-logo.png";

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

      <Image source={ImageContato} style={styles.imagePrincipal} />
      <Text style={styles.text}>FATURAS VENCIDAS </Text>
      <Text style={styles.text2}>
        Encontramos algumas faturas vencidas no seu cadastro. Por favor, entre
        em contato por WhatsApp com o nosso setor financeiro para negociar seu
        débito e volte a navegar na internet.
      </Text>
      <Text style={styles.text3}>
        <Image source={logoWhats} style={styles.imageWhatts} /> 86 99820-7292
      </Text>
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
  imageWhatts: {
    width: 50,
    height: 50,
  },
  image: {
    width: 350,
    height: 150,
    marginBottom: 10,
    marginRight: 20,
  },
  imagePrincipal: {
    width: 250,
    height: 250,
    marginBottom: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "red",
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
});
