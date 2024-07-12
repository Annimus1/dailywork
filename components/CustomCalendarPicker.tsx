import React from "react";
import { Modal, Pressable, Text, View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

import DateTimePicker from "react-native-ui-datepicker";
import CustomButton from "./CustomButton";


export default function CustomCalendarPicker({ title, date, setDate }) {
  const [open, setOpen] = React.useState(false);
  const [test, setTest] = React.useState("");


  return (
    <View>
      <Modal
        animationType="slide"
        visible={open}
        onRequestClose={() => { setOpen(!open) }}>

        <DateTimePicker
          mode="single"
          date={date}
          onChange={(params) => {
            setDate(params.date);
          }}

          selectedItemColor={Colors.light.tint}
        />

        <View style={styles.oneItem}>
          <CustomButton title={"Confirm Date"} onPress={() => {
            setTest(date?.toLocaleString());
            setOpen(!open);
          }} />
        </View>

      </Modal>

      <Pressable
        style={styles.button}
        onPress={() => setOpen(!open)}>
        <Text> { test ? test: title} </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: { width: 350, height: 60, marginBottom: 15, borderWidth: 1, padding: 18, borderRadius: 4, borderColor: 'black' },
  oneItem: { width: 350, flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10, padding: 10 },

});