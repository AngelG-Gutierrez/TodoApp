import { Project } from "../entities/project";
export class ProjectService{

    projects:Project[];

    constructor(){
        this.projects = [];

        this.add(new Project('Proyecto TO DO APP', "Gestionar proyectos y tareas"));
        this.add(new Project('Proyecto Finanzas', "Controlar ingresos y gastos"));
        this.add(new Project('Proyecto Personal', "Organizar tareas personales"));
        this.add(new Project('Proyecto Personal 2', "Organizar tareas personales"));
    }

    list(){
        return this.projects;
    }

    add(project:Project){
        project.id = this.projects.length + 1;
        this.projects.push(project);
        return project;
    }
}