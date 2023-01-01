import React from "react";
import { View, Text, StyleSheet, Dimensions} from 'react-native'

const Card = () =>{
    return(
        <View style={styles.Card}>
            <Text>Da Card</Text>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer: {width: deviceWidth, backgroundColor: '#a29bfe'},
});

export default Card