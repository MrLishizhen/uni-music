import {http} from '../util/http.js';//

//关于banner请求
export const bannerFun=()=>{
	let url = "/banner?type=2";
	return http(url);
}

