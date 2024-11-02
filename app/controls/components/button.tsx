import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonComponent(
    {buttonText

    }:{
        buttonText?:string
    }
) {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex:1,
        justifyContent:'center'
    },
    buttonText: {
        color: 'white', 
        fontSize: 16,  
        fontWeight: 'bold',
        textAlign:'center'

    },
});
