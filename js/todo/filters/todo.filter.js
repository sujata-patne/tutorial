/**
 * Created by sujatah on 1/27/2015.
 */
angular.module('todo').
    filter('TodoFilter',[function(){
        var filter = function(array,criteria){
            var filteredArray = [];
            array.forEach(function(item){
                if(criteria === 'all'){
                    filteredArray.push(item);
                }else if(criteria === 'active' && item.completed === false){
                    filteredArray.push(item);
                }else if(criteria === 'completed' && item.completed === true){
                    filteredArray.push(item);
                }
            });
            return filteredArray;
        };
        return filter;
    }]);