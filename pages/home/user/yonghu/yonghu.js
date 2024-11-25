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