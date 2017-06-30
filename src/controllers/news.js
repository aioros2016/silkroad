angular.module('modNews', ['modDetail'])
.controller('newsController', ['$scope', '$http', '$stateParams', '$state', '$location', function($scope, $http, $stateParams, $state, $location){

	function path2app(){
		if($location.path().indexOf('/newsBusiness') >= 0){
			$scope.nowCate = '0202';
		}else if($location.path().indexOf('/newsStock') >= 0){
			$scope.nowCate = '0203';
		}else if($location.path().indexOf('/newsEvent') >= 0){
			$scope.nowCate = '0204';
		}else if($location.path().indexOf('/newsInves') >= 0){
			$scope.nowCate = '0205';
		}else if($location.path() === '/index2c/news'){
			$scope.nowCate = '0201';
		}else{
			$scope.nowCate = -1;
		}
	};
	
	$scope.category = [{
		"name": "全部",
		"href": "index2c.news"
	},
	{
		"name": "投融资",
		"href": "index2c.news.business"
		
	},
	{
		"name": "新三板",
		"href": "index2c.news.stock"
		
	},
	{
		"name": "活动",
		"href": "index2c.news.event"
		
	},
	{
		"name": "创业",
		"href": "index2c.news.invest"
		
	}];
	
	// 新闻列表页获取数据
	$scope.page = 1;
	$scope.newsList = [];
	function fetchData(page){
		$http.get('http://'+ $scope.host +'/ajax/api_page_list_news_fy.ashx', {
			params: {
				page: page
			}
		}).success(function (res){
			for(var i=0; i<res.data.length; i++){
				$scope.newsList.push(res.data[i]);
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
	};
	
	$scope.$on('$stateChangeSuccess', function(){
		fetchData($scope.page);
	});
}]);