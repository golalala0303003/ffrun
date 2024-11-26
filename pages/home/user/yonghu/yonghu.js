// pages/home/user/yonghu/yonghu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex_array:[
      '保密',
      '男',
      '女'
    ],
    sex_index:0,

    uncommit_name:"",
    uncommit_phone:"",
    uncommit_address:""
  },
  formSubmit:function(e){
    console.log(e.detail.value);
    this.setData( {
      uncommit_name:e.detail.value.user_name,
      uncommit_phone:e.detail.value.user_phone,
      uncommit_address:e.detail.value.user_address
    } ,  ()=>{
      this.user_register();
    });
    
  },

  user_register(){
    let temp_info=wx.getStorageSync('user_info');
    let temp_id=wx.getStorageSync('user_id');
    let temp_openId=wx.getStorageSync('user_open_id');
    let that=this;
    //console.log("test是否更改",that.data.uncommit_address);
    console.log("获取到当前userinfo",temp_info);
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/user/user',
      method:'PUT',
      data:{
        userId: temp_id,
        openId: temp_openId,
        username: that.data.uncommit_name,
        phone: that.data.uncommit_phone,
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
        }
        else{
          console.log("注册/更新数据失败");
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

  },

  onEditorReady(){
    console.log("editor is ready!")
    const that = this;
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
    console.log("inital success!");
  },

  onEditorReady1(){
    console.log("editor is ready!")
    const that = this;
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
    console.log("inital success!");
  },

  bindPickerChange: function(e) {
    console.log('用户选择了', e.detail.value)
    this.setData({
      address_index: e.detail.value
    })
  }

})