// pages/home/index/index_navigate/qukuaidi/qukuaidi.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tip_array:[
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9'
    ],
    basiccost:25,
    totalcost:0,

    coupons_array:[],
    address_array:[],
    address_index:0,
    coupons_index:0,
    tip_index:0,
    finalPrice:0,

    deliverTime:"",
    description:"",
    couponspick:0,
    tipspick:0
  },
  onEditorReady(){
    console.log("editor is ready!")
    const that = this;
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
    console.log("inital success!");
  },
  insertImage(){
    console.log("tap");
    const that = this;
    wx.chooseMedia({
      count:1,
      mediaType:['image'],
      success(res){
        console.log("picture got");
        console.log(res.tempFiles[0].tempFilePath);
        if(res.tempFiles[0].tempFilePath){
          const myFiles = res.tempFiles[0].tempFilePath;
          that.editorCtx.insertImage({
            src:myFiles,
            width:'60%',
            height:'auto',
            success(insertRes) {
              console.log("Image inserted successfully:", insertRes);
            },
            fail(insertErr) {
              console.error("Image insertion failed:", insertErr);
            }
          });
        }
      }
    })
  },
  bindPickerChange: function(e) {
    console.log('用户选择了', e.detail.value)
    this.setData({
      address_index: e.detail.value
    })
  },
  bindPickerChange2: function(e) {
    console.log('用户选择了', e.detail.value)
    this.setData({
      coupons_index: e.detail.value
    })
  },
  bindPickerChange3: function(e) {
    console.log('用户选择了', e.detail.value)
    this.setData({
      tip_index: e.detail.value
    })
  },

  create_order(){
    let temp_id=wx.getStorageSync('user_id');
    let temp_address=wx.getStorageSync('user_info');
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/user/order',
      method:'POST',
      data:{
        typeService:"代取快递",
        userId:temp_id,
        description:this.data.description,
        deliveryAddress:temp_address.userAddress,
        deliveryTime:this.data.deliverTime
      },
      success(res){
        if(res.statusCode===200){
          console.log("订单提交成功",res);
        }
      }
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      deliverTime:e.detail.value.deliverTime,
      description:e.detail.value.add,
      couponspick:e.detail.value.couponspick,
      tipspick:e.detail.value.tipspick
    });
    console.log("开始提交订单");
    //console.log("这是订单信息：",this.data.deliverTime,this.data.description);
    this.create_order();
    /*wx.navigateTo({
      url: '/pages/home/commit_success/commit_success',
    })*/
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
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


  load_address(){
    console.log("正在加载用户地址");
    let temp_info=wx.getStorageSync('user_info');
    this.setData({
      address_array:temp_info.userAddress
    });
    console.log("加载完成,用户地址为",this.data.address_array);
  },
  load_coupons(){
    console.log("正在加载用户优惠券");
    let temp_info=wx.getStorageSync('user_info');
    this.setData({
      coupons_array:temp_info.tickets
    });
    console.log("加载完成,用户优惠券为",this.data.coupons_array);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.load_address();
    this.load_coupons();

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