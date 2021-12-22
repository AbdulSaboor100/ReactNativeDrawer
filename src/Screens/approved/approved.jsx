import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { GlobalContext } from '../../context/context';

const Approved = () => {
    let { state, dispatch } = useContext(GlobalContext)
    let [ourData, setOurData] = useState()
    useEffect(() => {
        // let date = new Date(state.publicApplications.createdAt.seconds)
        setOurData(state.approvedApplication)
    }, [])
    return (
        <ScrollView>
            {
                state.approvedApplication ? (
                    state.approvedApplication.status === "approved" ? (
                        <View style={styles.container}>
                            <View style={styles.status}>
                                <Text style={styles.special}>Khana Sab Ke Liye</Text>
                            </View>
                            <View style={styles.status1}>
                                <Text style={styles.text}>Your Application Status : {state.approvedApplication.status}</Text>
                            </View>
                            <View style={styles.status}>
                                <Text style={styles.text}>Father Name : {state.approvedApplication.approvedObj.fatherName}</Text>
                            </View>
                            <View style={styles.status}>
                                <Text style={styles.text}>Cnic No : {state.approvedApplication.approvedObj.cnic}</Text>
                            </View>
                            <View style={styles.status}>
                                <Text style={styles.text}>Contact No : 92-311-1729526</Text>
                            </View>
                            <View style={styles.status}>
                                <Text style={styles.text}>Food Bank Branch Name : </Text>
                                <Text style={styles.special2}>{state.approvedApplication.approvedObj.nearestOne.name}</Text>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.container}>
                            <View  style={styles.status}>
                                <Text style={styles.special}>Khana Sab Ke Liye</Text>
                            </View>
                            <View style={styles.status}>
                                <Text style={styles.text}>Your Application Status : {state.approvedApplication.status}</Text>
                            </View>
                            <View style={styles.status}>
                                <Text style={styles.text}>Father Name : {state.approvedApplication.rejectObj.fatherName}</Text>
                            </View>
                            <View style={styles.status}>
                                <Text style={styles.text}>Cnic No : {state.approvedApplication.rejectObj.cnic}</Text>
                            </View>
                            <View style={styles.status}> 
                                <Text style={styles.text}>Contact No : 92-311-1729526</Text>
                            </View>
                            <View style={styles.status}>
                                <Text style={styles.text}>Food Bank Branch Name : </Text>
                                <Text style={styles.special2}>{state.approvedApplication.rejectObj.nearestOne.name}</Text>
                            </View>
                        </View>
                    )
                ) : (
                    <View style={{ flex: 1, justifyContent: 'center', paddingTop: 200, alignItems: 'center', width: '100%', height: '100%', paddingLeft:10 }}>
                        <Text style={{fontSize:20 , textAlign:'center', color:'#808080' ,fontWeight:'bold'}}>Your Application Is In Approval Process Right Now</Text>
                    </View>
                )
            }
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container : {
        width:"100%",
        height:"100%",
        flex:1,
        justifyContent : 'center',
        alignItems:'flex-start',
        margin: 60,

    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        color:'#808080',
        
    },
    special : {
        fontSize:30,
        // color:'#89c343',
        color:'#808080',
        fontWeight:'100',
        marginTop:20
    },
    status1 : {
        marginTop:20
    },
    special2:{
        marginTop:20,
        color:'#808080',
        fontWeight:'500',
        fontSize:25,
    },
})

export default Approved;
{/* <View style={{flex : 1 , justifyContent:'center' , paddingTop : 200 , alignItems : 'center' ,width:'100%' , height :'100%'}}>
<Text>Your Application Don't Approved Right Now</Text>
</View> */}