import _ from 'lodash';

import * as requestService from './request';
import { dataApi, appinfo } from '../config';
import {getToken} from  './authorization'

function filterData(data) {
	try{
		return JSON.parse(data);
	}catch(e){
		
		throw new Error('data format error');
	}
}


export async function getBlogById(id){
	let params = { id };
	let fetchApi = dataApi.blogdetail;
	let strCompiled = _.template(fetchApi);
	fetchApi = strCompiled(params);
	const access_token = await getToken();
	let headers={Authorization:access_token};
	const  result=await requestService.get(fetchApi,headers);
	return result;
}

//根据博客名(joylee)获取博客列表
export async function getBlogList(pageindex){
	let params = { pageindex };
	let fetchApi = dataApi.blog;
	let strCompiled = _.template(fetchApi);
	fetchApi = strCompiled(params);
	const access_token = await getToken();
	let headers={Authorization:access_token};
	const result= await requestService.get(fetchApi,headers);
	return result;
}



//获取首页博客
export async function getrecommendBlogList(pageindex){
	let params = { pageindex };
	let fetchApi = dataApi.recommendblog;
	let strCompiled = _.template(fetchApi);
	fetchApi = strCompiled(params);
	const access_token = await getToken();
	let headers={Authorization:access_token};
	const result= await requestService.get(fetchApi,headers);
	return result;
}


