import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Asset } from "expo-asset";
import MyText from "./components/MyText";
import { useState } from "react";

export default function App() {
  const [hobbies, setHobbies] = useState(["Coding", "Reading", "Photography"]);

  function renderHobbies() {
    return (
      <View style={{ paddingLeft: 10 }}>
        {hobbies.map((hobby) => (
          <MyText key={hobby}>{hobby}!</MyText>
        ))}
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.profile}>
          <Image
            source={Asset.fromModule(require("./assets/bussiness-man.png"))}
            style={styles.image}
          ></Image>
          <Text style={styles.header}>Minh Long Vu</Text>
        </View>
        <View style={styles.section}>
          <MyText>Contact Information</MyText>
          <MyText>
            <MyText style={{ fontWeight: "bold" }}>Email: </MyText>
            <MyText>vu-m66@webmail.uwinnipeg.ca</MyText>
          </MyText>
          <MyText>
            <MyText style={{ fontWeight: "bold" }}>Phone: </MyText>
            <MyText>(123) 456 7890</MyText>
          </MyText>
        </View>
        <View style={styles.section}>
          <MyText>Hobbies</MyText>
          {renderHobbies()}
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  profile: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    height: 70,
    width: 70,
    marginBottom: 15,
  },
  section: {
    alignSelf: "stretch",
  },
  inputView: {},
  input: {
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 5,
    padding: 4,
    borderRadius: 5,
    width: "100%",
  },
  box: {
    borderColor: "green",
    backgroundColor: "green",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
  },
});
