import { Tasks } from "../../tasks/entities/task";

export class Project{
    //atributos
    id: number;
    name: string;
    description: string;
    status: string; // pendiente, progreso, terminado

    //tareas de un proyecto
    tasks: Tasks[];

    //constructor?: inicializar el objeto al estado(atributos) de un objeto
    //constructor(parametro ){  }
    //parametros son los valores que requiere el metodo para realizar su funcion
    constructor(name:string,description:string){
        this.id = 0;
        this.name = name;
        //propiedad = parametro
        this.description = description;
        this.status = "Pendiente";
        //Poner manualmente 3 tareas a cada proyecto
        this.tasks = [
            new Tasks("Tarea 1", "Maquetado 1",new Date("2024-11-01 13:30")),
            new Tasks("Tarea 2", "Maquetado 2",new Date("2024-11-01 18:30")),
            new Tasks("Tarea 3", "Maquetado 3",new Date("2024-11-01 15:30"))
        ];
    }
    //metodos
}