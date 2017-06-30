angular.module('modApp', [])
.controller('appCController', ['$scope', '$http', '$location', '$interval', function($scope, $http, $location, $interval){
	
	var category = location.search.substring(1).split('=')[1];
	$scope.activeItem = '';
	$scope.page = 1;
	$scope.newspage = 1;
	$scope.btnMore = true;
	
	// 获取选中条件
	$scope.getActiveItem = function(){
		$scope.activeItem = '';
		for(var i=0; i<$scope.filter.length; i++){
			$scope.activeItem += '|'+$scope.filter[i].filterListEN[$scope.filter[i].index];
		}
		$scope.activeItem = $scope.activeItem.substring(1);
	};
	
	if(category == 'tobapp'){
		$scope.filter = [
		{
			"title": "按需求：",
			"row": 0,
			"index": 0,
			"filterList": ['找发行商', '找投资方', '项目出售'],
			"filterListEN": ['Publisher', 'Investment', 'Project']
		},
		{
			"title": "按平台：",
			"row": 1,
			"index": 0,
			"filterList": ['iOS', 'Android'],
			"filterListEN": ['IOS', 'Android']
		}];
		$scope.getActiveItem();
		fetchData(category, $scope.page, $scope.activeItem);
	}else if(category == 'tobip'){
		$scope.filter = [
		{
			"title": "IP授权区域：",
			"row": 0,
			"index": 0,
			"filterList": ['中国大陆', '海外','全球'],
			"filterListEN": ['China', 'Overseas','Global']
		},
		{
			"title": "IP类型：",
			"row": 1,
			"index": 0,
			"filterList": ['动漫', '影视', '小说', '体育', '综艺', '其它'],
			"filterListEN": ['Comic', 'Movies', 'Novel', 'Sports', 'Variety', 'TypeOther']
		},
		{
			"title": "IP风格：",
			"row": 2,
			"index": 0,
			"filterList": ['二次元', '玄幻', '仙侠', '现代', '其它'],
			"filterListEN": ['ACT', 'Fantasy', 'Fairy', 'Modern', 'StyleOther']
		},
		{
			"title": "IP授权范围：",
			"row": 3,
			"index": 0,
			"filterList": ['手游', '小说', '漫画', '周边', '其它'],
			"filterListEN": ['MGame', 'Novel', 'Comic', 'Circum', 'StyleOther']
		}];
		$scope.getActiveItem();
		fetchData(category, $scope.page, $scope.activeItem);
	}else{
		fetchNews($scope.newspage);
	};
	
	$scope.tab2 = function(index2, row){
		$scope.appList = [];
		$scope.filter[row].index = index2;
		$scope.getActiveItem();
		$scope.page = 1;
		fetchData(category, $scope.page, $scope.activeItem);
	};
	
	// App列表页获取数据
	$scope.appList = [];
	$scope.page = 1;
	$scope.checkData = false;
	$scope.btnMore = false;
	function fetchData(category, page, other){
		$http.get('http://'+ $scope.host +'/ajax/api_page_tob_list_app.ashx', {
			params: {
				category: category,
				page: page,
				other: other
			}
		}).success(function (res){
			if(res.data == ''){
				$scope.appList = [];
				$scope.checkData = true;
				$scope.btnMore = true;
//				$scope.$emit('ngRepeatFinished');
				return;
			}
			for(var i=0; i<res.data.length; i++){
				console.log(res.data[i].id);
				$scope.checkData = false;
				if(res.page.total > 1){
					$scope.btnMore = false;
				}
				$scope.appList.push(res.data[i]);
			}
			if(res.page.total == $scope.page){
				$scope.btnMore = true;
			}
		}).error(function (){
			console.log('载入失败，请稍后重试！');
		});
	};
	
	$scope.loadMoreApp = function(){
		$scope.page++;
		fetchData(category, $scope.page, $scope.activeItem);
		
	};
	
	// App列表页顶部循环新闻
	$scope.newsIndex = 0;
	$scope.moveList = [];
	$scope.moveListData = [];
	function fetchMoveNews(){
		$http.get('http://'+ $scope.host +'/ajax/api_page_tob_news_marquee.ashx').success(function (res){
			$scope.moveListData = res;
			$scope.moveList = $scope.moveListData.concat($scope.moveListData);
			if($scope.moveList.length == 2) return;
			$scope.moveNews = function(){
				var runBox = $('#news-move-box ul');
				$scope.newsIndex++;
				if($scope.newsIndex > $scope.moveList.length / 2){
					runBox.css({"top": 0});
					$scope.newsIndex = 1;
				}
				runBox.animate({
				    top: '-26' * $scope.newsIndex +'px'
				}, 500);
			}
			var timer = $interval($scope.moveNews, 5000);
			$scope.stopMove = function(){
				$interval.cancel(timer);
			};
			$scope.runMove = function(){
				timer = $interval($scope.moveNews, 5000);
			};
		}).error(function (){
			console.log('载入失败，请稍后重试！');
		});
	};
	fetchMoveNews();

	// 新闻列表页获取数据
	$scope.newsList = [];
	$scope.loadMoreNews = function(){
		$scope.newspage++;
		fetchNews($scope.newspage);
	};
	function fetchNews(page){
		$http.get('http://'+ $scope.host +'/ajax/api_page_tob_list_news_fy.ashx', {
			params: {
				page: page
			}
		}).success(function(res){
			if(res.data == ''){
				$scope.appList = [];
				$scope.checkData = true;
				$scope.btnMore = true;
				return;
			}
			for(var i=0; i<res.data.length; i++){
				$scope.checkData = false;
				if(res.page.total > 1){
					$scope.btnMore = false;
				}
				$scope.newsList.push(res.data[i]);
			}
			if(res.page.total == $scope.newspage){
				$scope.btnMore = true;
			}
		}).error(function(){
			alert("载入失败");
		});
	};
}]);