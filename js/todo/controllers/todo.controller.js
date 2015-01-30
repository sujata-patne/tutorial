angular.module('todo')
    .controller("MainCtrl", ['$scope', 'TodoService', function($scope, TodoService){

        $scope.todos = TodoService.todos;
        $scope.criteria = 'all';
        $scope.setCriteria = function(newCriteria){
            console.log(newCriteria);
            $scope.criteria = newCriteria;
        }

        $scope.add = function(){
            TodoService.add({text:$scope.newTodo.text,completed:false});
            $scope.newTodo.text = null;
        }

        $scope.delete = function(item){
            TodoService.delete(item);
        }

        $scope.clear = function(){
            TodoService.clear();
        }

        $scope.keypress = function(){
            if(event.keyCode == 13){
                $scope.add();
            }
        }
    }]);
