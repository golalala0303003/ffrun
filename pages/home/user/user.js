// pages/home/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_name:"",
    user_phone:"",
    user_account:0,
    user_ticket:0,
    mutifunc:[
      {id:1,name:"更改地址",thumb:'/static/user_icon/地址.png',url:'/pages/home/jump_test1/jump_test1',openType:'navigate'},
      {id:2,name:"呼叫客服",thumb:'/static/user_icon/客服.png',url:'/pages/home/index/index_navigate/qukuaidi/qukuaidi',openType:'navigate'},
      {id:3,name:"查看帮助",thumb:'/static/user_icon/帮助.png',url:'/pages/home/runleghelp/runleghelp',openType:'navigate'},
      {id:4,name:"查看下级",thumb:'/static/user_icon/查看下级.png',url:'/pages/home/index/index_navigate/qukuaidi/qukuaidi',openType:'navigate'},
    ]
  },
  onTapuser:function(event){
    console.log("someone tap user");
    wx.navigateTo({
      url: '/pages/home/user/yonghu/yonghu',
    })
  },
  onTapadmin:function(event){
    wx.navigateTo({
      url: '/pages/home/administrator/administrator',
    })
  },
  onTapkefu:function(event){
    console.log("someone tap 拨打客服电话");
    wx.makePhoneCall({
      phoneNumber: '123456789',
    })
  },
  onTapaddmoney:function(event){
    console.log("someone tap 充值");
    wx.navigateTo({
      url: '/pages/home/user/addcredit/addcredit',
    })
  },
  onTapusecard:function(event){
    console.log("someone tap 查看卡包");
    wx.navigateTo({
      url: '/pages/home/user/ticket/ticket',
    })
  },
  onTaploc:function(event){
    console.log("someone tap 更改地址");
    wx.navigateTo({
      url: '/pages/home/user/address/address',
    })
  },
  onTaphelp:function(event){
    console.log("someone tap 查看帮助");
    wx.navigateTo({
      url: '/pages/home/runleghelp/runleghelp',
    })
  },
  onTapdown:function(event){
    console.log("someone tap 我的订单");
    wx.navigateTo({
      url: "/pages/home/order/order",
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

  loadinfo(){
    this.setData({
      user_name:wx.getStorageSync('user_info').username,
      user_phone:wx.getStorageSync('user_info').phone,
      user_account:wx.getStorageSync('user_info').account,
      user_ticket:wx.getStorageSync('user_info').ticketList.length
    });
    console.log("新的数据已经被更新");
  },
  /**
   * 生命周期函数--监听页面显示
   */
  get_userinfo(){
    let that=this;
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
          that.loadinfo();
        }
        else{
          console.log("信息读取失败");
        }
      }
      
    })
  },
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