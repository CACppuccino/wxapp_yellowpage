// shop.js
Page({

  
    //页面的初始数据
  data: {
    gallery: [],
    lat: '22.5201685860',
    lon: '114.1232299805',
    busn:{},
    banners: [ ],
    liked: false,
    likedJob: false,
    jobDes:{},
    jobs: false
    // lat: '-35.278577',
    // lon: '149.123833'

  },


  // scrolled: function (e) {
  //   console.log('scrooooooooooooled')
  // },
 // Bug here 
   
    phone: function (e) {
      var pn = e.currentTarget.dataset.pn
    wx.makePhoneCall({
      phoneNumber: pn,
    })
  },
  
  toMenu: function () {
    var url = '/pages/menu/menu' 
    url = url + '?bid='+ this.data.busn.id
    url = url + '&name=' + this.data.busn.name
    wx.navigateTo({
      url: url,
    })
  }, 
  copyToBoard: function (e){
    var cb = e.currentTarget.dataset.cb 
    console.log('clipboard', cb)
    wx.setClipboardData({
      data: cb,
    })
    wx.showToast({
      title: '复制成功',
    })
  },
  map: function () { 
    var that=this
    // console.log(that.busn)
    wx.setStorageSync('map', {
      lat: that.data.busn.geo_lat,
      lng: that.data.busn.geo_lng      
    })
    wx.navigateTo({
      url: '../map/map',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log('onLoad data: ', option.bid)
    var that = this
    wx.showLoading({
      title: 'Loading..'
    })
    var bid = option.bid 
    // should show the job info not shop's

    if(bid==='job'){
      // get the job id
      var jid = option.jid //|| wx.getStorageSync('jobId')

      /*
      * check wether stared by user
       */
      var collect_list = wx.getStorageSync('likelist')
      for (var e of collect_list) {
        if (bid === e.bid || bid==='job') {
          // is the job liked by the user
          if(jid == e.jid){ // === is not working for this
            console.log('likedJob is set!!!!')
            that.setData({
              likedJob: true
            })
          }else{
            console.log('liked is set!!!!')
            that.setData({
              liked: true
            })
          }
        }
      }
    /*---------------------------------- */
      wx.request({
        url: 'https://aws.canberracircle.com/yp/api/recruit',
        data:{
          id: jid
        },
        success: function (res) {
          res.data.name.cover = ' https://aws.canberracircle.com' + res.data.name.cover
          var anpic = {
            id: 1,
            img: res.data.name.cover
          }

          var newbanners = that.data.banners
          newbanners.push(anpic)

          that.setData({
            jobs : true,
            jobDes: res.data,
            busn: res.data.name,
            banners: newbanners
          })
          console.log('load success',res.data)
          wx.hideLoading()
        },
        fail: function (res) {
          wx.hideLoading()
          console.log('failed to load info ')
          wx.showModal({
            title: '数据加载失败',
            content: '请重新打开',
          })
        }

      })
    }
    // is only showing the business
    else{
    /*
    * check wether stared by user
     */
    var collect_list = wx.getStorageSync('likelist')
    console.log('+-+', collect_list)
    for(var e of collect_list)
    {  
      if(bid===e.bid && e.jid === ""){
        that.setData({
          liked: true
        })
        break
      }
    }
    /*---------------------------------- */
    
    wx.request({
      url: 'https://aws.canberracircle.com/yp/api/busnfull' ,
      data: {
        bid: bid
      },
      success: function(res) {
        console.log("success", res.data)
        res.data.cover = 'https://aws.canberracircle.com'+res.data.cover
        var anpic = {
          id: 1,
          img: res.data.cover
        }
        
        var newbanners = that.data.banners
        newbanners.push(anpic)
        
        /* need a space for receiving the gallery  */
        for (var i = 0; i < res.data.gallery.length; i++) {
          var anotherpic = {
            id: i + 2,
            img: 'https://aws.canberracircle.com/media/' + res.data.gallery[i]
          }
          newbanners.push(anotherpic)
        }
        that.setData({
          busn : res.data,
          banners: newbanners,
        })
        wx.hideLoading()
        console.log('after', that.data.banners)
      },
      fail: function(res){
        console.log("failed  to request")
        wx.showModal({
          title: '数据加载失败',
          content: '请重新打开',
        })
        wx.hideLoading()
      }
    })
    console.log('busn data',this.data.busn)
    }
    // functions.getDistrict(function (district) {
    //   functions.fetchShops.call(that, url, district, 0, pageSize, function (data) {
    //     that.setData({
    //       showLoading: false
    //     })
    //   })
    // })
  },

  loadMore: function () {
  
  },

  viewDetail: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../details/detail?id=' + ds.id + '&title=' + ds.title + '&type=coming'
    })
  },

  /*
  * star is tapped by the user 
   */
  likethis: function(e){
    var isJob = e.currentTarget.dataset.job === "true" ? true:false
    console.log('isJob', isJob)
    var likem 
    if(isJob)
      likem = (!(this.data.likedJob))
    else
      likem = (!(this.data.liked))
    var that = this
   // make the icon to response
    if(isJob) this.setData({ likedJob: likem })
    else this.setData({ liked: likem })
    // dislike this page lol
    if(!likem){
      var oldlist = wx.getStorageSync('likelist') 
      if(!oldlist) oldlist = []
      console.log('oldlist',oldlist)
      var newlist = []
      if(isJob){
        for (var i = 0; i < oldlist.length; i++) {
          console.log(oldlist[i])
          console.log(this.data.jobDes.id)
          if (!(oldlist[i].bid === "job" && oldlist[i].jid === this.data.jobDes.id))
            newlist.push(oldlist[i])
        }  
      }else{
        for(var i=0;i<oldlist.length;i++){
          if(!(oldlist[i].bid===this.data.busn.name && oldlist[i].jid ===''))
            newlist.push(oldlist[i])  
        }
      }
      wx.setStorage({
        key: 'likelist',
        data: newlist,
        success: function (){
          wx.showToast({
          title: '取消成功',
          })
        },
        fail: function() {
          console.log('取消失败')
        }
      })
    }
    // like this page hhhh (*\./*)
    else{
      var oldlist = wx.getStorageSync('likelist') 
      console.log('oldlist', oldlist)
      if(!oldlist) oldlist = []
      if(isJob){
      oldlist.push({
        bid: 'job',
        jid: this.data.jobDes.id || '',
        title: this.data.jobDes.title || ''
        })
        }else{
          oldlist.push({
            bid: this.data.busn.name,
            jid:'',
            title:''
          })
        }
      console.log('newlist1', wx.getStorageSync('likelist'))
      wx.setStorage({
        key: 'likelist',
        data: oldlist,
        success: function (){
            wx.showToast({
            title: '收藏成功',
            icon: "success"
            })
          },
        fail: function () { 
          wx.showToast({
          title: '收藏失败'
          })
        }
      })
    }
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
  // onReachBottom: function () {

  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this
    var title = '推荐：'+this.data.busn.name+(this.data.jobDes.title?(' -- '+this.data.jobDes.title):'')
    var path = ('/pages/shop/shop?bid=' + that.data.busn.name)
    // if is about job add the jobid as well
    if (this.data.jobs) path = '/pages/shop/shop?bid=job&jid=' + this.data.jobDes.id //wx.getStorageSync('jobId')

    return {
      title: title,
      path: path,
      imageUrl: that.data.busn.cover
    }
  }
})