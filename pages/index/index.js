Page({
	data: {
		filterId: 1,
    currency: '',
		address: 'ANU, Acton',
    recentAct: [],
		banners: [
			{
				id: 9998,
        image: '../../imgs/tabBar/bk1.jpeg',
        url: 'https://aws.canberracircle.com/',
        name: 'Asian Supa Grocery'
			},
			{
				id: 9999,
        image: '../../imgs/tabBar/bk2.jpeg',
        url: 'https://aws.canberracircle.com/',
				name: 'ALDI'
			}
		],
		icons: [
			[
				{
					id: 1,
					img: '/imgs/index/icon_1.jpg',
					name: '餐厅',
					category: 'Food',
          url: ''
				},
        // {
        //   id: 3,
        //   img: '/imgs/index/icon_7.jpg',
        //   name: '小程序',
        //   category: 'Activity',
        //   url: ''
        // },
  		]
		],
	},
	onLoad: function () {
		var that = this;
    wx.showLoading({
      title: 'Loading...',
    })
    wx.request({
      url: 'https://aws.canberracircle.com/yp/api/activity',
      success: function (res) {
        var newbanners =[] ;
        var oldbanners= that.data.banners
        var recent = []
        for(var i=0; i < res.data.length;i++){
          res.data[i].image = "https://aws.canberracircle.com" + res.data[i].image
          res.data[i].thumbnail = "https://aws.canberracircle.com" + res.data[i].thumbnail
          if(res.data[i].tag==='banner'){  
            newbanners.push(res.data[i])
          }
          else if(res.data[i].tag === 'recent'){
            recent.push(res.data[i])
          }
        }
        for(var i=0;i< oldbanners.length;i++){
          newbanners.push(oldbanners[i])
        }
        that.setData({
          banners: newbanners,
          recentAct: recent
        }) 
      },
      fail: function (res){
        console.log('failed to log banner info')
      }
    })
    this.setData({
      currency:5.01
    })
  wx.hideLoading();
  // 该url已失效
  //   wx.request({
  //     url: '',
  //     success: function (res) {
  //       that.setData({
  //         currency: res.data.rate.substring(0, 5)
  //       })
  //       console.log('success basic', res.data)
  //     },
  //     fail: function (res) {
  //       console.log('failed to load basic')
  //     }
  //   })
  //   wx.hideLoading()    
	},
	onShow: function () {
  },
	toNearby: function (event) {
		var self = this;
		var tag = event.currentTarget.id
    wx.setStorageSync('category', tag)
    wx.navigateTo({
      url: '../category/category',
    })
	},
	
	tapBanner: function (e) {
		var url = e.currentTarget.id;
    wx.setStorageSync('article_url', url)
		wx.navigateTo({
      url: '../articles/articles',
    })
	},
  toMore: function (){
    wx.navigateTo({
      url: '../more/more',
    })
  },
  toJobs: function () {
    wx.setStorageSync('category', 'Jobs')
    wx.navigateTo({
      url: '../category/category',
    })
  },
  // 转发设置
  onShareAppMessage: function (){
    var obj = {}
    obj = {
      title: '最全的堪培拉商家汇总！',
      imageUrl:'/imgs/cover.jpg',
      success: function(){
        wx.showToast({
          title: '转发成功',
          icon: 'success',
          duration: 0.5,
          mask: true,
        })
      },
    }
    return obj;
  }
});

