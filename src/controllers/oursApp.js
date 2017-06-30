angular.module('modOursApp', ['modDetail'])
.controller('oursAppController', ['$scope', '$http', '$state', '$stateParams', '$location', function($scope, $http, $stateParams, $state, $location){
	$scope.nowCate = -1;
	$scope.appList = [];
	$scope.page = 1;
	
	function fetchData(page){
		$http.get('http://'+ $scope.host +'/ajax/api_page_list_app.ashx', {
			params: {
				page: page
			}
		}).success(function (res){
			for(var i=0; i<res.data.length; i++){
				$scope.appList.push(res.data[i]);
			}
			$scope.totalPage = res.page.total;
			$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent){
				$scope.heightCount('.view-list', '.common-list .title');
			});
		}).error(function (){
			console.log('载入失败，请稍后重试！');
		});
	};
	$scope.loadMore = function(){
		$scope.page++;
		fetchData($scope.page);
	}
	
	$scope.$on('$stateChangeSuccess', function(){
		fetchData($scope.page);
	});
}])