import React from "react";
import { Colors } from "@/constants/Colors";
import { Pressable, View, StyleSheet, Text, Modal } from "react-native";
import { JobType } from "./types";
import { getCategoryName, getStatusName } from "./DB/database";

export default function JobItem({ item }: { item: JobType }) {
  const [category, setCategory] = React.useState<String>("");
  const [Status, setStatus] = React.useState<String>("");
  const [open, setOpen] = React.useState<boolean>(false);

  const getFromDB = () => {
    getCategoryName(item.categoryID).then((name) => setCategory(name));
    getStatusName(item.statusID).then((name) => setStatus(name));
  }

  React.useEffect(()=>{
    getFromDB()
  },[])

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={open}
        onRequestClose={() => {
          setOpen(false)
        }}>
            <Text>test</Text>
      </Modal>

      <Pressable style={Item.container} onPress={()=> item.description? setOpen(!open): null}>
        <View style={Item.header}>
          <Text style={Item.title}>{item.title}</Text>
          <Text>${item.payment?.toString()}</Text>
        </View>
        <View style={Item.header}>
          <Text>{item.date}</Text>
          <Text style={Item.category}>{category}</Text>
        </View>
      </Pressable>
    </View>);
}

const Item = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 5,
    backgroundColor: Colors.light.background,
    borderRadius: 4
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  category: {
    fontSize: 14,
    borderRadius: 9,
    backgroundColor: Colors.dark.icon,
    color: Colors.dark.text,
    padding: 2,
    paddingHorizontal: 10
  }
});