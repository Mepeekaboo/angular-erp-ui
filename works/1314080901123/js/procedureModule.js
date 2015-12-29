// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 

var procedureModule = angular.module('procedureModule', []);
// use the myAppModule variable to
// configure the module with a controller
procedureModule.controller('procedureModuleDemoCtrl', function ($scope) {
       // controller code would go here
        var procedureData = 
          {   
            procedureID: '001',      
            procedureName: 'test',
            procedureOperation: 'execute',
            procedureCondition: 'Loading'           
           };
        $scope.data = procedureData;
}
);

// use the myAppModule variable to
// configure the module with a filter
procedureModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });