import Reat from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import { Colors } from '@/constants/Colors';
import CustomButton from '@/components/CustomButton';

import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import JobsList from '@/components/JobsList';

export default function index() {
  return (
    <View style={styles.container}>
      {/* Notes */}
      <View style={{ width: 350, flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 , padding: 10}}>
        <CustomButton title={'Notes'} onPress={() => { Alert.alert("Show Comands for notes (add and view).") }} />
      </View>

      {/* List of Jobs */}
      <JobsList />

      {/*Add new Job button */}
      <CustomButton title='Add new Job' onPress={() => Alert.alert("Add new Job")} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background
  },
  title: {
    fontSize: 30
  },
});


