import { Tasks } from "../entities/task";

export class TasksService{
    task:Tasks[];
    constructor(){
        this.task = [];

        this.add(new Tasks('Maquetado de to do app','Realizar el maquetado de una aplicacion de tareas',new Date("2024-11-01 13:30")));
        this.add(new Tasks('Maquetado de to do app','Realizar el maquetado de una aplicacion de tareas',new Date("2024-11-01 13:30")));
        this.add(new Tasks('Maquetado de to do app','Realizar el maquetado de una aplicacion de tareas',new Date("2024-11-01 13:30")));
        this.add(new Tasks('Maquetado de to do app','Realizar el maquetado de una aplicacion de tareas',new Date("2024-11-01 13:30")));
        this.add(new Tasks('Maquetado de to do app','Realizar el maquetado de una aplicacion de tareas',new Date("2024-11-01 13:30")));
    }

    list(){
        return this.task;
    }

    add(task:Tasks){
        task.id = this.task.length + 1;
        this.task.push(task);
        return task;
    }
}