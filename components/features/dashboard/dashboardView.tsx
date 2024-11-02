// vista para el Dashboard
// no se exporta por default
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DashedLine from "react-native-dashed-line";
import Icon from 'react-native-vector-icons/FontAwesome';
import ProjectContainerRecent from "@/app/controls/components/projectContainerRecent";
import TaskContainerRecent from "@/app/controls/components/taskContainerRecent";
import { Project} from "../projects/entities/project";
import { Tasks } from "../tasks/entities/task";
import { ProjectService} from "../projects/services/projectsService";
import { TasksService } from "../tasks/services/taskService";
export function DashboardView() {
//estado para projects
const[projects, setProjects] = useState<Project[]>([]);
const[tasks, setTasks] = useState<Tasks[]>([]);
//al cargar en la vista, ir por la lista de projects al servicio
useEffect(()=>{
    const projectsService = new ProjectService();
      setProjects(projectsService.list());
},[]);
//al cargar en la vista, ir por la lista de tasks al servicio
useEffect(()=>{
    const tasksService = new TasksService();
    setTasks(tasksService.list());
},[]);

//estado para proyecto
return (
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
                                <Text style={styles.letterTasks}>{projects.length} Proyectos</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <TouchableOpacity><Icon size={60} name = "plus-circle" color='rgba(0,93,200,1)' marginRight={10}></Icon></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <DashedLine dashLength={20} dashThickness={2} dashGap={8} dashColor='rgba(128, 128, 128, .3)' />
                </View>
                <View>
                    <Text style={styles.letterProject}>Proyectos registrados</Text>
                </View>
                {projects.map((project) => (
                    <View key={project.id} style={styles.viewProject}>
                    <ProjectContainerRecent 
                        projectId = {`${project.id}`} 
                        projectName = {`${project.name}`} 
                        projectDescription = {`${project.description}`} 
                    />
                    </View>
                ))}
                <View>
                    <Text style={styles.letterProject}>Tareas Recientes</Text>
                </View>
                {tasks.map((task)=>(
                    <View key={task.id} style={styles.viewProject}>
                        <TaskContainerRecent
                            taskName={`${task.name}`}
                            taskDescription={`${task.description}`}
                            taskStartDate={`${task.startDate}`}
                            taskStatus={`${task.status}`}
                        />
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
  },

  container1:{
      flex:1,
      borderRadius:20,
      backgroundColor:'white',
  },

  headerRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:10,
  },

  letterHeader:{
      fontSize:35,
      marginLeft:10,
      fontFamily:'cochin',
      fontWeight:'bold'
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
