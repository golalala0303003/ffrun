Page({
  data: {
    items: [
      {x:"a1",y:"a2"},
      {x:"b1",y:"b2"},
      {x:"c1",y:"c2"},
      {x:"d1",y:"d2"},
      {x:"e1",y:"e2"},

    ]
  },
  handleTap(e){
    let temp_index=e.currentTarget.dataset.index;
    console.log(e.currentTarget);
    wx.setStorageSync('temp_trans_index', this.data.items[temp_index]);
    wx.navigateTo({
      url: '/pages/home/runleghelp/test111/test111',
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