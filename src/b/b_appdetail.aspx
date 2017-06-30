<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="b_appdetail.aspx.cs" Inherits="OPD2C.SilkRoad.Site.b.b_appdetail" %>

<!DOCTYPE html>

<html lang="zh-CN" ng-app="modBIndex" ng-controller="bComController" xmlns:ng="http://angularjs.org" id="ng-app">
<head runat="server">
<%=s_head %>
</head>
<body ng-controller="appDetailController">
    <form class="clear-margin" id="form1" runat="server">
    <div class="container-fluid">
	<%=s_banner %>
	<div class="content">
		<div class="common-list app-list bg-layer">
			<div class="title">
				<div class="min-width-box">
					<h2>商务专区</h2>
				</div>
			</div>
			<div class="content-box">
				<div class="min-width-box clearfix">
					<div class="main">
						<div class="view-list">
							<div class="app-detail">
								<div class="detail-nav" ng-show="false">
									<ol class="breadcrumb">
										<li><a href="index.html">首页</a></li>
										<li>游戏</li>
									</ol>
								</div>
								<div class="detail-box">
									<div class="detail-data app-data">
										<div class="pull-left">
											<div class="cover"><img ng-src="<%=app_icon %>" /></div>
											<div class="bd-share" ng-show="false">
												<span>分享到：</span>
												<div class="bdsharebuttonbox" data-tag="share_1">
													<a class="bds_more" data-cmd="more">
													<a class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
													<a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
													<a class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
													<a class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
													<a class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
												</div>
											</div>
											
										</div>
										<div class="pull-left">
											<div class="info">游戏种类：<span><%=app_type %></span><br />平台：<span ><%=app_platform %></span><br />阶段：<%=app_phase %><br />完成度：<%=app_percentage %><br />需求目标：<span><%=app_need %></span><a class="email" href="mailto:silkroad@opd2c.com">联系我们</a></div>
										</div>
										
									</div>
									<div class="detail-content">
										<%=app_infor %>
									</div>
									<div class="app-picture" <%=s_style %>>
										<h3>游戏图片</h3>
										<div class="picture-box">
											<div class="big-pic">
												<div class="big-pic-mask">
													<ul>
                                                        <asp:Repeater ID="r_b_pic_list" runat="server">
			                                                <ItemTemplate>
                                                                <li ng-click="tab($index)"><img src="<%#Eval("pic_url") %>" /></li>
                                                            </ItemTemplate>
                                                        </asp:Repeater>    
													</ul>
												</div>
												<a class="prev" href="javascript:;"><i class="iconfont icon-arrow-left"></i></a>
												<a class="next" href="javascript:;"><i class="iconfont icon-arrow-right"></i></a>
											</div>
											<div class="small-pic">
												<div class="small-pic-mask">
													<ol>
                                                        <asp:Repeater ID="r_s_pic_list" runat="server">
			                                                <ItemTemplate>
														        <li class="" ><img src="<%#Eval("pic_url") %>" /></li>
													        </ItemTemplate>
                                                        </asp:Repeater>    
                                                    </ol>
												</div>
											</div>
										</div>
									</div>
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
<script src="../js/jquery.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/angular.min.js"></script>
<script src="/controllers/b-main.js"></script>
</form>
</body>
</html>
