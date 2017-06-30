<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="b_newslist.aspx.cs" Inherits="OPD2C.SilkRoad.Site.b.b_newslist" %>

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
                                                <li><a href="b_iplist.aspx?type=tobip">IP</a></li>
                                                <li class="active"><a href="b_newslist.aspx">投资</a></li>
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
                                    <div class="news-list">
                                        <div class="list-box">
                                            <div class="list">
                                                <ul>
                                                    <li ng-repeat="news in newsList">
														<div class="new-box">
															<div class="cover"><img ng-src="{{news.previewImage == '#' ? '/images/no_cover2.png' : news.previewImage}}" /></div>
															<div class="info">
																<h3 ng-bind="news.title"></h3>
																<p ng-bind-html="news.previewContext | showAsHtml"></p>
																<span class="ng-cloak" ng-cloak>{{news.date | date:'yyyy-MM-dd'}}<a href="b_newsdetail.aspx?nid={{news.id}}">阅读全文</a></span>
															</div>
														</div>
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
