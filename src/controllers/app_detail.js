angular.module('modAppDetail', [])
.controller('appDetailController', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	// to-b App详情页截图
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
		tab();
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
		
	$scope.tab = function(index){
		$scope.nowImg = index;
	};
	
}])
.filter('showAsHtml', ['$sce', function($sce){
	return function(input){
		return $sce.trustAsHtml(input);
	}
}]);