// map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat:'',
    lng:'',
    markers:[{ }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var map = wx.getStorageSync('map')
    var markers = [{
      id:0,
      iconPath: '/imgs/index/icon_1.jpg',
      lat: map.lat,
      lng: map.lng,
      width: 50,
      height: 50
    }] 
    this.setData({
      markers: markers,    
      lat: map.lat,
      lng: map.lng
    })
    console.log('success set the map: ', map)
    console.log('success set the marker: ', markers)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})