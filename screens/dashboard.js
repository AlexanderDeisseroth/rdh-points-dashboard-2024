import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native'
import { ButtonGroup, Switch } from 'react-native-elements';

function Dashboard(props) {

  const [points, setPoints] = useState(0);
  const [color, setColor] = useState("Red");
  const [robotNum, setRobotNum] = useState(0);

  const [obstacleCounts, setObstacleCounts] = useState({ "Dance Floor": 0, "Door 1": 0, "Door 2": 0, "Stage": 0 });
  const [boogie, setBoogie] = useState(false);
  const [endgameState, setEndgameState] = useState(0);

  const [endgamePoints, setEndgamePoints] = useState(0);
  const [actions, setActions] = useState([]);

  useEffect(() => {

    if (obstacleCounts["Dance Floor"] === 3 && obstacleCounts["Door 1"] === 3 && obstacleCounts["Door 2"] === 3 && obstacleCounts["Stage"] === 3) {
      setBoogie(true);
      setPoints(points + 4)
    } else {
      if (boogie && points != 0) {
        setPoints(points - 4)

      }
      setBoogie(false)
    }
  }, [obstacleCounts])

  useEffect(() => {
    if (endgameState == 0) {
      setEndgamePoints(0);
    } else if (endgameState == 1) {
      setEndgamePoints(5)
    } else if (endgameState == 2) {
      setEndgamePoints(15)
    }
  }, [endgameState])







  return (
    <View style={{ height: "100%", }}>
      <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center", borderWidth: 1 }}>
        <TouchableOpacity style={{ backgroundColor: (color == "Red" ? '#e02926' : "#262ce0"), width: "30%", height: "50%", borderRadius: "20%", justifyContent: "center", alignItems: "center" }} onPress={() => {
          if (color === "Red") {
            setColor("Blue");
          } else {
            setColor("Red");
          }
        }}><Text style={{ fontSize: 20 }}>{color}</Text></TouchableOpacity>
        <ButtonGroup
          buttons={[1, 2, 3]}
          selectedButtonStyle={{ backgroundColor: '#24a2b6', borderBottomColor: '#188191' }}
          onPress={setRobotNum}
          selectedIndex={robotNum}
        >

        </ButtonGroup>
      </View>
      <View style={{ flex: 0.15, borderWidth: 0, justifyContent: "center" }}>
        <Text style={{ alignSelf: "center", borderWidth: 0, fontSize: 30, justifyContent: "center", color: "green" }}>Points: {points + endgamePoints}</Text>
      </View>

      <View style={{ flex: 0.25, borderWidth: 0, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <View style={{ flex: 0.5, flexDirection: "row", borderWidth: 0 }}>
          <TouchableOpacity style={{ backgroundColor: (color == "Red" ? '#e02926' : "#262ce0"), width: "30%", height: "90%", borderRadius: "20%", justifyContent: "center", alignItems: "center", marginHorizontal: "5%" }} onPress={() => {
            setPoints(points + 15);
            setActions([...actions, "Same Color Speaker"])
          }}><Text style={{ fontSize: 20 }}>Same Color Speaker</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: (color == "Blue" ? '#e02926' : "#262ce0"), width: "30%", height: "90%", borderRadius: "20%", justifyContent: "center", alignItems: "center", marginHorizontal: "5%" }} onPress={() => {
            setPoints(points + 5);
            setActions([...actions, "Diff Color Speaker"])

          }}><Text style={{ fontSize: 20 }}>Different Color Speaker</Text></TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, borderWidth: 0, justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ backgroundColor: "#33bd35", borderRadius: "20%", justifyContent: "center", alignItems: "center", marginHorizontal: "5%", height: "90%", width: "30%" }} onPress={() => {
            setPoints(points + 20);
            setActions([...actions, "Playlist"])

          }}><Text style={{ fontSize: 20 }}>Playlist</Text></TouchableOpacity>
        </View>


      </View>
      <View style={{ flex: 0.15, flexDirection: "row", borderWidth: 0, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={{ backgroundColor: (boogie ? "#1bf2e4" : "#c2179d"), borderRadius: "20%", justifyContent: "center", alignItems: "center", marginHorizontal: "2%", height: "60%", width: "20%" }} onPress={() => {
          if (obstacleCounts["Dance Floor"] < 3) {
            setPoints(points + 2);
            setObstacleCounts({ ...obstacleCounts, "Dance Floor": obstacleCounts["Dance Floor"] + 1 });
            setActions([...actions, "Dance Floor"])

          }
        }}><Text style={{ fontSize: 20 }}>Dance Floor</Text><Text>{boogie ? "Boogie!" : obstacleCounts["Dance Floor"]}</Text></TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: boogie ? "#1bf2e4" : "#c2179d", borderRadius: "20%", justifyContent: "center", alignItems: "center", marginHorizontal: "2%", height: "60%", width: "20%" }} onPress={() => {
          if (obstacleCounts["Door 1"] < 3) {

            setPoints(points + 2);
            setObstacleCounts({ ...obstacleCounts, "Door 1": obstacleCounts["Door 1"] + 1 });
            setActions([...actions, "Door 1"])

          }
        }}><Text style={{ fontSize: 20 }}>Door 1</Text><Text>{boogie ? "Boogie!" : obstacleCounts["Door 1"]}</Text></TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: boogie ? "#1bf2e4" : "#c2179d", borderRadius: "20%", justifyContent: "center", alignItems: "center", marginHorizontal: "2%", height: "60%", width: "20%" }} onPress={() => {
          if (obstacleCounts["Door 2"] < 3) {

            setPoints(points + 2);
            setObstacleCounts({ ...obstacleCounts, "Door 2": obstacleCounts["Door 2"] + 1 });
            setActions([...actions, "Door 2"])

          }
        }}><Text style={{ fontSize: 20 }}>Door 2</Text><Text>{boogie ? "Boogie!" : obstacleCounts["Door 2"]}</Text></TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: boogie ? "#1bf2e4" : "#c2179d", borderRadius: "20%", justifyContent: "center", alignItems: "center", marginHorizontal: "2%", height: "60%", width: "20%" }} onPress={() => {
          if (obstacleCounts["Stage"] < 3) {

            setPoints(points + 2);
            setObstacleCounts({ ...obstacleCounts, "Stage": obstacleCounts["Stage"] + 1 });
            setActions([...actions, "Stage"])

          }
        }}><Text style={{ fontSize: 20 }}>Stage</Text><Text>{boogie ? "Boogie!" : obstacleCounts["Stage"]}</Text></TouchableOpacity>
      </View>

      <View style={{ flex: 0.25 }}>
        <ButtonGroup
          buttons={["N/A", "Park", "Pose"]}
          selectedButtonStyle={{ backgroundColor: '#24a2b6', borderBottomColor: '#188191' }}
          onPress={setEndgameState}
          selectedIndex={endgameState}


        >
        </ButtonGroup>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "2.5%" }}>
          <TouchableOpacity style={{ backgroundColor: "#c78324", borderRadius: "20%", justifyContent: "center", alignItems: "center", marginHorizontal: "5%", height: "90%", width: "30%" }} onPress={() => {
            switch (actions[actions.length - 1]) {
              case "Same Color Speaker":
                setPoints(points - 15);
                break;
              case "Diff Color Speaker":
                setPoints(points - 5);
                break;

              case "Playlist":
                setPoints(points - 20);
                break;

              case "Dance Floor":
                setPoints(points - 2);
                setObstacleCounts({ ...obstacleCounts, "Dance Floor": obstacleCounts["Dance Floor"] - 1 });
                break;

              case "Door 1":
                setPoints(points - 2);
                setObstacleCounts({ ...obstacleCounts, "Door 1": obstacleCounts["Door 1"] - 1 });
                break;

              case "Door 2":
                setPoints(points - 2);
                setObstacleCounts({ ...obstacleCounts, "Door 2": obstacleCounts["Door 2"] - 1 });
                break;

              case "Stage":
                setPoints(points - 2);
                setObstacleCounts({ ...obstacleCounts, "Stage": obstacleCounts["Stage"] - 1 });
                break;


            }
            setActions(actions.slice(0, -1))
          }}><Text style={{ fontSize: 20 }}>Undo</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "#f2a435", borderRadius: "20%", justifyContent: "center", alignItems: "center", marginHorizontal: "5%", height: "90%", width: "30%" }} onPress={() => {
            setActions([]);
            setObstacleCounts({ "Dance Floor": 0, "Door 1": 0, "Door 2": 0, "Stage": 0 })
            setEndgameState(0);
            setPoints(0);

          }}><Text style={{ fontSize: 20 }}>Reset</Text></TouchableOpacity>
        </View>

      </View>


    </View>
  )
}


export default Dashboard;