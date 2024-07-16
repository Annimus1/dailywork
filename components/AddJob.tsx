import React from "react";
import { View, Text, Modal, StyleSheet, TextInput, Pressable } from "react-native";
import CustomButton from "./CustomButton";

import { AntDesign } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
import Select from "./Select";
import CustomCalendarPicker from "./CustomCalendarPicker";
import AddCategory from "./AddFeature";
import { CreateCategory, CreateStatus, getCategories, getStatus, saveJob } from "./DB/database";



export default function AddJob({ visible, setVisible }) {

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const [payment, setPayment] = React.useState(null);
  const [date, setDate] = React.useState(new Date());
  const [dueDate, setDueDate] = React.useState(new Date());

  const [error, setError] = React.useState(false);  
  const [CategoryData, setCategoryData]  = React.useState([]); 
  const [StatusData, setStatusData] = React.useState([]);

  const initCategories = async ()=>{
    await getCategories().then(data => { setCategoryData(data) })
  }

  const initStatus = async ()=>{
    await getStatus().then(data => { setStatusData(data) })
  }

  const cleanForm = ()=>{
    setTitle('');
    setDescription('');
    setStatus(null);
    setCategory(null);
    setPayment(null);
    setDate(new Date());
    setDueDate(new Date());
    setError(false)
  }


  React.useEffect(()=>{
    initCategories();
    initStatus();
  },[])


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
          <CustomButton 
            title={<AntDesign name="closecircleo" size={24} color="white" />} 
            onPress={() => {
              cleanForm();
              setVisible(!visible)
            }} />
        </View>

        {/* Title */}
        <View >
          <Text style={styles.title}>Add your Job</Text>
        </View>

        {/* Form */}
          {/* Title */}
        <View style={styles.formGroup}>
          <TextInput
            style={[styles.input, { borderColor: (error && title=='') ? 'red' : 'black' }]}
            onChangeText={(text) => setTitle(text)}
            value={title}
            placeholder="Title"
          />
        </View>

          {/* Category */}
        <View style={styles.formGroup} onPointerEnter={()=> initCategories()}>
          <View style={{ width: 290, flexDirection: 'row' }}>
            <Select 
              data={CategoryData} 
              label={"Select a Category ..."} 
              value={category} 
              setValue={setCategory} 
              errorMsg={(error && !category )? "Please select a Category or Create one.":""}/>
            <View style={{ width: 50, paddingVertical:10, marginLeft: 5}}>
              <AddCategory onChange={initCategories} label={'Category'} action={CreateCategory}/>
            </View>
          </View>
        </View>

          {/* Payment */}
        <View style={styles.formGroup}>
          <TextInput
            style={[styles.input, { borderColor: (error && !payment) ? 'red' : 'black' }]}
            onChangeText={ text => setPayment( parseFloat(text) ) }
            value={ payment }
            placeholder="Payment"
            keyboardType="numeric"
          />
        </View>

          {/* Description */}
        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            onChangeText={ text => setDescription(text)}
            value={description}
            placeholder="Description (optional)"
          />
        </View>

          {/* Date */}
        <View style={styles.formGroup}>
          <CustomCalendarPicker title='Date' date={date} setDate={setDate} />
        </View>

          {/* Status */}
        <View style={styles.formGroup} onPointerEnter={()=> initCategories()}>
          <View style={{ width: 290, flexDirection: 'row' }}>
            <Select 
              data={StatusData} 
              label={"Select a Status ..."} 
              value={status} 
              setValue={setStatus} 
              errorMsg={(error && !status )? "Please select a Status or Create one.":""} 
            />
            <View style={{ width: 50, paddingVertical:10, marginLeft: 5}}>
              <AddCategory onChange={initStatus} label={'Status'} action={CreateStatus}/>
            </View>
          </View>
        </View>

          {/* PaymentDue */}
        <View style={styles.formGroup}>
          <CustomCalendarPicker title="Payment Due" date={dueDate} setDate={setDueDate} />
        </View>


        {/* Save button */}
        <View>
          <CustomButton title={'Save'} onPress={()=>{
            // create an Object to save the info into the database
            const Data = {
              title,
              description,
              status,
              category,
              payment,
              date : `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
              dueDate: `${dueDate.getFullYear()}-${dueDate.getMonth()+1}-${dueDate.getDate()}`
            };

            Data.description = description? description:null ;


            if(Data.category && Data.status && Data.payment && Data.title){
              
              // Save the info into the database
              saveJob(Data);

              // clear form
              cleanForm();

              // close the modal
              setVisible(!visible)

            }else{

              setError(true);       

            }

          }} />
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
  error: {borderColor: 'red'}
});


