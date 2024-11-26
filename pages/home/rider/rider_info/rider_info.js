// pages/home/rider/rider_info/rider_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp_userinfo:{}
  },
  onTapdown(){
    wx.navigateTo({
      url: '/pages/home/order/order',
    })
  },
  onTapkefu(){
    wx.makePhoneCall({
      phoneNumber: '123456789',
    })
  },
  onTapuser(){
    wx.navigateTo({
      url: '/pages/home/user/yonghu/yonghu',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
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
    this.setData({
      temp_userinfo:wx.getStorageSync('user_info')
    });
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