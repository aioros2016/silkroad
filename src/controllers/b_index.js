angular.module('modBIndex', ['modApp', 'modAppDetail'])
.controller('bComController', ['$scope', '$http', '$location', '$interval', function($scope, $http, $location, $interval){
	
	$scope.host = $location.host() +':'+ $location.port();
	
	// b站显示退出登录
	var oQuit = $('.btn-quit');
	if(window.location.pathname != '/login.aspx') oQuit.addClass('show-quit');
	
	$scope.heightCount = function(el,el2){
		var clientH = document.documentElement.clientHeight;
		var oHead = $('.header');
		var oContent = $(el);
		var oFooter = $('.footer');
		var other1 = $(el2);
		var winMinHeight = clientH - oHead.outerHeight(true) - oFooter.outerHeight(true) - other1.outerHeight(true);
		if(oContent.height() < winMinHeight){
			oContent.css({'height': winMinHeight +'px'});
		}else{
			oContent.css({'height': 'auto'});
		}
	};
}])
.directive('onFinishRender', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            };
        }
    };
}])
.filter('showAsHtml', ['$sce', function($sce){
	return function(input){
		return $sce.trustAsHtml(input);
	}
}]);