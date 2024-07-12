import React from "react";
import { View, Text, Modal, StyleSheet, TextInput, Pressable } from "react-native";
import CustomButton from "./CustomButton";
import { CategoryData, StatusData } from "@/util";

import { AntDesign } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
import Select from "./Select";
import DateTimePicker from "react-native-ui-datepicker";
import CustomCalendarPicker from "./CustomCalendarPicker";



export default function AddJob({ visible, setVisible }) {

  const [ date, setDate ] = React.useState(new Date());
  const [ dueDate, setDueDate ] = React.useState(new Date());


  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => {
        alert("You're about to exit without save the changes");
      }}>

      <View style={styles.container}>

        {/* Hide Modal */}
        <View style={styles.oneItem}>
          <CustomButton title={<AntDesign name="closecircleo" size={24} color="white" />} onPress={() => setVisible(!visible)} />
        </View>

        {/* Title */}
        <View >
          <Text style={styles.title}>Add your Job</Text>
        </View>

        {/* Form */}
        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            // onChangeText={null}
            // value={}
            placeholder="Title"
          />
        </View>

        <View style={styles.formGroup}>
          <Select data={CategoryData} label={"Select a Category ..."} />
        </View>

        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            // onChangeText={null}
            // value={}
            placeholder="Paiment"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            // onChangeText={null}
            // value={}
            placeholder="Description (optional)"
          />
        </View>

        <View style={styles.formGroup}>
          <CustomCalendarPicker title='Date' date={date} setDate={setDate}/>
        </View>

        <View style={styles.formGroup}>
          <Select data={StatusData} label={"Select a Status ..."} />
        </View>

        <View style={styles.formGroup}>
          <CustomCalendarPicker title="PaymentDue" date={dueDate} setDate={setDueDate} />
        </View>


        {/* Save button */}
        <View>
          <CustomButton title={'Save'} onPress={null} />
        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 22, alignItems: 'center', justifyContent: 'center' },
  oneItem: { width: 350, flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10, padding: 10 },
  formGroup: { width: 350 },
  input: { width: 350, height: 60, marginBottom: 15, borderWidth: 1, padding: 20, borderRadius: 4, borderColor: 'black' },
  title: { fontSize: 20, fontWeight: '600', color: Colors.light.tint },
});


