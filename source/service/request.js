import _ from 'lodash';


const timeout = 15000;

function filterJSON(res) {
    try {
        if (res.headers.get("content-length") > 0) {
            return res.json();
        }
    }
    catch (e) {
        throw new Error('data format error');
    }
}

function filterStatus(res) {
    if (res.ok) {
        return res;
    } else {
        throw new Error('');
    }
}

function timeoutFetch(ms, promise) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("fetch time out"));
        }, ms);
        promise.then(
            (res) => {
                clearTimeout(timer);
                resolve(res);
            },
            (err) => {
                clearTimeout(timer);
                reject(err);
            }
        );
    })
}

export async function  request(uri, type = "GET", headers={}, data = "") {
    let fetchOption = {
        method: type
    };

    if(headers)
    {
        fetchOption.headers=headers;
    }

    if (type === "POST") {
        fetchOption.body = data;
    }

    let result=await fetch(uri, fetchOption);
    return result.json();
}

export async function get(uri, headers = {}) {
    return await request(uri, "GET", headers);

}

export async function post(uri, data = "", headers = {}) {
    if (!headers["Content-type"]) {
        headers["Content-type"] = 'multipart/form-data';
    }
    return  await request(uri, "POST", headers, data);
}

export function remove(uri, headers = {}) {
    return request(uri, "DELETE", headers);
}
