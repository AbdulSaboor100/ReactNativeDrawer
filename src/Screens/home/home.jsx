import React, { useContext, useState } from 'react';
import { View , Text , TextInput ,StyleSheet ,ScrollView ,Button , TouchableOpacity , Dimensions } from 'react-native';
import DropDown from '../../components/dropdown/dropdown';
import * as ImagePicker from 'expo-image-picker';
import ImagePickerExample from '../../components/image-picker/image-picker';
import CnicPick1 from '../../components/cnic/cnic-pic1';
import CnicPick2 from '../../components/cnic/cnic-pic2';
import { GlobalContext } from '../../context/context';
import { db , doc , setDoc, storage ,ref , uploadBytes ,getDownloadURL  } from '../../configs/firebase';


const MainHome = () => {

    let [name , setName] = useState('');
    let [fatherName , setFatherName] = useState('');
    let [cnic , setCnic] = useState('');
    let [dateOfBirth , setDateOfBirth] = useState('');
    let [familyMembers , setFamilyMembers] = useState('');
    let [monthlyIncome , setMonthlyIncome] = useState('');
    let [MonthlyRation , setMonthlyRation] = useState('');

    let {state , dispatch} = useContext(GlobalContext)
    const submitFormFunc = async () =>{
       let mathRandom = Math.floor(Math.random() * 1000000000);
        try {
            let storageRef1 = ref(storage,`${state.activeUser.uid}/${mathRandom}`)
            await uploadBytes(storageRef1,state.applicantPic)
            let URL1 =  await getDownloadURL(ref(storage, `${state.activeUser.uid}/${mathRandom}`))

            let storageRef2 = ref(storage,`${state.activeUser.uid}/${mathRandom}`)
            await uploadBytes(storageRef2,state.cnicFrontPic)
            let URL2 =  await getDownloadURL(ref(storage, `${state.activeUser.uid}/${mathRandom}`))

            let storageRef3 = ref(storage,`${state.activeUser.uid}/${mathRandom}`)
            await uploadBytes(storageRef3,state.cnicBackPic)
            let URL3 =  await getDownloadURL(ref(storage, `${state.activeUser.uid}/${mathRandom}`))
            let dataRef = doc(db , "publcApplicaitons" , state.activeUser.uid);
            
            let detailsObj = {
                name , 
                fatherName,
                cnic,
                dateOfBirth,
                familyMembers,
                monthlyIncome, 
                MonthlyRation,
                URL1,
                URL2,
                URL3,
                uid : state.activeUser.uid,
                createdAt : new Date()
            }
            await setDoc(dataRef , detailsObj)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView>
        <View>
            <View>
                <TextInput onChangeText={(e)=>{setName(e)}} style={styles.input} placeholder="Enter name" value={name} />
            </View>
            <View>
                <TextInput value={fatherName} onChangeText={(e)=>{setFatherName(e)}} style={styles.input} placeholder="Enter father name" />
            </View>
            <View>
                <TextInput value={cnic} onChangeText={(e)=>{setCnic(e)}} style={styles.input} placeholder="Enter cnic number" />
            </View>
            <View>
                <TextInput value={dateOfBirth} onChangeText={(e)=>{setDateOfBirth(e)}} style={styles.input} placeholder="Enter Date of Birth" />
            </View>
            <View>
                <TextInput value={familyMembers} onChangeText={(e)=>{setFamilyMembers(e)}} style={styles.input} placeholder="Enter family members" />
            </View> 
            <View>
                <TextInput style={styles.input} value={monthlyIncome} onChangeText={(e)=>{setMonthlyIncome(e)}} placeholder="Enter Monthy Income" />
            </View>
            <View>
                <TextInput value={MonthlyRation} onChangeText={(e)=>{setMonthlyRation(e)}} style={styles.input} placeholder="Enter Monthy ration" />
            </View>
            <View>
                <ImagePickerExample />
            </View>
            <View>
                <CnicPick1 />
            </View>
            <View>
                <CnicPick2 />
            </View>
            <View>
           
            </View>
            <View>
                <TouchableOpacity onPress={submitFormFunc}><Text>Submit Form</Text></TouchableOpacity>
            </View>
         
    </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
   
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor : 'rgb(195, 195, 195)',
        padding: 10,
        borderRadius : '5px',
  
      //   backgroundColor : '#ffffff'
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
      
})

export default MainHome;
