angular.module('modRouter', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	
	// 全站路由设置
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',{
        url: '/',
        views: {
            'home': {
                templateUrl: '/views/home.html',
                controller: 'entryController'
            }
        }
    })
    .state('index2c',{
        url: '/index2c',
        views: {
        	'home': {
                templateUrl: '/views/container.html',
                controller: 'homeController'
            },
            'header@index2c': {
                templateUrl: '/views/header.html',
                controller: 'headerController'
            },
            'content@index2c': {
            	templateUrl: '/views/index_content.html',
            	controller: 'indexContentController'
            },
            'footer@index2c': {
            	templateUrl: '/views/footer.html'
            }
        }
    })
    .state('login',{
        url: '/login',
        views: {
        	'home': {
                templateUrl: '/views/container.html'
            },
        	'header@login': {
                templateUrl: '/views/header.html',
                controller: 'headerController'
            },
            'content@login': {
            	templateUrl: '/views/login.html',
            	controller: 'loginController'
            },
            'footer@login': {
            	templateUrl: '/views/footer.html'
            }
        }
    })
    .state('index2c.app',{
        url: '/app',
        views: {
        	'home': {
                templateUrl: '/views/container.html'
            },
            'content@index2c': {
                templateUrl: '/views/app_content.html',
                controller: 'oursAppController'
            },
            'main@index2c.app': {
            	templateUrl: '/views/ours_app_list.html',
                controller: 'oursAppController'
            }
        }
    })
    .state('index2c.appDetail',{
        url: '/appDetail/:id',
        views: {
        	'home': {
                templateUrl: '/views/container.html'
            },
            'content@index2c': {
                templateUrl: '/views/app_content.html',
                controller: 'oursAppController'
            },
            'main@index2c.appDetail': {
            	templateUrl: '/views/app_detail.html',
                controller: 'detailController'
            }
        }
    })
//  .state('app',{
//      url: '/app',
//      views: {
//      	'home': {
//              templateUrl: '/views/container.html'
//          },
//      	'header@app': {
//              templateUrl: '/views/header.html',
//              controller: 'headerController'
//          },
//          'content@app': {
//              templateUrl: '/views/app_content.html',
//              controller: 'appController'
//          },
//          'main@app': {
//          	templateUrl: '/views/app_list.html',
//              controller: 'appController'
//          },
//          'footer@app': {
//          	templateUrl: '/views/footer.html'
//          }
//      }
//  })
//  .state('app.cp',{
//      url: '/cpList'
//  })
//  .state('app.business',{
//      url: '/businessList'
//  })
//  .state('app.issued',{
//      url: '/issuedList'
//  })
//  .state('app.ip',{
//      url: '/ipList'
//  })
//  .state('appDetail',{
//      url: '/appDetail/:id',
//      views: {
//      	'home': {
//              templateUrl: '/views/container.html'
//          },
//      	'header@appDetail': {
//              templateUrl: '/views/header.html',
//              controller: 'headerController'
//          },
//          'content@appDetail': {
//              templateUrl: '/views/app_content.html',
//              controller: 'appController'
//          },
//          'main@appDetail': {
//          	templateUrl: '/views/app_detail.html',
//              controller: 'appController'
//          },
//          'footer@appDetail': {
//          	templateUrl: '/views/footer.html'
//          }
//      }
//  })
    .state('index2c.news',{
        url: '/news',
        views: {
        	'home': {
                templateUrl: '/views/container.html'
            },
            'content@index2c': {
                templateUrl: '/views/news_content.html',
                controller: 'newsController'
            },
            'main@index2c.news': {
            	templateUrl: '/views/news_list.html',
                controller: 'newsController'
            }
        }
    })
    .state('index2c.news.business',{
        url: '/newsBusiness'
    })
    .state('index2c.news.stock',{
        url: '/newsStock'
    })
    .state('index2c.news.event',{
        url: '/newsEvent'
    })
    .state('index2c.news.invest',{
        url: '/newsInvest'
    })
    .state('index2c.newsDetail',{
        url: '/newsDetail/:id/',
        views: {
        	'home': {
                templateUrl: '/views/container.html'
           },
            'content@index2c': {
                templateUrl: '/views/news_content.html',
                controller: 'detailController'
            },
            'main@index2c.newsDetail': {
            	templateUrl: '/views/news_detail.html',
                controller: 'detailController'
            }
        }
    })
    .state('index2c.crowdFunding',{
        url: '/crowdfunding',
        views: {
        	'home': {
                templateUrl: '/views/container.html'
            },
            'content@index2c': {
            	templateUrl: '/views/crowd_funding.html'
            }
        }
    })
    .state('index2c.project',{
        url: '/project',
        views: {
        	'home': {
                templateUrl: '/views/container.html'
            },
            'content@index2c': {
                templateUrl: '/views/project.html'
            }
        }
    })
    .state('index2c.job',{
        url: '/job',
        views: {
        	'home': {
                templateUrl: '/views/container.html'
            },
            'content@index2c': {
                templateUrl: '/views/job.html'
            }
        }
    })
}])