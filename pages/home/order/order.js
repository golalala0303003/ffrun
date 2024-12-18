// pages/home/order/order.js
import test from '../../../data/test/test'
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:"all",
    orderListall:[],
    selectedItem: null
    
  },
  changeTab: function (e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      currentTab: type,
    });
    test.getorder(
      (data)=>{
        console.log(data.data);
        this.setData({
          orderListall:data.data,
        });
        console.log("我们成功定义了信息：",this.data.orderListall);
      }
    );
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
    test.getorder(
      (data)=>{
        console.log(data.data);
        this.setData({
          orderListall:data.data,
        });
        console.log("我们成功定义了信息：",this.data.orderListall);
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
    test.getorder(
      (data)=>{
        console.log(data.data);
        this.setData({
          orderListall:data.data,
        });
        console.log("我们成功定义了信息：",this.data.orderListall);
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

  jmpOD: function(e) {
    console.log(e);
    const orderId = e.currentTarget.dataset.order_id;
    console.log("点击的 orderId:", orderId); // 查看点击的 orderId
    console.log("orderListall 数据:", this.data.orderListall); // 查看 orderListall 数据
    const item = this.data.orderListall.find(i => i.orderId === orderId);
    if (item) { // 确保找到了项
      this.setData({
        selectedItem: item
      });
      wx.navigateTo({
        url: `/pages/home/order/order_detail/order_detail?item=${encodeURIComponent(JSON.stringify(item))}`
      });
    } else {
      console.log('未找到对应的订单项');
    }
  },
  jmpDone:function(e){
    console.log(e);
    const orderId = e.currentTarget.dataset.order_id;
    console.log("点击的 orderId:", orderId); // 查看点击的 orderId
    console.log("orderListall 数据:", this.data.orderListall); // 查看 orderListall 数据
    const item = this.data.orderListall.find(i => i.orderId === orderId);
    if (item) { // 确保找到了项
      this.setData({
        selectedItem: item
      });
      wx.setStorageSync('temp_order_zr', this.data.selectedItem);
      wx.navigateTo({
        url: `/pages/home/order/order_Done/order_Done?item=${encodeURIComponent(JSON.stringify(item))}`
      });
    } else {
      console.log('未找到对应的订单项');
    }
  }
  
})