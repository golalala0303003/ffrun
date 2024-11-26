// pages/home/user/addcredit/addcredit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uncommit_address:""
  },
  formSubmit:function(e){
    this.setData({
      uncommit_address:e.detail.value.input
    },()=>{
      this.user_register();
    }  );
  },
  user_register(){
    let temp_info=wx.getStorageSync('user_info');
    let temp_id=wx.getStorageSync('user_id');
    let temp_openId=wx.getStorageSync('user_open_id');
    let that=this;
    //console.log("test是否更改",that.data.uncommit_address);
    //console.log("获取到当前userinfo",temp_info);
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/user/user',
      method:'PUT',
      data:{
        userId: temp_id,
        openId: temp_openId,
        username: temp_info.username,
        phone: temp_info.phone,
        account: temp_info.account,
        userStar: temp_info.userStar,
        orderNNum: temp_info.orderNNum,
        orderNum: temp_info.orderNum,
        userAddress: that.data.uncommit_address,
        tickets:temp_info.tickets
      },
      success(res){
        if(res.statusCode===200){
          console.log("注册/更新数据成功");
          that.get_userinfo();
        }
        else{
          console.log("注册/更新数据失败");
        }
      }

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