using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OPD2C.SilkRoad.Site.b
{
    public partial class b_newsdetail : System.Web.UI.Page
    {
        public string news_title = string.Empty;
        public string news_date = string.Empty;
        public string news_content = string.Empty;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Help.Help.Help.GetIFLogin())
                {
                    Bind();

                }
                else
                {
                    Response.Redirect("/login.aspx", false);
                }
            }
        }
        private void Bind()
        {
            string nid = Request.QueryString["nid"] == null ? "000" : Request.QueryString["nid"].ToString();//新闻ID
            BLL.OPD2C_WEB.NewsInfo oper = new BLL.OPD2C_WEB.NewsInfo();
            Model.OPD2C_WEB.NewsInfo type = new Model.OPD2C_WEB.NewsInfo();
            if (nid != "000")
            {
                type = oper.News_Detail(Convert.ToInt32(nid));
                news_title = type.Title.ToString();
                news_date = type.CreateDate.ToShortDateString().Replace("/", "-");
                news_content = type.Content.ToString();

            }
        }
    }
}