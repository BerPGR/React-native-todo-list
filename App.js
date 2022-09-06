import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Task from './components/Task';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop: 80,
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
  
  writeTaskWrapper: {
    justifyContent:'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 30,
  },
  
  input: {
    backgroundColor: '#fff',
    borderColor: '#C6C6C6',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
  },
  
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C6C6C6',
    borderWidth: 1,
  },
  
  addText: {

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

      {/* Write a task */}
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'}/>
        <TouchableOpacity >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}
