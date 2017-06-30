angular.module('modHeader', [])
.controller('headerController', ['$scope', '$http', '$state', '$location', function($scope, $http, $state, $location){
	
	// 导航
	$scope.nowPage = 0;
	$scope.showRightMenu = true;
	$scope.showNav = true;
	$scope.showQuit = false;
	$scope.navList = [
		{
			"title": "首页",
			"href": "index2c"
		},
		{
			"title": "游戏资讯",
			"href": "index2c.news"
		},
		{
			"title": "游戏推荐",
			"href": "index2c.app"
		},
		{
			"title": "游戏众筹",
			"href": "index2c.crowdFunding"
		}
	];
	
	// to-b状态
//	if($location.path().indexOf('/app') >= 0){
//		$scope.showNav = false;
//		$scope.showQuit = true;
//	}
	
	// 根据url判断导航状态
	function path2nav(){
		if($location.path().indexOf('/index2c/crowdfunding') >= 0){
			$scope.nowPage = 3;
		}else if($location.path().indexOf('/index2c/app') >= 0){
			$scope.nowPage = 2;
			$scope.showNav = true;
		}else if($location.path().indexOf('/index2c/news') >= 0){
			$scope.nowPage = 1;
		}else if($location.path().indexOf('/login') >= 0){
			$scope.showRightMenu = false;
		}else if($location.path() === '/index2c'){
			$scope.nowPage = 0;
		}else{
			$scope.nowPage = -1;
		}
	};

	// 导航搜索
	$scope.select = '游戏名';
	$scope.dropDownList = ['游戏名', 'IP名', '新闻标题'];
	$scope.show = false;
	$scope.arrowUp = '';
	$scope.showList = function(){
		$scope.show = !$scope.show;
		if($scope.arrowUp == ''){
			$scope.arrowUp = 'active'
		}else{
			$scope.arrowUp = ''
		}
	};
	$scope.changeVal = function(index){
		$scope.select = $scope.dropDownList[index];
	};
	
	// 众筹通知
	$scope.emit = function(){
		$scope.$emit('crowd-funding', '敬请期待');
	}
	
	// 切换路由成功
	$scope.$on('$stateChangeSuccess', function(){
		path2nav();
		console.log($scope.nowPage);
		if($scope.nowPage != 1 && $scope.nowPage != 2){
			$scope.heightCount('.content');
		};
	})
}]);