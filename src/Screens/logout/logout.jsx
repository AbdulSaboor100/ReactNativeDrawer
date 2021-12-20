import React, { useContext } from 'react';
import { View , Text, StyleSheet , TouchableOpacity } from 'react-native';
import { auth, signOut } from '../../configs/firebase';
import { GlobalContext } from '../../context/context';

const Logout = ({navigation}) => {
    let {state , dispatch} = useContext(GlobalContext);
    const logoutFunc = async () =>{
        try {
            await signOut(auth)
            dispatch({type : "STATE_CHANGES" , payload : {accept : true}})
            navigation.navigate("Login")
        } catch (error) {
            console.log(error , "error")
        }
    }
    return (
        <View style={styles.logout_div}>
            <View style={styles.btn}>
                <TouchableOpacity onPress={logoutFunc}><Text style={{color :'white'}}>Logout</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    logout_div : {
        flex :1,
        width:"100%",
        justifyContent : 'center',
        alignItems : 'center',
        height:"100%",
    },
    btn: {
        backgroundColor :'green',
        padding:10,
        paddingLeft: 20 ,
        paddingRight: 20,
    },
})

export default Logout
