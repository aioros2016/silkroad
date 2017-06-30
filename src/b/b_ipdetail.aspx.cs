using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace OPD2C.SilkRoad.Site.b
{
    public partial class b_ipdetail : System.Web.UI.Page
    {
        public string ip_icon = string.Empty;
        public string ip_area = string.Empty;
        public string ip_type = string.Empty;
        public string ip_style = string.Empty;
        public string ip_infor = string.Empty;
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
            string aid = Request.QueryString["aid"] == null ? "000" : Request.QueryString["aid"].ToString();//游戏ID
            BLL.OPD2C_WEB.GameInfo oper = new BLL.OPD2C_WEB.GameInfo();
            Model.OPD2C_WEB.GameInfo type = new Model.OPD2C_WEB.GameInfo();
            if (aid != "000")
            {
                type = oper.Game_Detail(Convert.ToInt32(aid));
                ip_icon = type.GameIcon.ToString();
                ip_area = type.GameIPArea.ToString();
                ip_type = type.GameIPType.ToString();
                ip_style = type.GameIPStyle.ToString();
                ip_infor = type.GameInfor.ToString();
                r_b_pic_list.DataSource = str_to_DataTable(type.GamePic_B.ToString());
                r_b_pic_list.DataBind();
                r_s_pic_list.DataSource = str_to_DataTable(type.GamePic_S.ToString());
                r_s_pic_list.DataBind();
            }
        }
        public DataTable str_to_DataTable(string s_str)
        {
            string[] s_str_split = s_str.Split('|');
            DataTable dt = new DataTable();
            dt.Columns.Add("pic_url");
            for (int i = 0; i < s_str_split.Length; i++)
            {
                DataRow drow = dt.NewRow();
                if (s_str_split[i].ToString() != "")
                {
                    drow[0] = s_str_split[i];
                    dt.Rows.Add(drow);
                }

            }
            return dt;
        }
    }
}