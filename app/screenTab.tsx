import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import DashedLine from "react-native-dashed-line";
import ProjectContainer from "./controls/components/projectContainer";
import ProjectContainerRecent from "./controls/components/projectContainerRecent";
import TaskContainerRecent from "./controls/components/taskContainerRecent";



export default function ScreenTab(){
    return(
        <ScrollView>
            <View style = {styles.containerprin}>
                <View style = {styles.container1}>
                    <View>
                        <View style={styles.headerRow}>
                            <View>
                                <View>
                                    <Text style={styles.letterHeader}>Martes, 29 de Octubre</Text>
                                </View>
                                <View>
                                    <Text style={styles.letterTasks}>2 Proyectos</Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <TouchableOpacity><Icon size={60} name = "plus-circle" color='rgba(0,93,200,1)'></Icon></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <DashedLine dashLength={20} dashThickness={2} dashGap={8} dashColor='rgba(128, 128, 128, .3)' />
                    </View>
                    <View>
                        <Text style={styles.letterProject}>Proyectos registrados</Text>
                    </View>
                    <View>
                        <View style={styles.viewProject}>
                            <ProjectContainerRecent/>
                        </View>
                        <View style={styles.viewProject}>
                            <ProjectContainerRecent/>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.letterProject}>Tareas Recientes</Text>
                    </View>
                    <View>
                        <View style={styles.viewProject}>
                            <TaskContainerRecent/>
                        </View>
                        <View style={styles.viewProject}>
                            <TaskContainerRecent/>
                        </View>
                    </View>
                    <View>
                        <View style={styles.footerRow}>
                            <TouchableOpacity>
                                <Icon size={30} name="table" color='rgba(0,93,200,1)'><Text> Tablero</Text></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon size={30} name="clock-o" color='rgba(0,93,200,1)'><Text> Pendientes</Text></Icon>
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

    container1:{
        marginTop:50,
        width:360,
        height:780,
        borderRadius:20,
        backgroundColor:'white',
    },

    headerRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
    },

    footerRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
    },

    letterHeader:{
        fontSize:35,
        fontFamily:'cochin',
        fontWeight:'bold'
    },

    letterTasks:{
        fontSize:23,
        fontFamily:'cochin',
        color:'rgba(128, 128, 128)'
    },

    letterProject:{
        fontSize:40,
        fontFamily:'cochin',
        marginBottom:10,
        marginTop:10,
    }
});
