import  {Todo} from './todo.class';

export class TodoList{

     constructor (){

          this.cargarLocalStorage();
     }

     nuevoTodo(todo){       //nueva todo(tarea)

        this.todos.push(todo)  //añade elementos al final del array y devuelve el nuevo tamaño del array
        this.guardarLocalStorage();
     }

     eliminarTodo( id ){      //remueve una tarea 
    
          this.todos = this.todos.filter( todo => todo.id != id)   //regresa los elementos bajo la condicion 
          this.guardarLocalStorage();
    
    }

     marcarCompletado(id){     //marca una tarea completada

         for(const todo of this.todos){
             
            if(todo.id == id){
                 todo.completado = !todo.completado; //true/false y viceversa 
                 this.guardarLocalStorage();
                 break;  // salir del ciclo
            }
         }

     }
     
     elminarCompletados(){     //elimina una tarea que ya esta completada 

        this.todos = this.todos.filter( todo => !todo.completado)
        this.guardarLocalStorage();

     }
     
guardarLocalStorage(){

     localStorage.setItem('todo' , JSON.stringify(this.todos) );
}

cargarLocalStorage(){

   this.todos= (localStorage.getItem('todo'))? JSON.parse(localStorage.getItem('todo')) : []; //operador ternario 

    this.todos = this.todos.map(Todo.fromJson);
}}

