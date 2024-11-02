import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import DashedLine from "react-native-dashed-line";
import TextInputComponent from "./controls/components/input";
import ButtonComponent from "./controls/components/button";


export default function ScreenProject(){
    return(
        <ScrollView>
                <View style={styles.containerprin}>
                    <View style={styles.container1}>
                        <View>
                            <TouchableOpacity><Icon size={40} name="long-arrow-left"/></TouchableOpacity>
                        </View>
                        <View style={styles.viewLetter1}>
                        <Text style={styles.letter1}> Nuevo Proyecto</Text>
                        </View>
                        <View style={styles.view1}>
                            <Text style={styles.letterTitleText}>Nombre del proyecto</Text>
                            <TextInputComponent
                            placeholder="    Ingresa el nombre del proyecto"
                            />
                        </View>
                        <View style={styles.view1}>
                            <Text style={styles.letterTitleText}>Descripción</Text>
                                <TextInputComponent
                                    placeholder="    De qué trata tu proyecto?"
                                />
                        </View>
                        <View style={styles.view1}>
                            <View style={styles.containerRow}>
                                <View style={styles.view2}>
                                    <Text style={styles.letterTitleText}>Tareas del proyecto</Text>
                                    <TextInputComponent
                                    placeholder="    Ingresa la tarea a realizar"
                                    />
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.viewLetter1}><Icon size={60} name = "plus-circle" color='rgba(0,93,200,1)'></Icon></TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.viewButton}>
                                <TouchableOpacity style={styles.button}>
                                    <ButtonComponent
                                    buttonText="Continue"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerprin:{
        alignItems:'center',
        justifyContent:'center',
    },

    viewProject:{
        borderRadius:20,
        borderColor:'rgba(65, 255, 109, .8)',
        borderWidth:4,
        width:350,
        height:120,
        marginBottom:10,
    },

    viewButton:{
        justifyContent:'center',
        alignItems:'center',
    },

    button:{
        width:368,
        height:55,
        backgroundColor: 'black',
        borderRadius: 30,  
        marginVertical: 10,
        color: 'white', 
        fontSize: 16,  
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center'
    },

    view1:{
        height:90,
        width:360,
    },

    view2:{
        height:90,
        width:280,
    },
    container1:{
        marginTop:40,
        width:360,
        height:780,
        borderRadius:20,
        backgroundColor:'white',
    },

    letter1:{
        fontSize:38,
        fontWeight:'bold',
    },

    letterTitleText:{
        marginTop:10,
        marginLeft:5,
        fontSize:20,
        fontWeight: 600,
    },

    containerRow:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },

    viewLetter1:{
        marginTop:30,
    },
})