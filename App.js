import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimeDisplay from './components/TimeDisplay'
import ButtonsContainer from './components/ButtonsContainer'
import vibrate from './utils/vibrate'

const App = () => {
  const [mins, setMins] = useState(25)
  const [secs, setSecs] = useState(0)
  const [working, setWorking] = useState(true)
  const [timeUp, setTimeUp] = useState(false)
  
  useEffect(() => {
    if (secs < 0){
      setMins(prevMins => prevMins-1)
      setSecs(59)
    }
    if (secs <= 0 && mins === 0 && working){
      // clearInterval(this.timer)
      setMins(5)
      setSecs(0)
      setWorking(false)
      vibrate()
    }
    if (secs <= 0 && mins === 0 && !working){
      console.log(`time's up!`)
      clearInterval(this.timer)
      setMins(0)
      setSecs(0)
      setTimeUp(true)
      vibrate()
    }
  },[secs, mins, working])

  
  const handleStartTimer = () => {
    this.timer = setInterval(() => {
      setSecs(currSecs => currSecs-1)
    }, 1000)
  }

  const handlePauseTimer = () => {
    clearInterval(this.timer)
  }

  const handleResetTime = () => {
    setMins(25)
    setSecs(0)
    setWorking(true)
  }
  let message = working ? 'get it done!' : timeUp ? 'reset timer to get back to work' : 'take a break'
  let backgroundColor = working ? styles.backgroundWorking : timeUp ? styles.backgroundEnd : styles.backgroundBreak
  return (
      <View style={[styles.container, backgroundColor]}>
        <Text style={styles.message}>{message}</Text>
        <TimeDisplay mins={mins} secs={secs}/>
        <ButtonsContainer setMins={setMins} setSecs={setSecs} handleStartTimer={handleStartTimer} handlePauseTimer={handlePauseTimer} handleResetTime={handleResetTime}/>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundWorking: {
    backgroundColor: 'lightgreen'
  },
  backgroundBreak: {
    backgroundColor: 'lightblue'
  },
  backgroundEnd: {
    backgroundColor: 'coral'
  },
  message: {
    fontSize: 62,
    alignItems: 'center',
    justifyContent: 'center'

  }
});

export default App
