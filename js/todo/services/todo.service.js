angular.module('todo')
    .service('TodoService', [function(){
        var service = {};
        service.todos = [];
        service.add=function(todo){
            this.todos.push(todo);
        };
        service.delete=function(item){
            this.todos.splice(this.todos.indexOf(item),1);
        };
        service.clear=function(){
            for(var index = this.todos.length-1; index>=0; index--){
                if(this.todos[index].completed === true){
                    this.todos.splice(index,1);
                }
            }
        };
        return service;

        /*return {
         todos:[],
         add:function(todo){
         this.todos.push(todo);
         },
         delete:function(item){
         this.todos.splice(this.todos.indexOf(item),1);
         },
         clear:function(){
         for(var index = this.todos.length-1; index>=0; index--){
         if(this.todos[index].completed === true ){
         this.todos.splice(index,1);
         }
         }
         }
         };*/
    }]);