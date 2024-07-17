import CustomButton from "@/components/CustomButton";
import { cleanDB } from "@/components/DB/database";
import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function DebtsPage(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Debts Page.</Text>
            <CustomButton title={'test'} onPress={cleanDB} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize:30
    }
});