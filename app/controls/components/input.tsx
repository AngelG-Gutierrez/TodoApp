import { View,TextInput, StyleSheet } from "react-native";


export default function TextInputComponent(
    {placeholder

    }:{
        placeholder?:string
    }
){


    return(
        <View style={styles.container}>
            <TextInput
            style = {styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={"gray"}
            multiline
            textAlignVertical="top"
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 6,
    },
    textInput:{
        flex:1,
        borderColor:'rgba(65, 255, 109, .8)',
        borderWidth:2,
        borderRadius:8,
        padding:10,
    }
})