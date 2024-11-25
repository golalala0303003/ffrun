// pages/home/jump_test1/jump_test1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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