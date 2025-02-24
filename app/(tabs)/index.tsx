import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { Colors } from '@/constants/Colors';
import CustomButton from '@/components/CustomButton';
import AddJob from '@/components/AddJob';
import JobsList from '@/components/JobsList';

import { getJobs, initDB } from '@/components/DB/database';
import { JobType } from '@/components/types';


export default function index() {
  const [Visible, setVisible] = React.useState<boolean>(false);
  const [jobs, setJobs] = React.useState<JobType[]>([]);

  async function updateJobs( ){
   await getJobs().then( jobsData => setJobs(jobsData))
  }

  React.useEffect(()=>{
    updateJobs();
  },[]);


  initDB(); 

  return (
    <View style={styles.container}>

      <AddJob visible={Visible} setVisible={setVisible} updateJobs={updateJobs}/>

      {/* Notes */}
      <View style={{ width: 350, flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10, padding: 10 }}>
        <CustomButton title={'Notes'} onPress={() => { Alert.alert("Show Comands for notes (add and view).") }} />
      </View>

      {/* List of Jobs */}
      <JobsList jobs={jobs} />

      {/*Add new Job button */}
      <CustomButton title='Add new Job' onPress={() => setVisible(!Visible)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background
  }
});