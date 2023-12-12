import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useReducer } from "react";

import reducer from "./reducer";


const Article = () => {


  const initialState = {
    total: 50000,
    withdrawn: 0,
    added: 0,
  };

  const [balance, dispatch] = useReducer(reducer, initialState);

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <Text style={{
        color: 'red', fontSize: 33,
        textAlign: Platform.OS == 'android' ? 'center' : 'right'
      }}>
        Ram Ram ji
      </Text>

      <Text style={{
        color: 'red', fontSize: 33,
        textAlign: Platform.OS == 'android' ? 'center' : 'right',
        marginVertical:10
      }}>
        useReducer example
      </Text>

      <Button
        title='Withdraw 500'
        onPress={() => dispatch({ type: "WITHDRAW_500" })}
      />

      <Button
        title='Add 1000'
        onPress={() => dispatch({ type: "DEPOSIT_1000" })}
      />


      <Text>
        Total amount: {balance?.total}
      </Text>

      <Text>
        Amount withdrawn: {balance?.withdrawn}
      </Text>

      <Text>
        Amount added: {balance?.added}
      </Text>


    </SafeAreaView>
  )
}

export default Article;

const styles = StyleSheet.create({})