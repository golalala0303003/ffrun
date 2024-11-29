// pages/home/entry_p/entry_p.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  loginFunction(){
    wx.login({
      success: (res) => {
        console.log("成功登录");
        console.log("这是你的微信临时登录凭证",res.code);
        wx.setStorageSync('user_login_code', res.code);//保存临时凭证
        this.login_back();
      },
    })
  },
  //在后端登录并且注册
  login_back(){
    let code_temp;
    code_temp=wx.getStorageSync('user_login_code');
    //console.log("从缓存中调用code",code_temp);
    wx.request({
      url: 'http://localhost:8080/user/user/register',
      method: 'POST',
      data:{
        code:code_temp
      },
      success:(res)=>{
        if(res.statusCode===200){
          console.log("请求成功",res);
          console.log("open_Id为",res.data.data.open_id);
          console.log("user_Id为",res.data.data.id);
          console.log("token为",res.data.data.token);
          wx.setStorageSync('user_open_id', res.data.data.open_id);
          wx.setStorageSync('user_id', res.data.data.id);
          wx.setStorageSync('user_token', res.data.data.token);
          console.log("注册完成，数据已经储存");
          wx.navigateTo({
            url: '/pages/home/user/yonghu/yonghu',
          });
          this.get_userinfo();//载入用户信息
        }
        else{
          console.log("请求失败");
        }
      }
    })
  },
  get_userinfo(){
    let id_temp=wx.getStorageSync('user_id')
    console.log("开始读取该用户信息");
    wx.request({
      url: `http://localhost:8080/user/user/${id_temp}`,
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
  registerNow(){
    console.log("现在准备登录");
    this.loginFunction();
    
  },
  loginNow(){
    wx.navigateTo({
      url: '/pages/home/entry_p/oldLogin/oldLogin',
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