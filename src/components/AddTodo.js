import React, {useState} from 'react'
import {View, Keyboard, StyleSheet, TextInput, Button, Alert} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {
   
   const [value, setValue] = useState('')
   
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Название дела не может быть пустым!')
        }
      
   }

    return (
        <View style={styles.block}>
            <TextInput 
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder="Введите название дела..."
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='default'
            />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo">
                Добавить
            </AntDesign.Button>
            {/*<Button title="Добавить" onPress={pressHandler}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        alignItems: 'center'
    },
    input: {
        width: '60%',
        paddingBottom: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})