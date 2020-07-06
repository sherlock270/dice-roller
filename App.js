import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  let [total, setTotal] = useState(0);
  let [trace, setTrace] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.resultsContainer}>
        <View>
          <Text style={styles.sumText}>{total}</Text>
        </View>
        <ScrollView
          style={styles.traceBox}
          onContentSizeChange={this.scrollView.root.scrollToEnd}
        >
          <Text style={styles.traceText}>{trace.join(" + ")}</Text>
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => {
          setTotal(0);
          setTrace([]);
        }}
      >
        <View style={styles.clearButton}>
          <Text style={styles.clearText}>Clear</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={async () => {
            let res = await roll("1d2");
            setTrace([...trace, res]);
            setTotal(total + res);
          }}
        >
          <View style={styles.box}>
            <Text style={styles.boxText}>1d2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            let res = await roll("1d4");
            setTrace([...trace, res]);
            setTotal(total + res);
          }}
        >
          <View style={styles.box}>
            <Text style={styles.boxText}>1d4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            let res = await roll("1d6");
            setTrace([...trace, res]);
            setTotal(total + res);
          }}
        >
          <View style={styles.box}>
            <Text style={styles.boxText}>1d6</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            let res = await roll("1d8");
            setTrace([...trace, res]);
            setTotal(total + res);
          }}
        >
          <View style={styles.box}>
            <Text style={styles.boxText}>1d8</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            let res = await roll("1d10");
            setTrace([...trace, res]);
            setTotal(total + res);
          }}
        >
          <View style={styles.box}>
            <Text style={styles.boxText}>1d10</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            let res = await roll("1d20");
            setTrace([...trace, res]);
            setTotal(total + res);
          }}
        >
          <View style={styles.box}>
            <Text style={styles.boxText}>1d20</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={{
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            textAlignVertical: "center",
          }}
        >
          <Text style={styles.barText}>Rolls</Text>
        </TouchableOpacity>
        <View
          style={{
            height: "100%",
            borderColor: "white",
            borderRightWidth: 1,
          }}
        ></View>
        <TouchableOpacity
          style={{
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.barText}>Calculator</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function roll(roll) {
  let dieRoll = roll.split("d");
  let result = 0;

  if (dieRoll[0] === "") dieRoll[0] = 1;

  for (let i = 0; i < dieRoll[0]; i++) {
    result += Math.round(Math.random() * (dieRoll[1] - 1)) + 1;
  }

  return result;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 1,
  },
  buttonContainer: {
    flex: 3,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 1,
  },
  resultsContainer: {
    flex: 2,
    alignItems: "center",
    marginBottom: 20,
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 1,
  },
  clearButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    textAlignVertical: "center",
    height: 50,
    width: 100,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 1,
  },
  box: {
    // flex: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    textAlignVertical: "center",
    height: 100,
    width: 100,
    borderRadius: 15,
    margin: 5,
  },
  clearText: {
    color: "white",
    textAlign: "center",
  },
  boxText: {
    color: "white",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    marginTop: 40,
  },
  traceBox: {
    width: "80%",
  },
  traceText: {
    fontSize: 15,
  },
  sumText: {
    fontSize: 50,
  },
  tabBar: {
    width: "100%",
    height: "10%",
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  barText: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 20,
  },
});
