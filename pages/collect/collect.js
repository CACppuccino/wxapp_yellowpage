// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collections:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goRes: function (e) {
    var plc = e.currentTarget.id
    // wx.setStorageSync('store', plc)
    var url = '../shop/shop?bid='+plc
    console.log(e.currentTarget)
    console.log('jid---', e.currentTarget.dataset.jid)
    if(plc==='job') url = url+'&jid='+e.currentTarget.dataset.jid
    console.log(url)
    wx.navigateTo({
      url: url,
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
    var likelist = wx.getStorageSync('likelist') || []
    console.log('likelist: ', likelist)
    this.setData({
      collections: likelist
    })
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