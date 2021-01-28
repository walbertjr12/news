import { map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { getNewsApi } from './src/api/news'
import New from './src/components/New'

export default function App() {
  const [news, setNews] = useState(null)

  useEffect(() => {
    getNewsApi()
    .then((response) =>{
      setNews(response)
    })
  }, [])

  if(!news) return null

  return (
    <SafeAreaView>
      <Text style={styles.title}>Últimas Noticias</Text>
      <ScrollView style={styles.scrollView}>
        {map(news, (data)=>(
          <New key={data.id} data={data}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 10
  },
  scrollView: {
    height: "100%"
  }
})
