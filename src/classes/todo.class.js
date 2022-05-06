

export class Todo{   //exportar clase 

static fromJson({id,tarea,completado,creado}){

const temconpletado = new Todo(tarea);

temconpletado.id = id;
temconpletado.completado = completado;
temconpletado.creado = creado;

return temconpletado;

}
    constructor(tarea){

    this.tarea = tarea;

    this.id = new Date().getTime();  //hora actual 
    this.completado = false;
    this.creado = new Date();  //crea una nueva tarea 
 

    }
}