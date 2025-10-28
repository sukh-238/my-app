import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Home from '../../components/globals/Home'

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(1, 4, 5, 1)", // same color in HEX format
  },
})
