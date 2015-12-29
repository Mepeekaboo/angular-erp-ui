// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var yuangongchaxunModule = angular.module('yuangongchaxunModule', []);

// use the myAppModule variable to
// configure the module with a controller
yuangongchaxunModule.controller('yuangongchaxunFilterDemoCtrl', function ($scope) {
       // controller code would go here
       var yuangongchaxun = {
            leixing: '123',
            danjia: 123,
            shuliang: 123,
            jine: 123,
            IDcard: '123'
        };
        $scope.data = yuangongchaxun;
         $scope.items = [
            {leixing: '001',danjia: '8',shuliang: '10',jine: '80',IDcard: "123"},
            {leixing: '002',danjia: '9',shuliang: '10',jine: '90',IDcard: "456"},
            {leixing: '003',danjia: '10',shuliang: '10',jine: '100',IDcard: "789"} 
        ];
    }
);

// use the myAppModule variable to
// configure the module with a filter
yuangongchaxunModule.filter('yuangongchaxunstripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
