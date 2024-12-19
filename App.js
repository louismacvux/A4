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
          <MyText style={styles.header}>Minh Long Vu</MyText>
        </View>
        <View style={styles.section}>
          <MyText style={{ fontWeight: "bold" }}>Contact Information</MyText>
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
          <MyText style={{ fontWeight: "bold" }}>Experiences</MyText>
          <View style={styles.title}>
            <MyText>Skip The Dishes</MyText>
            <MyText>Chief Executive Officer - 2018</MyText>
            <MyText>Product Development Manager - 2016</MyText>
          </View>
          <View style={styles.title}>
            <MyText>Sun Microsystem</MyText>
            <MyText>Project Manager - 2015</MyText>
            <MyText>Software Developer - 2010</MyText>
          </View>
        </View>
        <View style={styles.section}>
          <MyText style={{ fontWeight: "bold" }}>Hobbies</MyText>
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
  },
  image: {
    height: 70,
    width: 70,
    marginBottom: 15,
  },
  section: {
    alignSelf: "stretch",
    marginTop: 10,
    width: "100%",
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    backgroundColor: "#f3f3f3",
  },
  title: {
    marginBottom: 8,
    alignSelf: "stretch",
  },
});
