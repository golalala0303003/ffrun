// pages/home/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    message:'',
    nums_rider:0,
    currentIndex:0,
    banners:[{id:0,src:"/static/index/banner1.jpg"},
    {id:1,src:"/static/index/banner2.jpg"},
    {id:2,src:"/static/index/banner1.jpg"},
    ],
    index_item:[
      {image:'/static/icon_index/快递.png',text:'代取快递',url:'/pages/home/index/index_navigate/qukuaidi/qukuaidi'},
      {image:'/static/icon_index/运输.png',text:'代寄快递',url:'/pages/home/index/index_navigate/jikuaidi/jikuaidi'},
      {image:'/static/icon_index/外卖.png',text:'代拿外卖',url:'/pages/home/index/index_navigate/nawaimai/nawaimai'},
      {image:'/static/icon_index/麦当劳.png',text:'代取麦当劳',url:'/pages/home/index/index_navigate/mcDonald/mcDonald'},
      {image:'/static/icon_index/肯德基2.png',text:'代取肯德基',url:'/pages/home/index/index_navigate/kfc/kfc'},
      {image:'/static/icon_index/跑腿.png',text:'智能跑腿',url:'/pages/home/index/index_navigate/runleg/runleg'},
    ]
  },
  tapTocall:function(event)
  {
   console.log("tap picture to invite")
  },

  onItemTap:function(event){
    console.log(event);
    const url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url:url
    })
  },

  bindchange(e){
    //console.log(e.detail.current);
    this.setData({
      currentIndex:e.detail.current
    });
    //console.log(this.data.currentIndex);
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
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/user/user/login',
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
          console.log("登录完成，数据已经储存");
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
    console.log("现在准备登录");
    this.loginFunction();
    
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
    wx.showLoading({
      title: '加载中',
    })
    
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({
        title: '刷新成功',
        icon:'success',
        duration: 2000
      })
    }, 2000)
    
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