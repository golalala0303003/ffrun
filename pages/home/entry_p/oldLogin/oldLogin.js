// pages/home/entry_p/oldLogin/oldLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login_name:""
  },
  login_back_old(){
    let that=this;
    let temp_name=this.data.login_name;
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/user/user/login',
      method: 'POST',
      data:{
        userName:temp_name
      },
      success:(res)=>{
        if(res.statusCode===200){
          console.log("成功读取该用户信息");
          console.log("这个是user_info----------------------",res.data.data);
          wx.setStorageSync('user_info',res.data.data );
          wx.setStorageSync('user_open_id', res.data.data.openId);
          wx.setStorageSync('user_id', res.data.data.userId);
          console.log("成功更新用户信息");
          console.log("孩子们，我回来了--------------------------------");
          wx.switchTab({
            url: '/pages/home/index/index',
          })
        }
        else{
          console.log("请求失败");
        }
      }
    })
  },
  formSubmit:function(e){
    this.setData({
      login_name:e.detail.value.input
    });
    this.login_back_old();
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