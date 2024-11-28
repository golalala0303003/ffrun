// pages/home/rider/rider.js
import test from '../../../data/test/test'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:"all",
    orderListall:[],
    riderListall:[],
    selectedItem: null
  },
  changeTab: function (e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      currentTab: type,
    });
    console.log("change to",type);
    test.get_rider_order(
      (data)=>{
        console.log("@@@",data.data);
        this.setData({
          orderListall:data.data,
        });
        console.log("骑手端：",this.data.orderListall);
      }
    );
    test.get_yijie(
      (data)=>{
        console.log("返回的已接订单",data.data);
        this.setData({
          riderListall:data.data,
        });
        console.log("已接订单：",this.data.riderListall);
      }
    );
  },
  goToNewPage: function() {
    wx.navigateTo({
      url: '/pages/home/rider/rider_info/rider_info' // 新页面路径
    });
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
    test.get_rider_order(
      (data)=>{
        console.log("@@@",data.data);
        this.setData({
          orderListall:data.data,
        });
        console.log("骑手端：",this.data.orderListall);
      }
    );
    test.get_yijie(
      (data)=>{
        console.log("返回的已接订单",data.data);
        this.setData({
          riderListall:data.data,
        });
        console.log("已接订单：",this.data.riderListall);
      }
    );
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
    test.get_rider_order(
      (data)=>{
        console.log(data.data);
        this.setData({
          orderListall:data.data,
        });
        console.log("刷新：",this.data.orderListall);
      }
    );
    test.get_yijie(
      (data)=>{
        console.log(data.data);
        this.setData({
          orderListall:data.data,
        });
        console.log("已接订单：",this.data.orderListall);
      }
    );
    
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

  jmpod: function(e) {
    const orderId = e.currentTarget.dataset.orderId;
    const item = this.data.orderListall.find(i => i.order_id === orderId);
    if (item) { 
      this.setData({
        selectedItem: item
      });
      wx.navigateTo({
        url: `/pages/home/rider/Order_detail/Order_detail?item=${encodeURIComponent(JSON.stringify(item))}`
      });
    } else {
      console.log('未找到对应的订单项');
    }
  },

  jiedan:function(e)
  {
    const orderId = e.currentTarget.dataset.orderId;
    const riderId = wx.getStorageSync('user_info').userId;
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/user/rider/accept',
      method:'PUT',
      data:{
        orderId:orderId,
        riderId:riderId
      },
      success(res) {
        console.log('请求成功:', res.statusCode);
      },
      fail(error) {
        console.error('请求失败:', error);
      }
    });
    test.get_rider_order(
      (data)=>{
        console.log("@@@",data.data);
        this.setData({
          orderListall:data.data,
        });
        console.log("骑手端：",this.data.orderListall);
      }
    );
    test.get_yijie(
      (data)=>{
        console.log("返回的已接订单",data.data);
        this.setData({
          riderListall:data.data,
        });
        console.log("已接订单：",this.data.riderListall);
      }
    );
  }

})