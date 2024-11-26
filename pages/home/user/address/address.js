// pages/home/user/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chargeNum:0
  },
  formSubmit:function(e){
    //console.log("充值的金额为",e.detail.value.input);
    this.setData({
      chargeNum:e.detail.value.input
    });
    this.chargeM();
  },
  chargeM(){
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/user/user',
      method:'PUT',
      
    })
  },
  get_userinfo(){
    let id_temp=wx.getStorageSync('user_id')
    console.log("开始读取该用户信息");
    wx.request({
      url: `http://127.0.0.1:4523/m1/5470558-5146069-default/user/user/${id_temp}`,
      success(res){
        if(res.statusCode===200){
          console.log("成功读取该用户信息");
          console.log("这个是user_info",res.data.data);
          wx.setStorageSync('user_info', res.data.data);
          console.log("成功存储用户信息");
        }
        else{
          console.log("信息读取失败");
        }
      }
      
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
    this.get_userinfo();
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