import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Link } from "expo-router";


export default function ProjectContainerRecent(
    { projectId, projectName, projectDescription 

    }:{
        projectId: string,
        projectName: string,
        projectDescription: string
    }

){
    return(
        <View>
            <View>
            <Text style={styles.textTitle}>{projectName}</Text>
            <Text style={styles.textContent}>{projectDescription}</Text>
            <Link style={styles.link} href={`/project/${projectId}`}>
                Ver Proyecto
            </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    textTitle:{
        fontSize:20,
        fontFamily:'cochin',
        fontWeight:'bold',
        marginLeft:10,
        marginTop:10,
    },

    textContent:{
        fontSize:18,
        fontFamily:'cochin',
        marginLeft:10,
        marginTop:10,
    },

    link: {
        marginTop: 10,
        marginLeft: 10,
        color: "blue",
        fontSize: 16,
    },
})