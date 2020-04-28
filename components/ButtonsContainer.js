import React from 'react'

import { View, Text, Button, StyleSheet } from 'react-native'

const ButtonsContainer = (props) => {
    return(
        <View style={styles.buttonsContainer}>
            <Button title='start' onPress={props.handleStartTimer} />
            <Button title='pause' onPress={props.handlePauseTimer} />
            <Button title='reset' onPress={props.handleResetTime} />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
    },
})

export default ButtonsContainer