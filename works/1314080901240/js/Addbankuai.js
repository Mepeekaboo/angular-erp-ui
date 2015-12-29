// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('orderModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function($scope) {
	var someData = {
+            Leibie: '���',
+            Banwenfx: '���Ʒ���',
+            Name: '����',
+            Datags: '���빫ʽ',
+            Beizhu: '��ע',
+            
+        };
+        $scope.data = someData;
});

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});