import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from "@rneui/themed";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from 'expo-image-picker';

const Registration = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dob, setDob] = useState("Date of Birth");
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }
    const handleConfirm = (date) => {
        setDob(date.toDateString());
        hideDatePicker();
    };
    const [pic, setPic] = useState("Upload Profile Picture");
    const selectPhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        })
    };


    return (
        <>
            <View style={styles.inputContainer}>
                <StatusBar style="auto" />
                <Input placeholder="Full name" autoFocus type="fullname" onChangeText={(text) => setFullname(text)} />
                <Input placeholder="Phone number" type="number" onChangeText={(text) => setNumber(text)} />
                <Input placeholder="Email address" type="email" onChangeText={(text) => setEmail(text)} />
                <View style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 3, marginBottom: 30 }}>
                    <TouchableOpacity style={{ color: 'lightgray', marginleft: 5, padding: 10 }} onPress={() => { showDatePicker() }}>
                        <Text>{dob}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode={"date"}
                        maximumDate={new Date()}
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <View style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 3, marginBottom: 30 }}>
                    <TouchableOpacity style={{ color: '#E0E0E0', marginleft: 5, padding: 10 }} onPress={() => { selectPhoto() }}>
                        <Text>{pic}</Text>
                    </TouchableOpacity>
                </View>
                <View></View>
                <Button containerStyle={styles.button} type="outline" title="RESET" />
                <Button containerStyle={styles.button} title="SUBMIT" />
            </View>

        </>
    )
}

export default Registration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    inputContainer: {
        flex: 1,
        padding: 5,
        paddingTop: 15,
        backgroundColor: '#E0E0E0',
    },
    button: {

        marginTop: 12, 
    }
});