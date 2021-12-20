import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import ImagePickerExample from "../../components/image-picker/image-picker";
import CnicPick1 from "../../components/cnic/cnic-pic1";
import CnicPick2 from "../../components/cnic/cnic-pic2";
import { GlobalContext } from "../../context/context";
import {
  db,
  doc,
  setDoc,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../../configs/firebase";
import * as Location from "expo-location";
import LogoKhanaSabkliye from "../../images/LogoKhanaSabkliye.png";
import { EvilIcons } from "@expo/vector-icons";
import { DatePickerFunc } from "../../components/date-picker/date-picker";


const MainHome = ({ navigation }) => {
  let { state, dispatch } = useContext(GlobalContext);
  let [nearState, setNearState] = useState(false);
  let [name, setName] = useState("");
  let [fatherName, setFatherName] = useState("");
  let [cnic, setCnic] = useState("");
  let [dateOfBirth, setDateOfBirth] = useState(state.currentDatePicker);
  let [familyMembers, setFamilyMembers] = useState("");
  let [monthlyIncome, setMonthlyIncome] = useState("");
  let [MonthlyRation, setMonthlyRation] = useState("");
  let [error, setError] = useState(false);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
      dispatch({ type: "LATITUDE", payload: latitude });
      dispatch({ type: "LONGITUDE", payload: longitude });
    } catch (error) {
      console.log(error);
    }
    console.log("hello");
  };

  useEffect(() => {
    getLocation();
    console.log(state);
  }, []);

  useEffect(() => {
    if (state.nearestOne) {
        dispatch({type : "TYPE" , payload : true})
    }
  }, [state.nearestOne]);

  const submitFormFunc = async () => {
    let mathRandom = Math.floor(Math.random() * 1000000000);
    try {
      if (
        (name != "",
        fatherName != "",
        cnic != "",
        dateOfBirth != "",
        familyMembers != "",
        monthlyIncome != "",
        MonthlyRation != "")
      ) {
        let storageRef1 = ref(storage, `${state.activeUser.uid}/${mathRandom}`);
        await uploadBytes(storageRef1, state.applicantPic);
        let URL1 = await getDownloadURL(
          ref(storage, `${state.activeUser.uid}/${mathRandom}`)
        );

        let storageRef2 = ref(storage, `${state.activeUser.uid}/${mathRandom}`);
        await uploadBytes(storageRef2, state.cnicFrontPic);
        let URL2 = await getDownloadURL(
          ref(storage, `${state.activeUser.uid}/${mathRandom}`)
        );

        let storageRef3 = ref(storage, `${state.activeUser.uid}/${mathRandom}`);
        await uploadBytes(storageRef3, state.cnicBackPic);
        let URL3 = await getDownloadURL(
          ref(storage, `${state.activeUser.uid}/${mathRandom}`)
        );
        let dataRef = doc(db, "publcApplicaitons", state.activeUser.uid);

        let detailsObj = {
          name,
          fatherName,
          cnic,
          dateOfBirth,
          familyMembers,
          monthlyIncome,
          MonthlyRation,
          URL1,
          URL2,
          URL3,
          uid: state.activeUser.uid,
          createdAt: new Date(),
          nearestOne: state.nearestOne,
        };
        await setDoc(dataRef, detailsObj);
        navigation.navigate("Approved");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function setLocationFunc() {
    navigation.navigate("Locations");
  }

  return (
    <ScrollView>
      {/* {
                nearState === true ? (
                   Alert.alert('Location Info' , 'Your location has been set')
                ) : (
                    Alert.alert('Location Info' , 'Your location has Not set')
                )
            } */}
      {error === true
        ? Alert.alert("Message", "Please Fill All The Fields")
        : null}
      <View style={styles.container}>
        <View style={styles.view3}>
          <Image source={LogoKhanaSabkliye} style={styles.img} />
        </View>
        <View style={styles.view1}>
          <TextInput
            onChangeText={(e) => {
              setName(e);
            }}
            style={styles.input}
            placeholder="Enter name"
            value={name}
          />
        </View>
        <View style={styles.view2}>
          <TextInput
            value={fatherName}
            onChangeText={(e) => {
              setFatherName(e);
            }}
            style={styles.input}
            placeholder="Enter father name"
          />
        </View>
        <View style={styles.view4}>
          <TextInput
            value={cnic}
            onChangeText={(e) => {
              setCnic(e);
            }}
            style={styles.input}
            placeholder="Enter cnic number"
          />
        </View>
        
        <View style={styles.view2}>
          <TextInput
            value={familyMembers}
            onChangeText={(e) => {
              setFamilyMembers(e);
            }}
            style={styles.input}
            placeholder="Enter family members"
          />
        </View>
        <View style={styles.view2}>
          <TextInput
            style={styles.input}
            value={monthlyIncome}
            onChangeText={(e) => {
              setMonthlyIncome(e);
            }}
            placeholder="Enter Monthly Income"
          />
        </View>
        <View style={styles.view2}>
          <TextInput
            value={MonthlyRation}
            onChangeText={(e) => {
              setMonthlyRation(e);
            }}
            style={styles.input}
            placeholder="Enter Monthly ration"
          />
        </View>
        <View style={styles.comp1 }>
            <DatePickerFunc />
        </View>
        <View style={styles.comp1}>
          <ImagePickerExample />
        </View>
        <View style={styles.comp2}>
          <CnicPick1 />
        </View>
        <View style={styles.comp3}>
          <CnicPick2 />
        </View>
        <View style={styles.parentBtn}>
          <View style={styles.btnDiv1}>
            <EvilIcons
              onPress={setLocationFunc}
              name="location"
              size={24}
              color="black"
            >
              
            </EvilIcons>
            <Text style={{ fontSize: 17, color: "black", marginLeft :10 ,fontWeight:'900'}} >Set Location</Text>
          </View>

          <View style={styles.btnDiv2}>
            <TouchableOpacity style={styles.touchBtn} onPress={submitFormFunc}>
              <Text style={{ color: "white" , fontSize : 20 }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view3: {
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingLeft: 62.2,
    paddingRight: 62.2,
  },
  view2: {
    backgroundColor: "#ffffff",
  },
  view1: {
    backgroundColor: "#ffffff",
  },
  view4: {
    backgroundColor: "#ffffff",
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "rgb(195, 195, 195)",
    padding: 10,
    borderRadius: 5,
  },

  img: {
    width: 150,
    height: 100,
  },

  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnDiv1: {
      
    width: 274,
    height: 50,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection:'row',
    backgroundColor: "#ffffff",
  },
  btnDiv2: {
    // display : 'flex',
    backgroundColor: "#ffffff",
    // justifyContent :'center',
    // alignItems: 'center',
    marginBottom:30,
    // width: "100%",
    padding:6,
    paddingBottom :10,
    paddingTop : 20
  },
  comp1: {
    width: 274,
    height: 50,
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
  },
  comp2: {
    width: 274,
    height: 50,
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
  },
  comp3: {
    width: 274,
    height: 50,
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
  },

  touchBtn: {
    color: "white",
    backgroundColor :'green',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
    width:200,
    height:30,
    marginLeft:30
  },
});

export default MainHome;
