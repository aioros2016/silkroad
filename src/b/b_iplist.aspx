<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="b_iplist.aspx.cs" Inherits="OPD2C.SilkRoad.Site.b.b_iplist" %>

<!DOCTYPE html>

<html lang="zh-CN" ng-app="modBIndex" ng-controller="bComController" xmlns:ng="http://angularjs.org" id="ng-app">
<head runat="server">
<%=s_head %>
</head>
<body ng-controller="appCController">
    <form class="clear-margin" id="form1" runat="server">
   <div class="home">
            <div class="container-fluid" >
                <%=s_banner %>
                <div class="content">
                    <div class="common-list app-list bg-layer">
                        <div class="title">
                            <div class="min-width-box">
                                <h2>商务专区</h2>
                            </div>
                            <div class="move-news">
                            	<div class="news-inner-box" id="news-move-box">
                            		<ul>
	                            		<li ng-repeat="item in moveList track by $index" ng-mouseover="stopMove()" ng-mouseout="runMove()"><a href="{{item.herf}}" ng-bind="item.title"></a></li>
	                            	</ul>
                            	</div>
                            	
                            </div>
                        </div>
                        <div class="content-box">
                            <div class="min-width-box clearfix">
                                <div class="main">
                                    <div class="top-bar" ng-hide="nowCate == -1 ? true : false">
                                        <div class="category">
                                            <ul>
                                               <li><a href="b_applist.aspx?type=tobapp">游戏</a></li>
                                                <li class="active"><a href="b_iplist.aspx?type=tobip">IP</a></li>
                                                <li ><a href="b_newslist.aspx">投资</a></li>
                                            </ul>
                                        </div>
                                        <div class="sort-box" ng-show="false">
                                            <div class="search">
                                                <input type="text" />
                                                <div class="icon-search">
                                                    <i class="iconfont icon-sousuo"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="view-list">
                                    	<div class="filter-area">
											<div class="rows" ng-repeat="arr in filter">
												<label ng-bind="arr.title"></label>
												<ul>
													<li class="{{arr.index == $index ? 'active' : ''}}" ng-repeat="menu in arr.filterList" ng-click="tab2($index, arr.row)" ng-bind="menu"></li>
												</ul>
											</div>
										</div>
                                        <div class="list-box sm-icon">
                                            <div class="list">
                                                <ul>
                                                    <li ng-repeat="app in appList">
														<a class="item-box" href="b_ipdetail.aspx?aid={{app.id}}">
															<div class="cover"><img ng-src="{{app.icon == '' ? '/images/no_cover.png' : app.icon}}" /></div>
															<div class="info">
																<h3>{{app.name}}</h3>
																<p>IP授权区域：<span>{{app.iparea}}</span></p>
																<p>IP类型：{{app.iptype}}</p>
																<p>IP风格：<span>{{app.ipstyle}}</span></p>
															</div>
														</a>
													</li>
                                                </ul>
                                                <div class="show-more">
                                                    <a href="javascript:;" ng-hide="btnMore" ng-click="loadMoreApp()">点击加载更多</a>
                                                </div>
                                                <div class="no-more" ng-show="false">暂无更多</div>
                                                <div class="no-more" ng-show="checkData">没有查询到数据</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="more-ip-column">更多精品IP筹备上线</div>
                    </div>
                </div>
                <div class="footer">
                    <%=s_foot %>
                </div>
            </div>
        </div>
        <script src="../js/jquery.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>
        <script src="../js/angular.min.js"></script>
        <script src="/controllers/b-main.js"></script>
    </form>
</body>
</html>