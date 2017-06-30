<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="b_newsdetail.aspx.cs" Inherits="OPD2C.SilkRoad.Site.b.b_newsdetail" %>

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
							<div class="news-detail-box">
								<div class="detail-title">
									<h3><%=news_title %></h3>
									<div class="from"><%=news_date %></div>
								</div>
								
								<div class="detail-text">
									<div class="text"><%=news_content %></div>
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
