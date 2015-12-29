     // create a new module called 'materialsSetModule' and save 
 // a reference to it in a variable called materialsSetModule 
 var materialsSetMoudle = angular.module('materialsSetMoudle', []);
 
 // use the materialsSetModule variable to
 // configure the module with a controller
 materialsSetMoudle.controller('materialsSetCtrl', function ($scope) {
        // controller code would go here

		var materialsSet = {
                typeName: '���',
                typeCode: 'bc'
            };
            $scope.data = materialsSet;
			
            $scope.items = [
				{ typeName: '���',typeCode: 'bc'},
				{ typeName: '���',typeCode: 'wj'},
				{ typeName: 'ľƤ',typeCode: 'mp'}��
				{ typeName: '�ƾ�',typeCode: 'dj'},
				{ typeName: '����',typeCode: 'yq'},
				{ typeName: '���� ',typeCode: 'jl'}
             ];
     }
 );
 
 // use the materialsSetModule variable to
 // configure the module with a filter
 materialsSetMoudle.filter('stripDashes', function() {
     return function(txt) {
         // filter code would go here
 }; });