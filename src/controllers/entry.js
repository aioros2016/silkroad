angular.module('modEntry', [])
.controller('entryController', ['$scope', '$interval', function($scope, $interval){
	
	// 入口页背景效果
	(function bgSlide(){
		var aBg = $('#bg-box div');
		var iNow = 0;
		var iZindex = 0;
		$scope.timer = $interval(function(){
			iNow++;
			iZindex++;
			if(iNow == aBg.length) iNow = 0;
			aBg.removeClass('active').removeAttr("style");
			aBg.removeClass('prev')
			$('#bg-box div:eq('+(iNow-1)+')').addClass('prev');
			$('#bg-box div:eq('+iNow+')').addClass('active').animate({
				"opacity": 1
			}, 300);
		}, 5000);
		$scope.$on('$stateChangeStart', function(){
			$interval.cancel($scope.timer);
		});
	}());
}]);

