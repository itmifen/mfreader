
//app配置信息
export const appinfo={
	blogname:"joylee",
	logourl:"https://pic.cnblogs.com/face/42030/20171003230725.png",
	cnblogsApi:"https://api.cnblogs.com",
	pageSize:10
};

//cnblogs授权信息
export const accessInfo={
    clientId:"*********",
    clientSecret:"*********"
};


//接口地址
export const dataApi = {
	token:appinfo.cnblogsApi+"/token",
	blog:appinfo.cnblogsApi+"/api/blogs/"+appinfo.blogname+"/posts?pageIndex=<%=pageindex%>",
	blogdetail:appinfo.cnblogsApi+"/api/blogposts/<%=id%>/body",
	recommendblog:appinfo.cnblogsApi+"/api/blogposts/@sitehome?pageIndex=<%=pageindex%>&pageSize=10"
};

