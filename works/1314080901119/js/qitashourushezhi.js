
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('qitashourushezhi', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
var someData = {
+            shouruleixing: a,
+            kemubianma: 001,
+            beizhu: wu

+        };
+        $scope.data = someData;
+} </script>
        };
        $scope.data = danjuData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });