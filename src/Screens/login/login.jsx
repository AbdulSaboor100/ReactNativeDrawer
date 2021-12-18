import React, { useContext, useState } from 'react';
import { View , Text , StyleSheet ,TextInput , TouchableOpacity} from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const MainLogin = () => {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
      });
    let [email , setEmail] = useState('');
    let [password , setPassword] = useState('');
    function loginFunc(){
        console.log({email , password})
    }
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(e)=>{setEmail(e)}}  />
            </View>
            <View style={styles.view2}>
                <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={(e)=>{setPassword(e)}}  />
            </View>
            <View style={styles.btnDiv}>
                <TouchableOpacity style={styles.touchableBtn} onPress={loginFunc}><Text style={{color:"white"}}>Log in</Text></TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    view1 : {
        paddingTop : 10,
        backgroundColor : 'white',
        paddingLeft: 10,
        paddingRight:10,
        borderTopEndRadius:10,
        paddingBottom: 10,
        borderTopStartRadius:10,
    },
    view2 : {
        backgroundColor : 'white',
        paddingLeft: 10,
        paddingRight:10,
        // paddingTop:10,
        // paddingBottom:10,
    },

    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor : 'rgb(195, 195, 195)',
      padding: 10,
      borderRadius : '5px',

    //   backgroundColor : '#ffffff'
    },
    container :{
        flex:1,
        justifyContent : "center",
        alignItems : 'center',
        fontFamily : 'Inter_400Black',
        width : '100%',
        height : '100%',
        backgroundColor: "#dedfe0", 
    },
    btnDiv : {
        // paddingTop:9,
        paddingLeft: 21,
        paddingRight : 21,
        paddingBottom : 25,
        backgroundColor : 'white',
        borderBottomEndRadius: 10,
        borderBottomStartRadius :10,
    },
    touchableBtn: {
        // height: '3rem',
        // width : '10rem'
        paddingTop: 10,
        paddingBottom : 10,
        paddingLeft : 90,
        backgroundColor : 'black',

        paddingRight: 90,
    }
  });

export default MainLogin;
