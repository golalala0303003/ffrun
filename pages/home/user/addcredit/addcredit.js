// pages/home/user/addcredit/addcredit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uncommit_account:0
  },
  formSubmit:function(e){
    console.log("这是输入的数值",e.detail.value.input);
    
    let temp_account=wx.getStorageSync('user_info');
    
    let origin_account=parseInt(temp_account.account);
    console.log("这个是原来的账户数值",origin_account);
    
    
    let add_account=parseInt(e.detail.value.input);
    console.log("这个是要加的值",add_account);

    let final=origin_account+add_account;
    console.log("新的用户余额为",final);

    this.setData({
      uncommit_account:final
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
        account: that.data.uncommit_account,
        userStar: temp_info.userStar,
        orderNNum: temp_info.orderNNum,
        orderNum: temp_info.orderNum,
        userAddress: temp_info.userAddress,
        tickets:temp_info.tickets
      },
      success(res){
        if(res.statusCode===200){
          console.log("注册/更新数据成功");
          wx.switchTab({
            url: '/pages/home/user/user',
          })
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