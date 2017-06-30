angular.module('modDetail', [])
.controller('detailController', ['$scope', '$http', '$stateParams', '$location', function($scope, $http, $stateParams, $location){
	
	$scope.nowPage = 0;
	
	path2nav();
	function path2nav(){
		if($location.path().indexOf('/index2c/newsDetail') >= 0){
			$scope.nowPage = 5;
		}else if($location.path().indexOf('/index2c/appDetail') >= 0){
			$scope.nowPage = 4;
		};
	};
	
	$scope.$on('$stateChangeSuccess', function(){
		if($scope.nowPage == 4){
			if(!$stateParams) return;
			$scope.appId = $stateParams.id;
			$http.get('http://'+ $scope.host +'/ajax/api_page_detail_app.ashx?aid='+$scope.appId).success(function (res){
				$scope.appDetail = res;
				$scope.heightCount('.view-list', '.common-list .title');
				var btnShare = $('.bdsharebuttonbox a');
				var title = $('.breadcrumb .active');
				var shareTxt = '';
				btnShare.click(function(){
					shareTxt = title.html();
				});
				
				//初始化分享
		//		window._bd_share_config = {	
		//			common : {
		//				onBeforeClick : function(cmd, config){
		//					config.bdText = "掌上丝绸之路 - " + shareTxt;
		//					return config;
		//				},
		//				bdDesc : '自定义分享摘要'
		//			},
		//			share : [{
		//				"bdSize" : 24
		//			}]
		//		}
		//		window._bd_share_main.init();
			}).error(function (){
				console.log('载入失败，请稍后重试！');
			});
		}else if($scope.nowPage == 5){
			$scope.articleId = $stateParams.id;
			$http.get('http://'+ $scope.host +'/ajax/api_page_detail_news.ashx?id=' + $scope.articleId).success(function (res){
				$scope.newsDetail = res;
			}).error(function (){
				console.log('载入失败，请稍后重试！');
			});
		};
	});
	
	
	if($location.path().indexOf('/index2c/appDetail') >= 0){
		$scope.breadCrumbs = [{
			"title": "首页",
			"href": "index2c"
		},
		{
			"title": "手游",
			"href": "index2c.app"
		}];
	}else if($location.path().indexOf('/appDetail') >= 0){
		$scope.breadCrumbs = [{
			"title": "手游",
			"href": "app"
		}];
	}
	
	// App详情
	$scope.appId = $stateParams.id;
	$scope.nowImg = 0;
	
	// App详情页截图
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent){
		$scope.swipe = function(){
			var oList = $('.big-pic ul');
			var oSmList = $('.small-pic ol');
			var aBanner = $('.small-pic li');
			var oBanner1 = $('.big-pic li:eq(0)');
			var aSmallPic = $('.small-pic li');
			var oSmallPic1 = $('.small-pic li:eq(0)');
			var oPrev = $('.big-pic .prev');
			var oNext = $('.big-pic .next');
			var iNow = 0;
			var iNow2 = 0;
			var active = 0;
			aSmallPic.click(function(){
				iNow = iNow2 = $(this).index();
				tab();
			});
		
			oNext.click(function(){
				next();
				
			});
			
			function next() {
				var iSmWidth = oSmallPic1.outerWidth(true);
				iNow++;
				iNow2++;
				if (iNow == aBanner.length) {
					iNow = 0;
					iNow2 = 0;
					active = 0;
					tabPic();
				};
				if(iNow2 > 3 && iNow2 < aBanner.length){
					active++;
					tabPic();
				};
				tab();
			};
			
			oPrev.click(function(){
				iNow--;
				iNow2--;
				if (iNow == -1){
					iNow = aBanner.length - 1;
				}
				
				if(iNow2 > aBanner.length - 4){
					active--;
					tabPic();
				}
				if(iNow2 == -1){
					iNow2 = aBanner.length - 1;
					active = aBanner.length - 4;
					tabPic();
				}
				tab();
			});
			
			function tab() {
				var iWidth = oBanner1.outerWidth(true);
				oList.stop().animate({
				    left: '-'+ iWidth * iNow +'px'
				}, 500);
				
				aSmallPic.removeClass("active");
				aSmallPic.eq(iNow).addClass("active");
			};
			function tabPic(){
				var iSmWidth = oSmallPic1.outerWidth(true);
				oSmList.stop().animate({
				    left: '-'+ iSmWidth * active +'px'
				}, 500);
			};
		};
		$scope.swipe();
	});
	$scope.tab = function(index){
		$scope.nowImg = index;
	}
}]);

