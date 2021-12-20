import React, { useState, useEffect, useContext } from 'react';
import { Button, Image, View, Platform ,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { GlobalContext } from '../../context/context';
import { AntDesign } from '@expo/vector-icons'; 

export default function ImagePickerExample() {
    let {state , dispatch} = useContext(GlobalContext);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      dispatch({type : "APPLICANT_PHOTO" , payload : result.uri})
    }
  };

  return (
    <View style={{width:'100%',display:'flex', flexDirection:'row' ,alignItems : 'center' , justifyContent : 'flex-start' }}>
      <AntDesign name="clouduploado" size={25}  color="black" onPress={pickImage} > 
      
      </AntDesign>
      <Text style={{fontSize : 15 , marginLeft :10}}>Upload Profile Pic</Text>
    </View>
  );
}
