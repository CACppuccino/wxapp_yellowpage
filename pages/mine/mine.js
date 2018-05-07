var app = getApp();
var server = require('../../utils/server');
Page({
	data: {},
	onLoad: function () {
		var that = this
		//调用应用实例的方法获取全局数据
	},
	onShow: function () {
    var userInfo = wx.getStorageSync('userInfo')
		this.setData({
			userInfo: userInfo
		});
		console.log(this.data.userInfo);
	},
  goCollect: function () {
    wx.navigateTo({
      url: '../collect/collect',
    })
  }
});

