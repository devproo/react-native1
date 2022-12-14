import React, { useState } from 'react'
import { TextInput, StyleSheet, Text, Button, View } from 'react-native'

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('')

  const changeHandler = (val) => {
    setText(val)
  }
  const pressHandler = () => {
    submitHandler(text)
    setText('')
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
        value={text}
      />
      <Button color='coral' onPress={submitHandler} title='add todo' />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
})

