import React from 'react';
import { View , Text, StyleSheet , TouchableOpacity } from 'react-native';
import { auth, signOut } from '../../configs/firebase';

const Logout = ({navigation}) => {
    const logoutFunc = async () =>{
        try {
            await signOut(auth)
            navigation.navigate("Login")
        } catch (error) {
            console.log(error , "error")
        }
    }
    return (
        <View style={styles.logout_div}>
            <View>
                <TouchableOpacity onPress={logoutFunc}><Text>Logout</Text></TouchableOpacity>
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
    }
})

export default Logout
