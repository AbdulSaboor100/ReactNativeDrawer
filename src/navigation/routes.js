import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainLogin from '../Screens/login/login';
import SignUpPublic from '../Screens/public-sign-up/sign';
import MainHome from '../Screens/home/home';
import { auth , onAuthStateChanged  , doc , getDoc , db , collection } from '../configs/firebase';
import { GlobalContext } from '../context/context';
import locationMap from '../components/maps/location';
import Pending from '../Screens/pending/pending';
import Approved from '../Screens/approved/approved';
import BranchManager from '../Screens/branch-manager/branch-manager';
import Logout from '../Screens/logout/logout';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  let {state , dispatch}= React.useContext(GlobalContext);
  let [userData , setUserData] = React.useState()
  React.useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        // console.log(user, "user Found");
        try {
          let userRef = doc(db,"users" , user.uid)
          let userSaved = await getDoc(userRef)
          let userDetails = userSaved.data()
          dispatch({type : "ACTIVE_USER" , payload : userDetails})

          let publicApplicationsRef = doc(db, "publcApplicaitons" , user.uid)
          let getApplication = await getDoc(publicApplicationsRef)
          dispatch({type : "publicApplications" , payload : getApplication.data()})

          let approvedApplications = doc(db,"approvedApplications" , user.uid)
          let getApprovation = await getDoc(approvedApplications);
          dispatch({type : "ApprovedApplication" , payload : getApprovation.data()})

        } catch (error) {
          console.log(error, "error")
        }
        setUserData(user)
      }else{
        console.log("user not found")
      }
    })
  },[])
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="logout" component={Login} />
      </Stack.Navigator> */}
      <Drawer.Navigator>
      {
        userData ? (
          <>
         {
           state.activeUser.role === "public" ? (
            state.approvedApplications ? (
              <>
              <Drawer.Screen name="Approved" component={Approved} />
              <Drawer.Screen name="logout" component={Logout} />
              </>
            ) : (
              <>
              <Drawer.Screen name="pending" component={Pending} />
              <Drawer.Screen name="logout" component={Logout} />
              </>
            )
           ) : (
             <>
                <Drawer.Screen name="branchManager" component={BranchManager} />
                <Drawer.Screen name="logout" component={Logout} />
                
             </>
            
           )
         }
          
          </>
        ) : (
          <>
            <Drawer.Screen name="Login"  component={MainLogin} />
            <Drawer.Screen name="Sign-up" component={SignUpPublic} />
          </>
        )
      }
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;

