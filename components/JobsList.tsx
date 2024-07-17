import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { JobType } from "./types";
import JobItem from "./JobItem";

export default function JobsList({ jobs }: { jobs: JobType[] }) {

  return (
    <>
      {jobs.length != 0 ?
        <SafeAreaView style={styles.list}>
          <FlatList
            data={jobs}
            renderItem={
              ({ item }) => {
                return (
                  < JobItem item={item} />
                );
              }
            }
          />
        </SafeAreaView> 
        :
        <View style={styles.noJobs}>
          <Text style={styles.text}>Oh, looks like you have no Jobs for now.</Text>
          <Text style={styles.text}>You can create one by hitting "Add new Job" button.</Text>
        </View>
      }
    </>
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
  noJobs: {
    width: 350,
    height: 500,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  text: {
    fontSize: 18,
    color: Colors.light.text,
    marginBottom: 10
  }
});