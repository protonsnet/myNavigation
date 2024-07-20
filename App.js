/**
 * Dependências:
 * npx expo install @react-navigation/native
 * npx expo install @react-navigation/stack
 * npx expo install @react-navigation/drawer
 * npx expo install @react-navigation/bottom-tabs
 * npm install react-native-screens react-native-safe-area-context
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
/** 
 * Navegação pelo topo
 * <Stack.Navigator> </Stack.Navigator>
 */ 
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Navegação pela base
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/** 
 * Navegação pelo lateral
 * <Drawer.Navigator> </Drawer.Navigator>
 */ 
//import { createDrawerNavigator } from "@react-navigation/drawer";
import AppContacts from "./src/pages/AppContacts";
import Contacts from "./src/pages/Contacts";
import Information from "./src/pages/Information";

/** 
 * Criando uma const StackNavigation 
 * para montar a navegação
*/
// Navegação pelo topo
const Stack = createStackNavigator()
// Navegação pela lateral
//const Drawer = createDrawerNavigator()
// Navegação pela base
const Tab = createBottomTabNavigator()

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen
        name="AppContacts"
        component={AppContacts}
        options={{  
          title: 'App',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{  
          title: 'Contato',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppContacts"
          component={Tabs}
        ></Stack.Screen>
        <Stack.Screen
          name="Information"
          component={Information}
          options={{  
            title: 'Informações',
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
