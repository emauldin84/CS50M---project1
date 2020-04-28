import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimeDisplay from './components/TimeDisplay'
import ButtonsContainer from './components/ButtonsContainer'

const App = () => {
  const [mins, setMins] = useState(25)
  const [secs, setSecs] = useState(0)
  
  useEffect(() => {
    if (secs < 0){
      setSecs(59)
      setMins(prevMins => prevMins-1)
    }
  },[secs, mins])
  
  // const secsRef = useRef(secs);
  // secsRef.current = secs;
  // const decSecs = () => {
    // let seconds = secs
    // seconds--
    // setSecs(secsRef.current--)
  // }
  const handleStartTimer = () => {
    this.timer = setInterval(() => {
      setSecs(currSecs => currSecs-1)
    }, 100)
  }

  const handlePauseTimer = () => {
    clearInterval(this.timer)
  }

  const handleResetTime = () => {

  }

    return (
      <View style={styles.container}>
        <TimeDisplay mins={mins} secs={secs}/>
        <ButtonsContainer setMins={setMins} setSecs={setSecs} handleStartTimer={handleStartTimer} handlePauseTimer={handlePauseTimer}/>
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
});

export default App
