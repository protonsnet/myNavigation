import React from "react";
import { View, Text } from "react-native";

export default function Informacion({ route }){
    return(
        <View style={{margin: 20}}>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Fone: {route.params?.fone}</Text> 
            <Text>Endereço: {route.params?.endereco}</Text>
            <Text>Nº: {route.params?.numero}</Text>
            <Text>Bairro: {route.params?.bairro}</Text>
            <Text>email: {route.params?.email}</Text>
        </View>
    )
}