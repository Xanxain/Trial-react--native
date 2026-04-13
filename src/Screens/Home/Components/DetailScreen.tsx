import React from 'react';
import { View, Text } from 'react-native';

export default function DetailScreen({ route }: any) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Detail Page</Text>
      <Text>{item.name}</Text>
    </View>
  );
}
