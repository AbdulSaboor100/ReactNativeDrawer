import React, { useState } from 'react';
import { View , Text , StyleSheet ,TextInput , TouchableOpacity} from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { auth , createUserWithEmailAndPassword ,db ,setDoc, doc } from '../../configs/firebase';

const SignUpPublic = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
      });
    let [email , setEmail] = useState('');
    let [password , setPassword] = useState('');
    let [age , setAge] = useState('');
    let [name , setName] = useState('');
    async function signUpFunc(){
        try {
            let {user} = await createUserWithEmailAndPassword(auth, email , password)
            if(user){
                let userObj = {
                    name,
                    age,
                    email : user.email,
                    uid : user.uid,
                    createdat : user.uid,
                    role : "public"

                }
                let dataRef = doc(db , "users" , user.uid)
                let savedData = await setDoc(dataRef, userObj) 
                navigation.navigate("home")

            }
        } catch (error) {
            console.log("error : " , error)
        }
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(e)=>{setEmail(e)}}  />
            </View>
            <View style={styles.view2}>
                <TextInput placeholder="name" style={styles.input} value={name} onChangeText={(e)=>{setName(e)}}  />
            </View>
            <View style={styles.view3}>
                <TextInput placeholder="age" style={styles.input} value={age} onChangeText={(e)=>{setAge(e)}}  />
            </View>
            <View style={styles.view4}>
                <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} value={password} onChangeText={(e)=>{setPassword(e)}}  />
            </View>
            <View style={styles.btnDiv}>
                <TouchableOpacity style={styles.touchableBtn} onPress={signUpFunc}><Text style={{color:"white"}}>Sign in</Text></TouchableOpacity>
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
        paddingBottom:10,
        borderTopStartRadius:10,
    },
    view2 : {
        paddingTop : 10,
        backgroundColor : 'white',
        paddingLeft: 10,
        paddingRight:10,
        paddingBottom:10,
    },
    view3 : {
        paddingTop : 10,
        backgroundColor : 'white',
        paddingLeft: 10,
        paddingRight:10,
        paddingBottom:10,
    },
    view4 : {
        // paddingTop : 5,
        backgroundColor : 'white',
        paddingLeft: 10,
        paddingRight:10,
        paddingBottom:20,
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
        // marginTop : 10,
        paddingTop : 10,
        paddingLeft: 19,
        paddingRight : 19,
        paddingBottom : 10,
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

export default SignUpPublic;
