import Reat from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function JobsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobs tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{ 
    fontSize: 30
  }
});