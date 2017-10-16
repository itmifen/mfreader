
//app配置信息
export const appinfo={
	blogname:"joylee",
	logourl:"https://pic.cnblogs.com/face/42030/20171003230725.png",
	cnblogsApi:"https://api.cnblogs.com",
	pageSize:10
};

//cnblogs授权信息
export const accessInfo={
	//这里是博客园申请的api相关信息
	clientId:"",
	clientSecret:""
};

//接口地址
export const dataApi = {
	token:appinfo.cnblogsApi+"/token",
	blog:appinfo.cnblogsApi+"/api/blogs/"+appinfo.blogname+"/posts?pageIndex=<%=pageindex%>",
	blogdetail:"https://api.cnblogs.com/api/blogposts/<%=id%>/body",
	recommendblog:"https://api.cnblogs.com/api/blogposts/@sitehome?pageIndex=<%=pageindex%>&pageSize=10"
};

