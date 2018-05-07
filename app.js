var server = require('./utils/server');
App({
	onLaunch: function () {
		console.log('App Launch')
		var self = this;
		var rd_session = wx.getStorageSync('rd_session');
    wx.getUserInfo({
      success:function(res){
        console.log('userinfo',res.userInfo);
        wx.setStorageSync('userInfo', res.userInfo);
      },
      fail:function(){
        console.log('failed to get info')
      }
    })
		
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	globalData: {
		hasLogin: false,
		cartList: [],
		userInfo: [],
    shops: [/*{ "id": 1, "send_price": 4.0, "href": "http://waimai.meituan.com/restaurant/144869939521273905?pos=0", "send_time": "49", "start_price": "20", "logo": "https://b.zmtcdn.com/data/reviews_photos/2d5/e4f34e1215939754b1fbec98c29012d5_1453686927.JPG?fit=around%7C160%3A160&crop=160%3A160%3B%2A%2C%2A", "restaurant_name": "The Cupping Room" },*/ ]
  }
})
	
