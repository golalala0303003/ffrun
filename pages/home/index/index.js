// pages/home/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    message:'',
    nums_rider:0,
    currentIndex:0,
    banners:[{id:0,src:"/static/index/banner1.jpg"},
    {id:1,src:"/static/index/banner2.jpg"},
    {id:2,src:"/static/index/banner1.jpg"},
    ],
    index_item:[
      {image:'/static/icon_index/快递.png',text:'代取快递',url:'/pages/home/index/index_navigate/qukuaidi/qukuaidi'},
      {image:'/static/icon_index/运输.png',text:'代寄快递',url:'/pages/home/index/index_navigate/jikuaidi/jikuaidi'},
      {image:'/static/icon_index/外卖.png',text:'代拿外卖',url:'/pages/home/index/index_navigate/nawaimai/nawaimai'},
      {image:'/static/icon_index/麦当劳.png',text:'代取麦当劳',url:'/pages/home/index/index_navigate/mcDonald/mcDonald'},
      {image:'/static/icon_index/肯德基2.png',text:'代取肯德基',url:'/pages/home/index/index_navigate/kfc/kfc'},
      {image:'/static/icon_index/跑腿.png',text:'智能跑腿',url:'/pages/home/index/index_navigate/runleg/runleg'},
    ]
  },
  tapTocall:function(event)
  {
   console.log("tap picture to invite")
  },

  onItemTap:function(event){
    console.log(event);
    const url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url:url
    })
  },

  myFunction(){
    this.setData(   { message:"福州大学旗山校区" }    );
  },

  bindchange(e){
    //console.log(e.detail.current);
    this.setData({
      currentIndex:e.detail.current
    });
    //console.log(this.data.currentIndex);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.myFunction();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    wx.showLoading({
      title: '加载中',
    })
    
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({
        title: '刷新成功',
        icon:'success',
        duration: 2000
      })
    }, 2000)
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})