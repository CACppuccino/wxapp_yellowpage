// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids1:[
      //住房相关
      { name: '房产中介', tag: 'fczj' },
      { name: '窗帘缝纫', tag:'taylor'},
      { name: '园艺除草', tag: 'garden' },
      { name: '防蛇除虫', tag: 'bugs' },
      { name: '住房清洁', tag: 'houseclean' },
      { name: '水管维修', tag: 'pipe' },
      { name: '家电维修', tag: 'instrument' }, 
      { name: '房屋修缮', tag: 'housemaintain' }, 
      { name: '电气维修', tag: 'electric' },  
      { name: '货车搬家', tag: 'housemove' },  
      { name: '紧急开锁', tag: 'unlock' }, 
      { name: '家居建材', tag: 'furniture' },
      ],
//生活服务
    grids2:[  
      {name:'超市日用', tag:'supermarket'},
      {name:`教育培训`, tag: 'study'},
      { name: '机票旅游', tag: 'travel' },
      { name: '美容理发', tag: 'barber' }, 
      { name: '宠物相关', tag: 'pet' }, 
      { name: '照相录像', tag: 'photo' }, 
      { name: '代办签证', tag: 'visa' },
      { name: '家政服务', tag: 'housework' },  
      { name: '车辆修理', tag: 'carrepair' },  
      { name: '购车检查', tag: 'carcheck' },  
      { name: '修自行车', tag: 'bikerepair' }, 
      { name: '考牌练车', tag: 'cartest' },
      { name: '律师服务', tag: 'lawyer' },
      { name: '行李寄存', tag: 'luggage' },
      { name: '工具租用', tag: 'toolrent' },
      { name: '会计报税', tag: 'tax' },
      { name: '保险相关', tag: 'insurance' },
      { name: '翻译驾照', tag: 'interprator' },
      { name: '留学移民', tag: 'migration' },
      { name: '电话网络', tag: 'telenet' },
      { name: '饮食餐馆', tag: 'Food' },
      { name: '其他服务', tag: 'others' },      ],
      grids3:[
//医疗保健
      { name: '中医诊所', tag: 'cndoctor' },
      { name: '牙科诊所', tag: 'dentist' },
      { name: '心理咨询', tag: 'phlio' },
      { name: '家庭医生', tag: 'gp' },
      { name: '全科医生', tag: 'alldoc' },
      { name: '验光配镜', tag: 'eyedoc' },
      { name: '武术健身', tag: 'gongfu' },
      { name: '瘦身减肥', tag: 'slim' },
      { name: '跌打扭伤', tag: 'injury' },
      ],
grids4:[
//生意服务
      { name: '招租招商', tag: 'busnin' },
      { name: '生意转让', tag: 'busnmove' },
      { name: '印刷复印', tag: 'print' },
      { name: '商业招牌', tag: 'busnlogo' },
      { name: '快递服务', tag: 'express' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  goCategory: function (event){
    var category = event.currentTarget.id;
    wx.setStorageSync('category', category)
    wx.navigateTo({
      url: '../category/category',
    })
  }
})