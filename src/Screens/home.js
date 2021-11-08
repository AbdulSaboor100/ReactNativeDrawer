import React, { useContext, useState } from "react";
import { View , Text ,TextInput ,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalContext } from "../context/context";

function Home(){
    const {state , dispatch} = useContext(GlobalContext)
    let [nameInp , setNameInp] = useState('')

    function addName(){
        console.log('khhh',state)
    }

    return(
    
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                 <TextInput
                    style={styles.input}
                    onChangeText={(text)=>{console.log(text)}}
                    value={nameInp}
                    placeholder="Add Here"
                />
                <TouchableOpacity onPress={addName}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
  
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Home;