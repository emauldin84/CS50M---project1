import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const TimeDisplay = (props) => {
    let minsDisplay = props.mins < 10 ? `0${props.mins}` : props.mins
    let secsDisplay = props.secs < 10 ? `0${props.secs}` : props.secs
    return (
        <View>
            <Text style={styles.time}>{minsDisplay}:{secsDisplay}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    time:{
        fontSize: 48
    }
})

export default TimeDisplay