angular.module("todoApp", [])
    .controller("MainCtrl", function($scope){
        $scope.todos = [];

        $scope.add = function(){
            console.log($scope.newTodo);
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        }

        $scope.delete = function(item){
            var index = $scope.todos.indexOf(item);
            $scope.todos.splice(index,1);
        }

        $scope.clear = function(){
            for(var index = $scope.todos.length-1; index>=0; index--){
                if($scope.todos[index].completed === true){
                    $scope.todos.splice($scope.todos.indexOf($scope.todos[index]),1);
                }
            }
        }
    });