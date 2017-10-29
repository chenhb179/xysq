app.controller("dialog_notice", function($scope, $rootScope, $location, $uibModalInstance, items)
{
    $scope.notice = items;
    $scope.ok = function()
    {
        $uibModalInstance.close();
    };
});