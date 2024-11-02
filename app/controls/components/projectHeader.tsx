import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import DashedLine from "react-native-dashed-line";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Header(){
    return(
        <View>
            <View>
                <View>
                    <View>
                        <Text style={styles.letterHeader}>Martes, 29 de Octubre</Text>
                    </View>
                    <View>
                        <Text style={styles.letterTasks}>0 Proyectos</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    letterHeader:{
        fontSize:35,
        fontFamily:'cochin',
        fontWeight:'bold'
    },

    letterTasks:{
        fontSize:23,
        fontFamily:'cochin',
        color:''
    },


})