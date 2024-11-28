// pages/home/order/order_Done/order_Done.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp_order:null,
    temp_star:0
  },
  formSubmit:function(e){
    this.setData({temp_star:e.detail.value.input});
    let temp_object=this.data.temp_order;
    let temp_object_star=this.data.temp_star;
    //console.log(this.data.temp_star);
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/user/order',
      method:'PUT',
      data:{
        orderId: temp_object.order_id,
        typeService: temp_object.typeService,
        status: 2,
        userId: temp_object.userId,
        description:temp_object.description,
        riderId: temp_object.riderId,
        deliveryAddress:temp_object.deliveryAddress,
        deliveryTime: temp_object.deliveryTime,
        orderStar:temp_object_star
      },
      success(res){
        if(res.statusCode===200){
          console.log("完成订单成功");
          wx.navigateTo({
            url: '/pages/home/order/order',
          })
        }
        else{
          console.log("完成订单失败");
          console.log(res);
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      temp_order:wx.getStorageSync('temp_order_zr')
    });
    console.log("这是目标order",this.data.temp_order);
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