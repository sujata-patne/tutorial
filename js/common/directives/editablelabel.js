/**
 * Created by sujatah on 1/28/2015.
 */
angular.module("common")
    .directive("editableLabel", [function(){
        return{
            restrict: 'AE',
            templateUrl: 'js/common/views/editablelabel.html',
            scope: {
                value: '='
            },
            link:function(scope,element,attrs){
                scope.editMode = false;
                scope.oldValue = null;
                scope.enterEditMode = function(){
                    scope.oldValue = scope.value;
                    scope.editMode = true;
                }
                scope.keyup = function(){
                    if(event.keyCode === 13){ //Enter Key
                        scope.editMode = false;
                    }
                    else if(event.keyCode === 27){ //Esc key
                        scope.value = scope.oldValue;
                        scope.editMode = false;
                    }
                }
            }
        }
    }]);
