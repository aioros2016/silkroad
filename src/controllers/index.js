angular.module('silkroads', ['modRouter', 'modEntry', 'modHeader', 'modHomeContent', 'modOursApp', 'modNews'])
.controller('homeController', ['$scope', '$http', '$state', '$location', '$anchorScroll', function($scope, $http, $state, $location, $anchorScroll){
	
	$scope.host = $location.host() +':'+ $location.port();
	
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
	
	// 切换路由成功
	$scope.$on('$stateChangeSuccess', function(){
		$anchorScroll();
	});
	
	// 接收众筹通知
	$scope.$on('crowd-funding', function(event,data) {  
		$scope.text = data;
	});
	
	
}])
.filter('showAsHtml', ['$sce', function($sce){
	return function(input){
		return $sce.trustAsHtml(input);
	}
}])
.filter('limit', function(){
	return function(input, num){
		input = input.substring(0, num);
		return input;
	}
})
.filter('filterChn', function (){
	return function (input){
		switch (input){
			case 'game':
				input = '游戏';
				break;
			case 'financing':
				input = '投融资';
				break;
			case 'newthreeboard':
				input = '新三板';
				break;
			case 'activity':
				input = '活动';
				break;
			case 'entrepreneurship':
				input = '创业';
				break;
			case 'information':
				input = '资讯';
				break;
		}
		return input;
	};
})
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
}]);