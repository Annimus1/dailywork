import React from "react";
import { Colors } from "@/constants/Colors";
import Dropdown from 'react-native-input-select';


export default function Select({data, label, value, setValue, errorMsg}) {
  const [country, setCountry] = React.useState();

  return (
    <Dropdown
      label={errorMsg}
      placeholder={label}
      options={data}
      selectedValue={value}
      onValueChange={(newValue) => setValue(newValue)}
      primaryColor={Colors.light.tint}
    />
  );
}
