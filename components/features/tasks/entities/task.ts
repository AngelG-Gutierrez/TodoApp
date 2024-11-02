export class Tasks{

    id: number;
    name: string;
    description: string;
    startDate?: Date;
    completeDate?: Date;
    status: string; // Realizado - No Realizado
    completed: boolean;

    constructor(name:string,description:string,startDate:Date){
        this.id = 0;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.status = "No Realizado"
        this.completed = false;
    }
}