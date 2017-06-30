<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="OPD2C.SilkRoad.Site.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
 <%=s_head %>
        <SCRIPT language=javascript>
        function fresh(v) {
            v.src = "Validate.aspx?id=" + Math.floor(Math.random() * 1000);
        }
    </SCRIPT>
</head>
<body>
    <form id="form1" runat="server">
    <div class="home" ui-view="home">
            <div class="container-fluid" >
                 <%=s_banner %>
                <div class="content" ui-view="content">
                    <div class="login bg-layer">
	                    <div class="min-width-box">
		                    <div class="bg-white">
			                    <div class="title">
				                    <h2>欢迎加入掌上丝绸之路<em>会员登录</em></h2>
			                    </div>
			                    <div class="form-area login-area">
				                    <div class="form-horizontal form-login ng-pristine ng-valid">
					                    <div class="input-box">
						                    <div class="form-group">
							                    <label  class="col-sm-3 control-label">用户名</label>
							                    <div class="col-sm-9" >
								                    <input type="text" class="form-control input-lg" id="inputUser" name="inputUser" placeholder="Username" maxlength="30" runat="server">
							                    </div>
						                    </div>
						                    <div class="form-group">
					    	                    <label class="col-sm-3 control-label">密码</label>
						                        <div class="col-sm-9">
						                            <input type="password" class="form-control input-lg" id="inputPassword" name="inputPassword" placeholder="Password" maxlength="30" runat="server">
						                        </div>
						                    </div>
                                            <div class="form-group">
					    	                    <label  class="col-sm-3 control-label">验证码</label>
						                        <div class="col-sm-9">
						                            <input type="text" class="form-control input-lg" id="inputCode" name="inputCode" placeholder="Code" maxlength="6" runat="server">
                                                </div>
						                    </div>
                                            <div class="form-group">
					    	                    <label  class="col-sm-3 control-label"></label>
						                        <div class="col-sm-9">
                                                    <img src="Validate.aspx" border=0 id="authcode_img" name="Img1" onclick="fresh(this);"  />&nbsp;&nbsp;<a onclick="fresh(Img1);" style="cursor:pointer; ">换一张</a>
                                                </div>
						                    </div>
					                    </div>
					                    <div class="form-group">
					                        <div class="margin-left col-sm-9">
					    	                    <div class="checkbox">
                                                    <asp:Button ID="btn_p1_submit"  runat="server" Text="登录" OnClientClick="return checkForm()" OnClick="btn_p1_submit_Click" CssClass="btn btn-warning btn-lg"/>
					    		                    
						                            <label>
                                                         <asp:CheckBox ID="chkauto" runat="server" Checked="false" EnableViewState="False" Text="" />下次自动登录
						                            </label>
					    	                    </div>
					                        </div>
					                    </div>
                                        </div>
			                    </div>
		                    </div>
	                    </div>
                    </div>
                    </div>
                <div class="footer" ui-view="footer">
                     <%=s_foot %>
                </div>
            </div>
        </div>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script charset="utf-8" src="/js/login_check.js" type="text/javascript"></script>
       
        <script>
		(function(){
			var clientH = document.documentElement.clientHeight;
			var oHead = $('.header');
			var oContent = $('.content');
			var oFooter = $('.footer');
			var winMinHeight = clientH - oHead.outerHeight(true) - oFooter.outerHeight(true);
			if(oContent.height() < winMinHeight) oContent.css({'height': winMinHeight +'px'});
		}());
        </script>
    </form>
</body>
</html>
