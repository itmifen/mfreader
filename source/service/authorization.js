import _ from 'lodash';

import * as requestService from './request';
import { accessInfo,dataApi } from '../config';
import {getItem,setItem,clear} from '../common/storage';


export async function getToken()
{
    let token= await getItem("Authorization");
    let expiresin= await getItem("AuthorizationExpiresin");

    //接口401时,尝试清空数据
    await clear;

        if((token)&&(new Date(expiresin)>new Date()))
        {
            return token;
        }
        else
        {
            let client_id=accessInfo.clientId;
            let client_secret=accessInfo.clientSecret;
            let fetchApi = dataApi.token;

            let formdata = new FormData();

            formdata.append("client_id", client_id);
            formdata.append("client_secret", client_secret);
            formdata.append("grant_type", "client_credentials");

            let response= await requestService.post(fetchApi,formdata);
            const authorization=response.token_type+" "+response.access_token;
            await setItem("Authorization",authorization);
            await setItem("AuthorizationExpiresin",new Date(_.now() + response.expires_in*1000));

            return authorization;
        }

};