import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Task from './components/Task';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'
  },
  items: {
    marginTop: 30,
    
  },
});

export default function App() {
  return (
    <View style={styles.container}>

      {/* Today's tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>
        </View>
      </View>

    </View>
  );
}
