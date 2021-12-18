import React, { useContext, useState } from 'react';
import { View , Text , StyleSheet ,TextInput , Image , TouchableOpacity} from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { auth  ,signInWithEmailAndPassword} from '../../configs/firebase';
import LogoKhanaSabkliye from '../../images/LogoKhanaSabkliye.png';
import { Entypo } from '@expo/vector-icons'; 

const MainLogin = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
      });
    let [email , setEmail] = useState('');
    let [password , setPassword] = useState('');
    async function loginFunc(){
        try {
            let {user} = await signInWithEmailAndPassword(auth,email ,password)
            if(user){
                navigation.navigate("home")
            }
        } catch (error) {
            console.log("error : " , error)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.view3}>
                <Image source={LogoKhanaSabkliye} style={styles.img} />
            </View>
            <View style={styles.view1}>
                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(e)=>{setEmail(e)}}  />
            </View>
            <View style={styles.view2}>
                <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} value={password} onChangeText={(e)=>{setPassword(e)}}  />
            </View>
        <View style={styles.btnDiv}>
        <TouchableOpacity onPress={loginFunc}><Entypo name="login" size={70} color="green" /></TouchableOpacity>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    view3 : {
        backgroundColor :'#ffffff',
        paddingTop:10,
        paddingLeft:62.2,
        paddingRight:62.2,
    },
    view2 : {
        backgroundColor :'#ffffff',
        paddingBottom:30,
    },
    view1 : {
        backgroundColor :'#ffffff'
    },
    input : {
        width:250,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor : 'rgb(195, 195, 195)',
        padding: 10,
        borderRadius : 5,

    },

    img: {
        width:150,
        height:100,
    },

    container : {
        width:"100%",
        height:"100%",
        flex:1,
        justifyContent : 'center',
        alignItems:'center',
        backgroundColor:'#dedfe0',
        paddingBottom:100
    },
    btnDiv : {
        position : 'relative',
        top : 150,
        left : 110,
    },


})

// const styles = StyleSheet.create({
//     view1 : {
//         paddingTop : 10,
//         backgroundColor : 'white',
//         paddingLeft: 10,
//         paddingRight:10,
//         borderTopEndRadius:10,
//         paddingBottom: 10,
//         borderTopStartRadius:10,
//     },
//     view2 : {
//         backgroundColor : 'white',
//         paddingLeft: 10,
//         paddingRight:10,
//         // paddingTop:10,
//         // paddingBottom:10,
//     },

//     input: {
//       height: 40,
//       margin: 12,
//       borderWidth: 1,
//       borderColor : 'rgb(195, 195, 195)',
//       padding: 10,
//       borderRadius : 5,

//     //   backgroundColor : '#ffffff'
//     },
//     container :{
//         flex:1,
//         justifyContent : "center",
//         alignItems : 'center',
//         fontFamily : 'Inter_400Black',
//         width : '100%',
//         height : '100%',
//         backgroundColor: "#dedfe0", 
//     },
//     btnDiv : {
//         // paddingTop:9,
//         paddingLeft: 21,
//         paddingRight : 21,
//         paddingBottom : 25,
//         backgroundColor : 'white',
//         borderBottomEndRadius: 10,
//         borderBottomStartRadius :10,
//     },
//     touchableBtn: {
//         // height: '3rem',
//         // width : '10rem'
//         paddingTop: 10,
//         paddingBottom : 10,
//         paddingLeft : 90,
//         backgroundColor : 'black',

//         paddingRight: 90,
//     }
//   });

export default MainLogin;
