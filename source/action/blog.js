import {
    createAction
} from 'redux-actions';
import * as types from '../constant/actiontype';
import * as blogService from '../service/blogService';

import { dataApi, appinfo } from '../config';

import {formatDateTime} from '../common/tools';


export const REQUEST_BLOG = 'REQUEST_BLOG';
export const RECEIVE_BLOG = 'RECEIVE_BLOG';
export const RECEIVE_RECOMMENDBLOG="RECEIVE_RECOMMENDBLOG";
export const REQUEST_RECOMMENDBLOG="REQUEST_RECOMMENDBLOG";


export const REQUEST_DETAIL = 'REQUEST_DETAIL';
export const RECEIVE_DETAIL = 'RECEIVE_DETAIL';


export const requestBlog = () => ({
    type: REQUEST_BLOG
});

export const receiveBlog = (json) => ({
    type: RECEIVE_BLOG,
    posts: json
});

export const  receiveDetail = (id, json) => ({
    type: RECEIVE_DETAIL,
    id,
    detail:json
});


export const  requestrecommendBlog = (json) => ({
    type: REQUEST_RECOMMENDBLOG,
});

export const  receiverecommendBlog = (json) => ({
    type: RECEIVE_RECOMMENDBLOG,
    recommendblogs:json
});




export const getBlogList=(pageindex)=>{
    return (dispatch)=>
    {
        dispatch(requestBlog());
        return  blogService.getBlogList(pageindex).then((json)=>{
            let list= json;
            let count=list.length;
            for(let i=0;i<count;i++)
            {
                list[i]["PostDate"]=formatDateTime(list[i]["PostDate"]);
                //if(list[i]["Avatar"]=="https://pic.cnblogs.com/face/")
                //{
                //    list[i]["Avatar"]=appinfo.logourl;
                //}
            }
            dispatch(receiveBlog(list));
        });
    }
};


export const getrecommendBlogList=(pageindex)=>{
    return (dispatch)=>
    {
        dispatch(requestrecommendBlog());
        return  blogService.getrecommendBlogList(pageindex).then((json)=>{
            let list= json;
            let count=list.length;
            for(let i=0;i<count;i++)
            {
                list[i]["PostDate"]=formatDateTime(list[i]["PostDate"]);
                if(list[i]["Avatar"]=="https://pic.cnblogs.com/face/")
                {
                    list[i]["Avatar"]=appinfo.logourl;
                }
            }
            dispatch(receiverecommendBlog(list));
        });
    }
};




export const getBlogDetail=(id)=>{
    return (dispatch)=>
    {
        return  blogService.getBlogById(id).then((json)=>{
            let result= json;
            dispatch(receiveDetail(id,result));
        });
    }
};


    

