import React, {useState, useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import { Navbar } from './components/Navbar'
import { THEME } from './theme'
import {MainScreen} from './screens/MainScreen'
import {TodoScreen} from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext'
import { ScreenContext } from './context/screen/screenContext'



export const MainLayout = () => {

    const {todoId} = useContext(ScreenContext)

    //{id:'1', title: 'выучить реакт'},
    //{id:'2', title: 'написать приложение'},
    //{id:'3', title: 'пройти курс'},
    //{id:'4', title: 'сделать свое приложение'},
    //{id:'5', title: 'likssssss'},
    //{id:'6', title: 'test12dfd'},
    //{id:'7', title: 'test12545435'},
    //{id:'8', title: 'test12454655676767'},
    //{id:'9', title: 'test11111112'}


    return (
        <View style={styles.wrapper}>
          <Navbar title="Todo App "/>
            <View style={styles.container}>
              { todoId ? <TodoScreen/> : <MainScreen/> }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20,
      flex: 1
    },
    wrapper: {
      flex: 1
    }
  })
  