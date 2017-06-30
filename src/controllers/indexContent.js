angular.module('modHomeContent', [])
.controller('indexContentController', ['$scope', '$http', '$log', function($scope, $http, $log){
	
	// 首页顶部banner
	$http.get('http://'+ $scope.host +'/ajax/api_page_index_show.ashx?pid=0201').success(function (res){
		$scope.topBanner = res;
	}).error(function (){
		console.log('载入失败，请稍后重试！');
	});
	
	// 首页推荐手游
	$scope.nowApp = 0;
	$scope.tabApp = function(index){
		$scope.nowApp = index;
	};
	$http.get('http://'+ $scope.host +'/ajax/api_page_index_show.ashx?pid=0202').success(function (res){
		$scope.appSlide = res;
	}).error(function (){
		console.log('载入失败，请稍后重试！');
	});
	
	// 首页新闻列表
	$scope.nowCategory = 0;
	$scope.tabNews = function(index){
		$scope.nowCategory = index;
	};
	$http.get('http://'+ $scope.host +'/ajax/api_page_index_news_total.ashx').success(function (res){
		$scope.newsList = res;
	}).error(function (){
		console.log('载入失败，请稍后重试！');
	});
	
	// 首页最新游戏列表
	$http.get('http://'+ $scope.host +'/ajax/api_page_index_games.ashx').success(function (res){
		$scope.appList = res;
	}).error(function (){
		console.log('载入失败，请稍后重试！');
	})
	// 首页通栏广告
	$http.get('http://'+ $scope.host +'/ajax/api_page_index_show.ashx?pid=0203').success(function (res){
		$scope.columnImg = {
			"background-image": "url("+res[0].img+")",
			"href": res[0].href
		}
	}).error(function (){
		console.log('载入失败，请稍后重试！');
	});
	
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

		// 首页banner
		(function(){
			var oList = $('.banner-slide ul');
			var aBanner = $('.banner-slide li');
			var oPrev = $('.banner-slide .prev');
			var oNext = $('.banner-slide .next');
			var iNow = 0;
			var iSpeed = 4000;
		
			oNext.click(function(){
				clearInterval(timer);
				next();
				timer = setInterval(next, iSpeed);
			});
			
			function next() {
				iNow++;
				if (iNow == aBanner.length) {
					iNow = 0;
				}
				tab();
			};
			
			oPrev.click(function(){
				clearInterval(timer);
				iNow--;
				if (iNow == -1){
					iNow = aBanner.length - 1;
				}
				tab();
				timer = setInterval(next, iSpeed);
			});
			
			var timer = setInterval(next, iSpeed);
			
			aBanner.mouseover(function(){
				clearInterval(timer);
			});
			
			aBanner.mouseout(function() {
				timer = setInterval(next, iSpeed);
			});
			
			function tab() {
				var iWidth = $('.banner-slide li:eq(0)').width();
				oList.stop().animate({
				    left: '-'+ iWidth * iNow +'px'
				}, 500);
			};
			
			$scope.$on('$stateChangeStart', function(){
				clearInterval(timer);
			});
		}());
	});
}]);

