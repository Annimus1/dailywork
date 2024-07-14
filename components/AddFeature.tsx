import React from "react";
import { View, Text, Modal, TextInput, StyleSheet } from 'react-native';
import CustomButton from "./CustomButton";
import { Colors } from "@/constants/Colors";
import { getCategories } from "./DB/database";


export default function AddCategory({label, onChange, action}) {
  const [category, setCategory] = React.useState('');
  const [open, setOpen] = React.useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={open}
        onRequestClose={() => { setOpen(!open) }}>

        <View style={styles.container}
        >
          <TextInput
            style={styles.input}
            placeholder={`${label}`}
            onChangeText={text => setCategory(text)}
            value={category}
          />

          <CustomButton title={`Create ${label}`} onPress={async () => {
            await action(category)
            setCategory('');
            setOpen(!open);
            onChange();
          }} />
        </View>

        <CustomButton title={'+'} round onPress={async () => console.log(await getCategories())} />

      </Modal>


      <CustomButton title={'+'} onPress={() => setOpen(!open)} round />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { fontSize: 18, width: 200, borderColor: Colors.light.tint, borderBottomWidth: 2, marginBottom: 20, padding: 10 },
  text: { color: 'gray' }
});