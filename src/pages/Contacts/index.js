import React from "react";
import { View, Text } from "react-native";

export default function Contacts({navigation}){
    return(
        <View>
            <View style={{margin: 20}}>
                <Text>Nome: Paula Silva</Text>
                <Text>Fone: 99 99999-9999</Text>
                <Text 
                    onPress={() => navigation.navigate('Information',
                        {
                            nome: "Paula Silva",
                            fone: "99 99999-9999",
                            endereco: "Rua da Paula",
                            numero: "123",
                            bairro: "o mesmo",
                            email: "paula@teste.com"
                        }
                    )}
                >Information...</Text>
            </View>
            <View style={{margin: 20}}>
                <Text>Nome: Carla Silva</Text>
                <Text>Fone: 99 98888-9999</Text>
                <Text 
                    onPress={() => navigation.navigate('Information',
                        {
                            nome: "Carla Silva",
                            fone: "99 88888-9999",
                            endereco: "Rua da Carla",
                            numero: "321",
                            email: "carla@teste.com"
                        }
                    )}
                >Information...</Text>
            </View>
        </View>
    )
}