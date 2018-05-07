function __args() {
	var setting = {};
	if (arguments.length === 1 && typeof arguments[0] !== 'string') {
		setting = arguments[0];
	} else {
		setting.url = arguments[0];
		if (typeof arguments[1] === 'object') {
			setting.data = arguments[1];
			setting.success = arguments[2];
		} else {
			setting.success = arguments[1];
		}
	}
	if (setting.url.indexOf('https://') !== 0) {
		setting.url = '' + setting.url;
	}
	return setting;
}
function __json(method, setting) {
	setting.method = method;
	setting.header = {
		'content-type': 'application/json'
	};
	wx.request(setting);
}

function formatTime(date) {
  const year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds();
  
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function isEmptyObject(obj)
{
	if ((typeof obj === "object" && !(obj instanceof Array)) || ((obj instanceof Array) && obj.length <= 0 )){  
		var isEmpty = true;  
		for (var prop in obj){  
			isEmpty = false;  
			break;  
		}
		return isEmpty; 
	}
	return false; 
}

function filterEmptyObject(list){
	var cartList = [];
	for(var index in list)
	{
		if(!this.isEmptyObject(list[index])){
			cartList.push(list[index])
		}
	}
	return cartList;	
}

function selectedShopDetail(shopId){
	var app = getApp();
	for (var i = 0; i < app.globalData.shops.length; ++i) {
		if (app.globalData.shops[i].id == shopId) {
			return app.globalData.shops[i]
		}
	}

	return null;
}

module.exports = {
	getJSON: function () {
		__json('GET', __args.apply(this, arguments));
	},
	postJSON: function () {
		__json('POST', __args.apply(this, arguments));
	},
	formatTime: formatTime,
	isEmptyObject: isEmptyObject,
	selectedShopDetail: selectedShopDetail,
	filterEmptyObject: filterEmptyObject
}
