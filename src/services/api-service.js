const axios = require('axios');
const config = require('../config/config');

function completeUrl(url) {
    return config.posterApiUrl + url + `${!url.includes('?') ? '?' : '&'}token=${config.posterApiToken}`;
}

function getRequest(url){
    return axios.get(completeUrl(url)).then(res => {
        if(res.data.error){
            throw new Error(res.data.error);
        }
        return res.data.response;
    }).catch(error => {throw new Error(error.response.data.message)});
}

function postRequest(url, body){
    return axios.post(completeUrl(url), body).then(res => {
        if(res.data.error){
            throw new Error(res.data.error);
        }
        return res.data.response;
    }).catch(error => {
        console.log(error)
        throw new Error(error.response.data.message)
    });
}

module.exports = {
    get: getRequest,
    post: postRequest,
};