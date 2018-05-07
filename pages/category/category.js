// category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openT: '8:00',
    closedT: '18:00',
    jobs: false,
    recruit:[],
    busn:{},
    epy_flag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cid =  wx.getStorageSync('category') || 'Food'  
    var that = this
    wx.showLoading({
      title: '加载中...',
    })
    if(cid!=='Jobs'){
    wx.request({
      url: 'https://aws.canberracircle.com/yp/api/category',
      data: {
        cid: cid
      },
      success: function(res) {
        console.log('sucess request', res.data)
        that.setData({
          busn : res.data
          })
        wx.hideLoading()  
      },
      fail: function(res){
        console.log('request failed')
        wx.hideLoading()
        wx.showModal({
          title: '加载失败',
          content: '请重新打开页面尝试',
        })
      }
    })
    }else{
      wx.request({
        url: 'https://aws.canberracircle.com/yp/api/recruit/',
        success: function(res){
          console.log('sucess request', res.data)
          for(var i=0;i<res.data.length;i++){
            res.data[i].time = res.data[i].time.substring(0,10)
          }
          that.setData({
            recruit: res.data,
            jobs: true
          })
          wx.hideLoading()
        },
        fail: function(res){
          console.log('request failed')
          wx.hideLoading()
          wx.showModal({
            title: '加载失败',
            content: '请重新打开页面尝试',
          })
        }
      })
    }
  },
  call: function (e) {
    var pno = e.currentTarget.id || '04123985555'
    wx.makePhoneCall({
      phoneNumber: pno,
    })
  },
  goJobDes: function (event){
    var jid = event.currentTarget.id
    var url = '../shop/shop?bid=job&jid='+jid
    wx.navigateTo({
      url: url,
    })
  },
  goRestaurant: function(event){
    var bid = event.currentTarget.id
    var url = '../shop/shop?bid='+bid
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
    // both is empty
    if(!(this.data.busn|| this.data.recruit)){
      this.setData({
        ept_flag: true
      })
    }
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