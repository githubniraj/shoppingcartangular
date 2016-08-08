angular.module('app.appCtrl').controller('appCtrl', ['$scope','itemListService',function($scope,itemListService) {

    $scope.itemTypes=itemListService.itemTypes;
    $scope.itemlist=itemListService.items;
    $scope.selectId=0;

    $scope.setSelectedItem=function (selectedId) {
        $scope.selectId=selectedId;
        $scope.sortedlist=[];
        for(var i=0;i<$scope.itemlist.length;i++){
            if($scope.itemlist[i].itemType==$scope.selectId){
                console.log($scope.selectId);
                $scope.sortedlist.push($scope.itemlist[i]);
            }
        }
    };

}]);
