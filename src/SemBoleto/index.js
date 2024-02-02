import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageBoleto from "../Images/ImageBoleto.png";
import chat from "../Images/chat.png";
import { Ionicons } from "@expo/vector-icons";
import "react-native-gesture-handler";

export default function SemBoleto({ navigation }) {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          margin: 10,
          fontSize: 40,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Ionicons name="chevron-back" size={18} color="black" />
        <Text> Voltar</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer1}>
        <View style={styles.contetButtons}>
          <TouchableOpacity
            style={styles.buttonsOptions}
            onPress={() => navigation.navigate("Chat")}
          >
            <Image source={chat} style={styles.imageButtom} />
            <Text style={{ margin: 10 }}>Fale Conosco</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer3}>
        <Image source={ImageBoleto} style={styles.imagePrincipal} />
      </View>
      <Text style={styles.text}>
        Este contrato não possui boletos em aberto!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer1: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 30,
  },
  imageContainer3: {
    alignItems: "center",
    justifyContent: "center",
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
