import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Feed = () => {

  const [data, setData] = useState([])
  const [visible, setVisible] = useState(true)

  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }

  useEffect(() => {
    getApiData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 2000);
  }, [])



  const onRenderItem = ({ item }) => {
    return (
      <View style={{ height: 200, backgroundColor: "black", marginTop: 10, marginHorizontal: 20, borderRadius: 10, padding: 10 }}>


        <View>
          <Text style={{ color: "white" }}>{item.userId}</Text>
          <Text style={{ color: "white" }}>{item.id}</Text>
          <Text style={{ color: "white" }}>{item.title}</Text>
          <Text style={{ color: "white" }}>{item.body}</Text>
        </View>



      </View>
    )
  }

  return (
    <View style={{flex:1,justifyContent:"center"}}>

      {visible ? <ActivityIndicator
      style={{alignSelf:"center"}}
        size={'large'}
        color={"red"}
      />
        :
        <FlatList
          data={data}
          renderItem={onRenderItem}
        />}

    </View>
  )
}

export default Feed

const styles = StyleSheet.create({})