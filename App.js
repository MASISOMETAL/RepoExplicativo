import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import CustomModal from './components/customModal';

export default function App() {

    const [openModal1, SetopenModal1] = useState(false);
    const [openModal2, SetopenModal2] = useState(false);

    const OpenModal1 = () =>{
        SetopenModal1(!openModal1);
    }

    const OpenModal2 = () =>{
        SetopenModal2(!openModal2);
    }

    return (
        <View style={styles.container}>
            <CustomModal
            caca='slide'
            pene= {openModal1}
            >
                <View style={styles.container}>
                    <TouchableOpacity
                    onPress={OpenModal1}
                    >
                    <Text style={styles.boton2}>cerrar modal 1</Text>
                    </TouchableOpacity>
                </View>
            </CustomModal>
            
            <CustomModal
            caca='slide'
            pene= {openModal2}
            >
                <View style={styles.container}>
                    <TouchableOpacity
                    onPress={OpenModal2}
                    >
                    <Text style={styles.boton2}>cerrar modal 2</Text>
                    </TouchableOpacity>
                </View>
            </CustomModal>
            <TouchableOpacity
            onPress={OpenModal1}
            style={{backgroundColor: "#930CE8", paddingVertical: 15}}
            >
                <Text>Presioname</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={OpenModal2}
            style={styles.boton2}
            >
                <Text>Presioname</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    boton1: {
        padding: 15,
        backgroundColor: "#29D9D6",
        marginVertical: 5,
    },
    boton2: {
        padding: 15,
        backgroundColor: "#E87E3A",
    },
});
