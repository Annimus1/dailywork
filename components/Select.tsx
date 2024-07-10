import React from "react";
import { Colors } from "@/constants/Colors";
import Dropdown from 'react-native-input-select';


export default function Select({data, label}) {
  const [country, setCountry] = React.useState();

  return (
    <Dropdown
      label=""
      placeholder={label}
      options={data}
      selectedValue={country}
      onValueChange={(value) => setCountry(value)}
      primaryColor={Colors.light.tint}

    />
  );
}