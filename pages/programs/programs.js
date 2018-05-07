// pages/programs/programs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  toMiniPro: function (e) {
    var name = e.currentTarget.dataset.name;
    wx.navigateToMiniProgram({
      appId: name,
      path: 'pages/index/index',
      envVersion: 'release',
      success: function (errMsg) {
        console.log('success msg:', errMsg)
      },
      fail: function(errMsg) {
        wx.showModal({
          title: '挑战失败',
          content: '请升级微信后再试',
        })
        console.log('failed to navi to minipro', errMsg)
      }
    })

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