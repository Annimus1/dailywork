import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import testJobs from '@/util';

export default function JobsList() {

  return (
    <SafeAreaView style={styles.list}>

      <FlatList
        data={testJobs}
        renderItem={
          ({ item }) => {
            return (
              <Pressable style={Item.container}>
                <View style={Item.header}>
                  <Text style={Item.title}>{item.title}</Text>
                  <Text>${item.payment}</Text>
                </View>
                <View style={Item.header}>
                  <Text>{item.date}</Text>
                  <Text style={Item.category}>{item.category}</Text>
                </View>
              </Pressable>
            );
          }
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    width: 350,
    height: 500,
    marginBottom: 20,
    borderRadius: 10,
    paddingVertical: 4
  },
});

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
    padding: 2
  }
});