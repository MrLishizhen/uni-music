//设置全局路径
let baseUrl = "http://123.57.223.218:3001";
let date = new Date(); //声明时间对象

export function http(url) {

	return new Promise(function(resolve,reject) {
		return uni.request({
			url: baseUrl + url, //配合时间戳
			method: "GET",
			success(res) {
				if (res.statusCode == 200) {
					// resolve(res.)
					resolve(res.data);
					
				}else{
					uni.showToast({
						title: res.errMsg,
						icon:'none',
					});
				}
			},
			fail:function(rej){
				uni.showToast({
					title: '请求错误',
					icon:"none",
				});
				reject(new Error());
			}
		})
	})

}
