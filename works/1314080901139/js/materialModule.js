// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var materialModule = angular.module('materialModule', []);

// use the myAppModule variable to
// configure the module with a controller
materialModule.controller('creatematerialCtrl', function ($scope) {
       // controller code would go here

        var material = {
            wuliaoLeibie:"wujin",
            wuliaoName:" ",
            updatedDate:" ",
            pingyinMa:" ",
            wuliaoMiaoshu:" ",
        };
        $scope.data = material;
        
        $scope.isHidden = ture;
        $score.showInput = function()
        {
               $score.isHidden = !$score.isHidden;
        }

});

// use the myAppModule variable to
// configure the module with a filter
materialModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
