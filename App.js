import { StatusBar } from "expo-status-bar";
import React from "react";
import CarItem from './components/CarItem/index'
import { StyleSheet, View } from "react-native";

export default function App() {
    return (
        <View style={StyleSheet.container}>
            <CarItem />
            <StatusBar style="auto" />
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
});