import { View, Text, StyleSheet, Dimensions} from 'react-native';


const Card = () =>{
    return(
        <View style={styles.cardContainer}>
            <Text>Da Card</Text>
        </View>
    );
};



const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth - 25, 
        height: 200,
        borderRadius: 20,
        backgroundColor: '#5fc9f3',

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        elevation: 9,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default Card