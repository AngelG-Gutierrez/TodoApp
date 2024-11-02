// vista para tareas pendientes
// no se exporta por default

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Tasks } from "./entities/task";
import { TasksService } from "./services/taskService";
import { useEffect, useState } from "react";
import TaskContainerRecent from "@/app/controls/components/taskContainerRecent";
import Icon from 'react-native-vector-icons/FontAwesome';

export function TasksView() {
  const[tasks, setTasks] = useState<Tasks[]>([]);
  useEffect(()=>{
    const tasksService = new TasksService();
    setTasks(tasksService.list());
},[]);
  return (
    <ScrollView>
        <View style = {styles.containerprin}>
            <View style = {styles.container1}>
                <View>
                    <Text style={styles.letterProject}>Tareas Pendientes</Text>
                </View>
                {tasks.map((task)=>(
                    <View key={task.id} style={styles.viewProject}>
                        <TaskContainerRecent
                            taskName={`${task.name}`}
                            taskDescription={`${task.description}`}
                            taskStartDate={`${task.startDate}`}
                            taskStatus={`${task.status}`}
                        />
                        <TouchableOpacity><Icon size={35} name='check-square' color='purple'></Icon></TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerprin:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: 'white',
  },

  viewProject:{
      borderRadius:20,
      borderColor:'rgba(65, 255, 109, .8)',
      marginLeft:20,
      borderWidth:4,
      width:350,
      height:140,
      marginBottom:10,
      justifyContent:'space-between',
      flexDirection:'row'
  },

  container1:{
      width:'100%',
      height:'100%',
      borderRadius:20,
      backgroundColor:'white',
  },

  headerRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:10,
  },

  letterTasks:{
      fontSize:23,
      marginLeft:10,
      fontFamily:'cochin',
      color:'rgba(128, 128, 128)'
  },

  letterProject:{
      fontSize:40,
      fontFamily:'cochin',
      marginBottom:10,
      marginTop:10,
      marginLeft:20,
  }
});
