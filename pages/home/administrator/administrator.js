// pages/home/administrator/administrator.js
import test from '../../../data/test/test'
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: "all",
    orderListall:[],
    userListall:[],
    selectedItem: null,
  },
  tapuser:function(){
    wx.navigateTo({
      url: '/pages/home/administrator/user_temp/user_temp',
    })
  },
  changeTab: function (e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      currentTab: type,
    });
    console.log("change to",type);
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
    const that=this;
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/admin/order',
      success(res){
        if(res.statusCode===200){
          console.log("订单测试成功"),
          console.log(res.data.data),
          that.setData({
            orderListall:res.data.data
          })
          }
          else
          console.log("订单测试失败")
        }
    });
    
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/admin/user',
      success(res){
        if(res.statusCode===200){
          console.log("用户测试成功"),
          console.log(res.data.data),
          that.setData({
            userListall:res.data.data
          });
          console.log("这是用户列表",that.data.userListall);
        }
        else{
          console.log("man");
        }

      }
    });
    console.log("111",that.data.userListall);
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

  },

  checkod: function(e) {
    const orderId = e.currentTarget.dataset.orderId;
    const item = this.data.orderListall.find(i => i.order_id === orderId);
    if (item) { // 确保找到了项
      this.setData({
        selectedItem: item
      });
      wx.navigateTo({
        url: `/pages/home/administrator/order_temp/order_temp?item=${encodeURIComponent(JSON.stringify(item))}`
      });
    } else {
      console.log('未找到对应的订单项');
    }
  },

  checkus: function(e) {
    const userId = e.currentTarget.dataset.userId;
    const item = this.data.userListall.find(i => i.user_id === userId);
    if (item) { // 确保找到了项
      this.setData({
        selectedItem: item
      });
      wx.navigateTo({
        url: `/pages/home/administrator/user_temp/user_temp?item=${encodeURIComponent(JSON.stringify(item))}`
      });
    } else {
      console.log('未找到对应的订单项');
    }
  }

})