import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const IconSize = 24;

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, headerShown: false,}}>

 <Tabs.Screen
        name="DebtsPage"
        options={{
          title: 'Debts',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6 name="money-bill-transfer" size={IconSize} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="index"
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="work" size={IconSize} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Reports"
        options={{
          title: 'Reports',
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="graph-bar" size={IconSize} color={color} />
          ),
        }}
      />
    
    </Tabs>
  );
}
