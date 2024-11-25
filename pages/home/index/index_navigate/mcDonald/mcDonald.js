// pages/home/index/index_navigate/mcDonald/mcDonald.js
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
    coupons_array:[
      '不用优惠券',
      '-5',
      '-10',
      '-15',
      '-20'
    ],
    address_array:[
      '翻斗花园',
      '下北泽',
      'de_dust2',
      '111'
    ],
    address_index:0,
    coupons_index:0,
    tip_index:0,
    finalPrice:0
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

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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