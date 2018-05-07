// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    busnName:'',
    menu:{},
    sidebar:[],
    showCate:'',  
    // winVisible:false,
    // smwItem:{}
    },
  // popWindow: function (e) {
  //   var item = e.currentTarget.dataset.item
  //   var visible = !this.data.winVisible
  //   console.log("++++",item)
  //   this.setData({
  //     smwItem: item,
  //     winVisible: visible
  //   })
  // },
  changeCate: function (e){
    var cate = e.currentTarget.dataset.category
    console.log('Cate', cate)
    this.setData({
      showCate: cate
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var bid = options.bid || '2'  // 2 is the id of busn 'example1'
    var name = options.name
    var dat = {}, sidebar = []
    var that = this
    wx.showLoading({
      title: 'Loading...',
    })
    wx.request({
      url: 'https://aws.canberracircle.com/yp/api/menu',
      data:{
        // this place requires the id of the busn, not the name
        bid: bid
      },
      success: function (res){
        for(var e of res.data){
          e.cover = 'https://aws.canberracircle.com'+e.cover
          if(dat[e.category]!==null && dat[e.category]!==undefined){
            dat[e.category].push(e)
          }else{
            dat[e.category] = [e]
            sidebar.push(e.category)
          }
        }
        console.log('received data:', res.data)
        console.log('serialized data', dat)
        that.setData({
          busnName: name,
          sidebar: sidebar,
          menu: dat,
          showCate: sidebar[0]
        })
        wx.hideLoading()
      },
      fail: function (res) {
        wx.showToast({
          title: '加载失败',
        })
        wx.hideLoading()
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