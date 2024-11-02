import {StyleSheet, Text, TouchableOpacity, View} from "react-native";



export default function TaskContainerRecent(
    {taskName, taskDescription, taskStartDate, taskStatus

    }:{
        taskName: string,
        taskDescription: string,
        taskStartDate: string,
        taskStatus: string
    }

){
    return(
        <View>
            <TouchableOpacity>
                <View>
                    <View>
                        <Text style={styles.textTitle}>{taskName}</Text>
                    </View>
                    <View>
                        <Text style={styles.textContent}>{taskDescription}</Text>
                    </View>
                    <View>
                        <Text style={styles.textContent}>Fecha de inicio: {taskStartDate} </Text>
                    </View>
                    <View>
                        <Text style={styles.textContent}>Estado: {taskStatus}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
    }


})