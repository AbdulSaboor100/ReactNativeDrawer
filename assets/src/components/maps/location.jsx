import React, { useState, useEffect , useContext } from 'react';
import MapView , {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Touchable, TouchableOpacity ,Button  , Alert } from 'react-native';
import { GlobalContext } from '../../context/context';


export default function LocationMapComp({navigation}) {
  let {state, dispatch} = useContext(GlobalContext);
  let [stateArea , setStateArea] = useState(false)

  const food = [
    {
        "branch_name": "Aliabad",
        "latitude": 24.9200172,
        "longitude": 67.0612345
    },
    {
        "branch_name": "Numaish chowrangi",
        "latitude": 24.8732834,
        "longitude": 67.0337457
    },
    {
        "branch_name": "Saylani house phase 2",
        "latitude": 24.8278999,
        "longitude": 67.0688257
    },
    {
        "branch_name": "Touheed commercial",
        "latitude": 24.8073692,
        "longitude": 67.0357446
    },
    {
        "branch_name": "Sehar Commercial",
        "latitude": 24.8138924,
        "longitude": 67.0677652
    },
    {
        "branch_name": "Jinnah avenue",
        "latitude": 24.8949528,
        "longitude": 67.1767206
    },
    {
        "branch_name": "Johar chowrangi",
        "latitude": 24.9132328,
        "longitude": 67.1246195
    },
    {
        "branch_name": "Johar chowrangi 2",
        "latitude": 24.9100704,
        "longitude": 67.1208811
    },
    {
        "branch_name": "Hill park",
        "latitude": 24.8673515,
        "longitude": 67.0724497
    }
]


  const [mapRegion, setmapRegion] = useState({
    latitude: state.latitude,
    longitude: state.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });



  const cities1 = [
    ["Aliabad" ,24.9200172  ,67.0612345],
    ["Numaish chowrangi" ,24.8732834 ,67.0337457 ],
    ["Saylani house phase 2" , 24.8278999 ,67.0688257],
    ["Touheed commercial" , 24.8073692 ,67.0357446] ,
    ["Sehar Commercial" , 24.8138924 , 67.0677652],
    ["Jinnah avenue" , 24.8949528 , 67.1767206],
    ["Johar chowrangi" ,24.9132328 ,67.1246195 ],
    ["Johar chowrangi 2" ,24.9100704 ,67.1208811],
    ["Hill park" , 24.8673515 ,67.0724497]
   ];

   const cities = [
    {lat1 : 24.9200172  , long1 : 67.0612345},
    {lat1 : 24.8732834 ,long1 : 67.0337457 },
    {lat1 : 24.8278999 ,long1 : 67.0688257},
    {lat1 : 24.8073692 ,long1 : 67.0357446} ,
    {lat1 : 24.8138924 ,long1 :  67.0677652},
    {lat1 :  24.8949528 ,long1 :  67.1767206},
    {lat1 : 24.9132328 ,long1 : 67.1246195 },
    {lat1 : 24.9100704 ,long1 : 67.1208811},
    {lat1 : 24.8673515 ,long1 : 67.0724497}
   ];

   const cities2 = [
    {name : "Aliabad" , lat1 : 24.9200172  , long1 : 67.0612345},
    {name : "Numaish chowrangi" ,lat1 : 24.8732834 ,long1 : 67.0337457 },
    {name : "Saylani house phase 2" ,lat1 : 24.8278999 ,long1 : 67.0688257},
    {name : "Touheed commercial"  ,lat1 : 24.8073692 ,long1 : 67.0357446} ,
    {name : "Sehar Commercial" , lat1 : 24.8138924 ,long1 :  67.0677652},
    {name : "Jinnah avenue" ,lat1 :  24.8949528 ,long1 :  67.1767206},
    {name : "Johar chowrangi" ,lat1 : 24.9132328 ,long1 : 67.1246195 },
    {name :"Johar chowrangi 2" ,lat1 : 24.9100704 ,long1 : 67.1208811},
    {name : "Hill park" ,lat1 : 24.8673515 ,long1 : 67.0724497}
   ];
   
  

  //  useEffect(()=>{
  //   // let nearestOne = nearestCity(state.latitude,state.longitude)
        
  //     if(nearestOne){
  //       dispatch({type : "NEARESTONE" , payload : {nearestOne}})
  //       // setTimeout(()=>{
  //         console.log("redirect")
  //         navigation.navigate("Home")
  //       // },2000)
  //       setStateArea(false)
        
  //     }else{
  //       dispatch({type : "NEARESTONE" , payload : ''})
  //     }
      
  
  //  },[])

    
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }

  // useEffect(()=>{
  //   let distances = [];
  //   for(let i = 0; i < cities.length ; i++ ){
  //    let result = getDistanceFromLatLonInKm(cities[i].lat1 , cities[i].long1 , mapRegion.latitude , mapRegion.longitude );
  //    console.log(distances)
  //    distances.push(result)
  //    console.log(Math.min(...distances))
  //    console.log(result.length)
  //   }
  // },[])

// useEffect(()=>{
//   let distancedCities = cities2.map((item)=>{
//     let newItem = {...item}
//     let result = getDistanceFromLatLonInKm(item.lat1 , item.long1 , mapRegion.latitude , mapRegion.longitude );
//     newItem.distance = result
//     return newItem
//   })
  
//   let minDistanceCity = distancedCities.reduce(function(prev, curr) {
//     return prev.distance < curr.distance ? prev : curr;
// });

//       if(minDistanceCity){
//         console.log("redirect")
//         navigation.navigate("Home")
//         dispatch({type : "NEARESTONE" , payload : minDistanceCity})
//         // setTimeout(()=>{

//         // },2000)
//       //  setTimeout(() => {
//         // setStateArea(false) 
//       //  }, 2000);
//         console.log(stateArea , "redirection")
//       }else{
//         dispatch({type : "NEARESTONE" , payload : ''})
//       }

// },[state.type])

function setLocationFunc(){
  let distancedCities = cities2.map((item)=>{
    let newItem = {...item}
    let result = getDistanceFromLatLonInKm(item.lat1 , item.long1 , mapRegion.latitude , mapRegion.longitude );
    newItem.distance = result
    return newItem
  })
  
let minDistanceCity = distancedCities.reduce(function(prev, curr) {
    return prev.distance < curr.distance ? prev : curr;
});

      if(minDistanceCity){
        console.log("redirect")
        navigation.navigate("Home")
        dispatch({type : "NEARESTONE" , payload : minDistanceCity})
        console.log(minDistanceCity)
      }else{
        dispatch({type : "NEARESTONE" , payload : ''})
      }
}

   



  return (
    <View style={styles.container}>
    
      <MapView style={styles.map} region={mapRegion} key={1} >
        <Marker coordinate={mapRegion}  title='Your Location' />
        {
          food.map((item , index)=>{
            let obj = {
              latitude: item.latitude,
              longitude:  item.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
            let names = {
              branchName : item.branch_name
            }
            return (
              <>
                <Marker coordinate={obj}  title={names.branchName}  />
                
              </>
            )
          })
        }
      </MapView>
      <View
        style={{
            position: 'absolute',//use absolute position to show button on top of the map
            top: '90%', //for center align
            alignSelf: 'center',
            justifyContent : 'center' //for align to right
        }}
    >
        <Button title='Set Location' onPress={setLocationFunc} />
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
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
});
